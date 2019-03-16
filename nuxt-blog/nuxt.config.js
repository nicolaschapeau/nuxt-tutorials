const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },

  /*
  ** Global CSS
  */
  css: ['~assets/styles/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseUrl: 'https://nuxt-blog-a2a3b.firebaseio.com/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {}
    }
  },
  env: {
    baseUrl: 'https://nuxt-blog-a2a3b.firebaseio.com/',
    fbAPIkey: 'AIzaSyAbSRKvW36mYbPRuKkgAYvrsDm7QjAQt7g'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
