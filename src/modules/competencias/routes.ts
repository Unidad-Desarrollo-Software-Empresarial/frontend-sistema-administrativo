import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/competencia',
        name: 'competencia',
        component: () => import('./pages/CompetenciasPage.vue'),
        meta: { requiresAuth: true }, 
    },
    
];

export default routes;
