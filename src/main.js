import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
//PrimeVue
import PrimeVue from "primevue/config";
//PrimeVue Material Design Theme
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
//Import router
import router from "@/router/index.js";
//Import Components
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Avatar from "primevue/avatar";
import Dropdown from "primevue/dropdown";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import FloatLabel from "primevue/floatlabel";
import InputSwitch from "primevue/inputswitch";
import Card from "primevue/card";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .component('pv-card', Card)
    .component('pv-input-switch', InputSwitch)
    .component('pv-float-label', FloatLabel)
    .component('pv-button', Button)
    .component('pv-calendar', Calendar)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-input-text', InputText)
    .component('pv-input-icon', InputIcon)
    .component('pv-avatar', Avatar)
    .component('pv-dropdown', Dropdown)
    .component('pv-icon-field', IconField)
    .mount('#app')
