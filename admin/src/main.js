import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vue_axios from 'vue-axios'
createApp(App).use(router).use(vue_axios,axios).use(ElementPlus).mount('#app')
