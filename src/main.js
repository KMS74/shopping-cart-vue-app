import { createApp } from 'vue';
import App from './app/App.vue';
import store from './app/store';

const app = createApp(App);

app.use(store);
app.mount('#app');
