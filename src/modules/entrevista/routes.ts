import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/videoEntrevista',
        name: 'videoEntrevista',
        component: () => import('./pages/videoEntrevista.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;