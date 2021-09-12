require("dotenv").config();

export default {
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
        content:
          "Alison Vandromme : Full stack web developper based in Bordeaux"
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#1d1d1d" },
      {
        hid: "og:title",
        property: "og:title",
        content: "Alison Vandromme's Portfolio"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Alison Vandromme - Fullstack web developer based in Bordeaux"
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
        content:
          "https://res.cloudinary.com/dhlpkwga4/image/upload/v1629116246/M2_vvtvxa.jpg"
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
      }
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

  css: ["~/assets/styles/app/app.scss"],

  styleResources: {
    scss: ["@/assets/styles/global/global.scss"]
  },

  loading: { color: "#49BFC7" },

  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client"
    },
    "~/plugins/core-components.js",
    "~/plugins/fontawesome.js",
    ],

  components: true,

  buildModules: [
    "@nuxt/components",
    "@nuxtjs/style-resources",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv"
  ],

  modules: [
    "@nuxtjs/firebase",
    "nuxt-i18n",
    "nuxt-purgecss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_KEY,
      authDomain: process.env.FIREBASE_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE,
      messagingSenderId: process.env.FIREBASE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    services: {
      firestore: true,
    }
  },

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
    UserAgent: "*",
    Disallow: ""
  },

  router: {
    // easily spot nuxt-link without a trailing slash, because they will return a 404
    trailingSlash: true
  },

  env: {
    baseUrl: process.env.BASE_URL
  },

  build: {}
};
