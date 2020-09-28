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
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  serverMiddleware: {
    '/api': '~/server/app.js'
  },
  axios: {},
  build: {
    transpile: [/^element-ui/],
  }
}
