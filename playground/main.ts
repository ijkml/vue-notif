import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import { VueNotif } from '@/index';

const playgroundApp = createApp(App);

playgroundApp.mount('#app');
playgroundApp.use(VueNotif);
