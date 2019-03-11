import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post !',
                thumbnailLink:
                  'http://papers.co/wallpaper/papers.co-ny87-rain-road-street-city-nature-25-wallpaper.jpg'
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post !',
                thumbnailLink:
                  'https://3.bp.blogspot.com/-KaBmaSxih_8/WE8BrxmkcMI/AAAAAAAACZ4/Qvzb8m18d04K08Uxs1oBFFRKzFp5RHbmgCEw/s1600/A-faire-Islande_18.JPG'
              },
              {
                id: '3',
                title: 'Third Post',
                previewText: 'This is our third post !',
                thumbnailLink:
                  'https://vignette.wikia.nocookie.net/le-regne-de-lhiver/images/5/50/Wiki-background/revision/latest?cb=20160113171711&path-prefix=fr'
              },
              {
                id: '4',
                title: 'Fourth Post',
                previewText: 'This is our fourth post !',
                thumbnailLink:
                  'http://anglicanaorlu.org/wp-content/uploads/2018/08/fond-dcran-windows-10-paysage-winter-wonderland-desktop-backgrounds-avec-fond-dcran-windows-10-paysage-fond-ecran-nature-hd-fashion-designs-of-fond-dcran-windows-10-paysage-1-et-fond-ecran-windows-10.jpg'
              }
            ])
            resolve()
          }, 1500)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
