import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@surely-vue/table/dist/index.css';
import 'ant-design-vue/dist/antd.css';
import STable from '@surely-vue/table';
import antV from 'ant-design-vue';
createApp(App).use(STable).use(antV).mount('#app');
