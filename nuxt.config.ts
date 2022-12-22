// nuxt.config.ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  typescript: { shim: false },
  alias: {
    pinia:
      process.env.NODE_ENV === "production"
        ? "/node_modules/pinia/dist/pinia.mjs"
        : "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
});
