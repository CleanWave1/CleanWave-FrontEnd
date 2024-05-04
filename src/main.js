import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
/*import router from './router'*/
import PrimeVue from "primevue/config";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

import 'primeflex/primeflex.css'

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.css';
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Textarea from "primevue/textarea";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

createApp(App)
    /*.use(router)*/
    .use(PrimeVue, { ripple: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-inputtext', InputText)
    .component('pv-text-area',Textarea)
    .component('pv-icon-field', IconField)
    .component('pv-card', Card)
    .component('pv-input-icon', InputIcon)

    .mount('#app')