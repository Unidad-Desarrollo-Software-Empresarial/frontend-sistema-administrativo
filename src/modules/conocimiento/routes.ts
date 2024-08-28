import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/conocimiento',
        name: 'conocimiento',
        component: () => import('./pages/KnowledgePage.vue'),
    },
    
];

export default routes;
