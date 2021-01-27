import redirectSSL from 'redirect-ssl'

export default {
  head: {
    title: 'uHome',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: "apple-mobile-web-app-title", content: 'uHome'},
      {name: 'application-name', content: 'uHome'},
      {name: 'msapplication-TileColor', content: '#da532c'},
      {name: 'msapplication-config', content: '/favicons/browserconfig.xml'},
      {name: 'theme-color', content: '#f6f9fc'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicons/apple-touch-icon.png'},
      {rel: 'apple-touch-icon', sizes: "180x180", type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicons/favicon-32x32.png'},
      {rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicons/favicon-16x16.png'},
      {rel: 'manifest', href: '/favicons/site.webmanifest'},
      {rel: 'mask-icon', href: "/favicons/safari-pinned-tab.svg", color: "#434343"},
      {rel: 'shortcut icon', href: '/favicon.ico'},
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
    '@nuxtjs/fontawesome',
    '@nuxt/image'
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
      solid: [
        'faBars', 'faEllipsisV', 'faAngleRight', 'faStar', 'faStarHalfAlt', 'faCheck', 'faShoppingCart', 'faTimes',
        'faSpinner'
      ],
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
    color: '#FEC940',
    height: '2px'
  }
}
