require('dotenv').config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Portfolio",
    title: "Alison Vandromme",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msapplication-TileColor", content: "#2b5797" },
      {
        hid: "description",
        name: "description",
        content: "Alison Vandromme : Full stack web developper and freelancer"
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#1d1d1d"},
      {
        hid: "og:title",
        property: "og:title",
        content: "Alison Vandromme's Portfolio"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.alisonvandromme.com"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/brand-logo.svg"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "en_US"
      },
      {
        hid: "og:locale:alternate",
        property: "og:locale:alternate",
        content: "fr_FR"
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/app.scss"

  ],

  styleResources: {
    scss: [
      "@/assets/styles/global/global.scss"
    ]
  },

  loading: {color: "#49BFC7"},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client"
    },
    "~/plugins/core-components.js",
    '~plugins/fontawesome.js',
    '~plugins/tooltips.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/components",
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
    'nuxt-purgecss',
    "@nuxtjs/dotenv",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-UK",
        name: "English"
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français"
      }
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./locales/en.json"),
        fr: require("./locales/fr.json")
      }
    }
  },

  sitemap: {
    trailingSlash: true,
    i18n: true
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  router: {
    // easily spot nuxt-link without a trailing slash, because they will return a 404
    trailingSlash: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL : process.env.BASE_URL ||process.env.API_URL,
    credentials: false
  },

  env: {
    baseUrl: process.env.BASE_URL || process.env.API_URL,
    firebaseApiKey: process.env.API_KEY,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
