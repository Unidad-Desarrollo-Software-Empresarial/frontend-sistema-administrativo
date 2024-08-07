import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/perfiles',
        name: 'perfiles',
        component: () => import('./pages/PerfilesPage.vue'),
    },
    
    
];

export default routes;