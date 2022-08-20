import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/_variables.scss';
import './assets/scss/style.scss';
import './assets/iconfont/iconfont.css';
import axios from 'axios';
import vue_axios from  'vue-axios';
import router from './router';
import SwiperClass, {  } from 'swiper';
import VueAwesomeSwiper, { useSwiper } from 'vue-awesome-swiper';
import 'swiper/css';
SwiperClass.use([useSwiper]);
import Card from "./components/Card.vue"
import ListCard from "./components/ListCard.vue"
const app = createApp(App);
app.component("m-Card",Card);
app.component("m-ListCard",ListCard);
app.use(router).use(vue_axios,axios).use(VueAwesomeSwiper).mount('#app');
