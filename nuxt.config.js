export default {
  head: {
    title: 'hotel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    { src: '~/plugins/meta.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    analyze: process.env.NODE_ENV === 'production' && process.env.ANALYZE_BUILD,
  },

  serverMiddleware: [{ path: '/api', handler: '~/backend' }],
}
