import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vue_axios from 'vue-axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(vue_axios,axios).mount('#app')
