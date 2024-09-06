import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/perfiles',
    name: 'perfiles',
    component: () => import('./pages/PerfilesPage.vue'),
  },
  {
    path: '/perfil-settings',
    name: 'perfil-settings',
    component: () => import('./pages/PerfilSettings.vue'),
  },
  {
    path: '/perfil-launch',
    name: 'perfil-launch',
    component: () => import('./pages/LaunchPage.vue'),
  },
];

export default routes;
