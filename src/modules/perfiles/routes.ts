import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/perfiles',
        name: 'perfiles',
        component: () => import('./pages/PerfilesPage.vue'),
    },
    {
        path: '/crear-perfil',
        name: 'CrearPerfil',
        component: () => import('./pages/CrearPerfiles.vue'),
      }
];

export default routes;