import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";

import 'primeflex/primeflex.css'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.css';

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .mount('#app')