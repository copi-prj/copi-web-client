// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/css/common.css', // reset
    '@/assets/css/main.css', // 글꼴
    '@/assets/css/include.css', // header, footer
    '@/assets/css/button.css',
  ],
  typescript: {
    typeCheck: true,
  },
  modules: ['nuxt-quasar-ui'],
  imports: {
    autoImport: true,
  },
});
