// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, 
  nitro : {
    preset : 'github-pages'
  },
  app: {
    baseURL: '/portfolio/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
      }
    }
  },

  css: [
    'assets/css/common.scss'
  ],
  modules: [
    '@vesp/nuxt-fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['pen', 'user', 'envelope', 'paper-plane', 'cake-candles', 'mobile-screen-button', 'xmark']
    }
  },
  target: 'static', // 정적 웹사이트임을 명시
  router: {
    base: '/portfolio/' // github repository 이름 넣기
  }
})