import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + 'posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updateDate: new Date()
        }
        return axios
          .post(process.env.baseUrl + 'posts.json', createdPost)
          .then(res => {
            vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        const editPost = {
          ...editedPost,
          updateDate: new Date()
        }
        return axios
          .put(process.env.baseUrl + 'posts/' + editPost.id + '.json?auth=' + vuexContext.state.token, editPost)
          .then(res => {
            vuexContext.commit('editPost', editPost)
          })
          .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
          process.env.fbAPIkey
        if (!authData.isLogin) {
          authUrl =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
            process.env.fbAPIkey
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + result.expiresIn * 1000
            )
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + result.expiresIn * 1000
            )
            vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
          })
          .catch(e => console.log(e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req) {
        let token
        let tokenExpiration
        if (req) {
          if (!req.headers.cookie) {
            return
          } else {
            const jwtCookie = req.headers.cookie
              .split(';')
              .find(c => c.trim().startsWith('jwt='))
            if (!jwtCookie) {
              return
            }
            token = jwtCookie.split('=')[1]
            tokenExpiration = req.headers.cookie
              .split(';')
              .find(c => c.trim().startsWith('expirationDate='))
              .split('=')[1]
          }
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')

          if (new Date() > +tokenExpiration || !token) {
            return
          }
        }

        vuexContext.dispatch('setLogoutTimer', +tokenExpiration - new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
