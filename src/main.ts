import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@surely-vue/table/dist/index.css';
import STable from '@surely-vue/table';
createApp(App).use(STable).mount('#app');
