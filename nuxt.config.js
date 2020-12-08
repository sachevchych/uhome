export default {
  head: {
    title: 'uhome',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap'}
    ]
  },
  css: [
    '~/assets/global.css',
    'element-ui/lib/theme-chalk/index.css',
    'bootstrap/dist/css/bootstrap-grid.min.css'
  ],
  plugins: [
    '@/plugins/globals'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/vars/*.scss'
    ]
  },
  fontawesome: {
    icons: {
      solid: ['faBars', 'faEllipsisV', 'faAngleRight', 'faStar', 'faStarHalfAlt', 'faCheck'],
      regular: ['faStar'],
      brands: ['faInstagram', 'faFacebookSquare']
    }
  },
  serverMiddleware: {
    '/api': '~/server/app.js'
  },
  axios: {
    baseURL: process.env.APP_API || 'http://localhost:3000'
  },
  build: {
    transpile: [/^element-ui/],
  },
  loading: {
    color: '$main-color',
    height: '4px'
  }
}
