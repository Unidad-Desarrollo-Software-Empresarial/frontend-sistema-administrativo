import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/conocimiento',
        name: 'conocimiento',
        component: () => import('./pages/KnowledgePage.vue'),
        meta: { requiresAuth: true }, 
    },
    
];

export default routes;
