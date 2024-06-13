import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.mount('#app');

AOS.init({
  duration: 2000, // animation duration in ms
  offset: 200, // offset (in px) from the original trigger point
  easing: 'ease-in-out', // easing function
  once: false, // whether animation should happen only once
  mirror: true,
});

