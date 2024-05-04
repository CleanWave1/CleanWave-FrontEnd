import {createRouter, createWebHistory} from "vue-router";
import solicitudesServicio from "@/components/solicitudes-Servicio.vue";
import settings from "@/components/settings.vue"
import payService from "@/components/payService.vue";
import homeContentClientComponent from "@/components/home-content-client.component.vue";
import servicesComponent from "@/components/services-component.vue";
import loginComponent from "@/components/login-component.vue";
import registerComponent from "@/components/register-component.vue";
import passwordRecoveryComponent from "@/components/password-recovery-component.vue";
import registerCleanerComponent from "@/components/register-cleaner-component.vue";
import passwordRecoveryEmailComponent from "@/components/password-recovery-email-component.vue";
import FormsComponent from "@/components/forms-component.vue";
import CleaningprofessionalSoprComponent from "@/components/cleaningprofessionalSopr-component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/iniciar-sesion', component: loginComponent, meta: {title: 'Login'}},
        {path: '/home', component: solicitudesServicio, meta: {title: 'Home'}},
        {path: '/settings', component: settings, meta: {title: 'Config'}},
        {path: '/payService', component: payService, meta: {title: 'Config'}},
        {path: '/registrarse', component: registerComponent, meta: {title: 'Sign Up'}},
        {path: '/forgot-password', component: passwordRecoveryComponent, meta: {title: 'Recovery'}},
        {path: '/recovery-email', component: passwordRecoveryEmailComponent, meta: {title: 'Servicios'}},
        {path: '/registrarse-personal-limpieza', component: registerCleanerComponent, meta: {title: 'Sign Up'}},
        {path: '/inicio', component: homeContentClientComponent, meta: {title: 'Inicio'}},
        {path: '/servicios', component: servicesComponent, meta: {title: 'Servicios'}},
        {path: '/programar-limpieza', component: FormsComponent, meta: {title: 'Programar Limpieza'}},
        {path: '/ayuda', component: CleaningprofessionalSoprComponent, meta: {title: 'Soporte'}},
        {path: '/', redirect: '/iniciar-sesion'},
    ],
});

/**
 * Set business name as prefix for each page title
 */
router.beforeEach((to,
                   from,
                   next) => {
    let baseTitle = 'Clean Wave';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});


export default router;
