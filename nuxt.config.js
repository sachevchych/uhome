export default {
  head: {
    title: 'uhome',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~theme/style.css'
  ],
  plugins: [
    '@/plugins/globals'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/vars/*.scss'
    ]
  },
  serverMiddleware: {
    '/api': '~/server/app.js'
  },
  axios: {},
  build: {
    transpile: [/^element-ui/],
  }
}
