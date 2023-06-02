import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import viewPlus from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(viewPlus)
  return {
    app
  }
}
