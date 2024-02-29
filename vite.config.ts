import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import postcssPxToRem from 'postcss-pxtorem';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
 
  server:{
    port:80,
   
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:`
        @import "@/assets/styles/global-var.scss";
        @import "@/assets/styles/global-mixin.scss";
      `
      }
    },
    postcss: {
      plugins: [
        postcssPxToRem({
          rootValue: 100,
          unitPrecision: 2,
          propList: ['*'],
          selectorBlackList: [/^html$/, /^body$/, 'ignore']
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
