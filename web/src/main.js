import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/_variables.scss';
import './assets/scss/style.scss';
import './assets/iconfont/iconfont.css';
import router from './router';
import SwiperClass, { /* swiper modules... */ } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import swiper module styles
import 'swiper/css';
// more module style...

// use swiper modules
SwiperClass.use([/* swiper modules... */]);
const app = createApp(App);
app.use(router).use(VueAwesomeSwiper).mount('#app');
