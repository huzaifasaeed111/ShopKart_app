import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './routes';
import store from'./store';

createApp(App).use(router,store).mount('#app');
