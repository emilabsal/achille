// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/global.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import "./assets/styles/modules/_variables.sass"
            @import "./assets/styles/modules/_media.sass"
            @import "./assets/styles/modules/_mixin.sass"
          `
        }
      }
    }
  },
  components: [
    '~/components',
    {
      path: '~/components/common/',
      prefix: 'the'
    }
  ],
  modules: ['nuxt-icons', '@nuxt/content']
})
