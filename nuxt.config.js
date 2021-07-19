export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "av2-portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client"
    },
    "~/plugins/core-components.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/components"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
    "@nuxtjs/sitemap"
  ],

  /*
   ** i18n config
   */
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-AU",
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

  /*
   ** Sitemap config
   */
  sitemap: {
    trailingSlash: true,
    i18n: true
  },

  /*
   ** Router config
   */
  router: {
    // easily spot nuxt-link without a trailing slash, because they will return a 404
    trailingSlash: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
