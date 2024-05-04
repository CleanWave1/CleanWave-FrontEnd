import {createRouter, createWebHistory} from "vue-router";
import solicitudesServicio from "@/components/solicitudes-Servicio.vue";
import settings from "@/components/settings.vue"
import payService from "@/components/payService.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/home', component: solicitudesServicio, meta: {title: 'Home'}},
        {path: '/settings', component: settings, meta: {title: 'Config'}},
        {path: '/payService', component: payService, meta: {title: 'Config'}},
        {path: '/', redirect: '/home'},
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
