import redirectSSL from 'redirect-ssl'

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
    'bootstrap/dist/css/bootstrap-grid.min.css',
    'bootstrap/dist/css/bootstrap-utilities.min.css'
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
      '~/assets/vars/_colors.scss',
      '~/assets/vars/_sizes.scss'
    ]
  },
  fontawesome: {
    icons: {
      solid: ['faBars', 'faEllipsisV', 'faAngleRight', 'faStar', 'faStarHalfAlt', 'faCheck', 'faShoppingCart', 'faTimes'],
      regular: ['faStar'],
      brands: ['faInstagram', 'faFacebookSquare']
    }
  },
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    }),
    {path: '/api', handler: '~/server/app.js'}
  ],
  axios: {
    baseURL: process.env.APP_API || 'http://localhost:3000'
  },
  build: {
    transpile: [/^element-ui/],
  },
  loading: {
    color: '#fe696a',
    height: '2px'
  }
}
