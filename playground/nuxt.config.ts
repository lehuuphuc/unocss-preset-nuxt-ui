// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@unocss/nuxt',
  ],
  css: ['~/assets/styles/main.scss'],
  icon: {
    clientBundle: {
      icons: [
        'lucide:sun',
        'lucide:moon',
      ],
    },
  },
});
