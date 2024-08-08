import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/curriculum',
        name: 'curriculum',
        component: () => import('./pages/CurriculumPage.vue'),
    },
    
];

export default routes;
