import { type Router } from 'vue-router';
import type { RutaInterface } from '../dto/menu-rutas-response.dto';

// Definir rutas codificadas para pruebas
const rutasCodificadas: RutaInterface[] = [
  {
    id: 1,
    nombre: 'Home',
    path: '/home',
    ruta: 'home',
    component: 'pages/HomePage.vue',
    padre: 0,
    indexeddb: 0,
    privilegio: 0,
  },
  {
    id: 2,
    nombre: 'Profile',
    path: '/profile',
    ruta: 'profile',
    component: 'pages/ProfilePage.vue',
    padre: 0,
    indexeddb: 0,
    privilegio: 0,
  },
  {
    id: 3,
    nombre: 'Settings',
    path: '/settings',
    ruta: 'settings',
    component: 'pages/SettingsPage.vue',
    padre: 0,
    indexeddb: 0,
    privilegio: 0,
  },
  {
    id: 4,
    nombre: 'Account',
    path: '/settings/account',
    ruta: 'account',
    component: 'pages/AccountPage.vue',
    padre: 3,
    indexeddb: 0,
    privilegio: 0,
  },
  {
    id: 5,
    nombre: 'Privacy',
    path: '/settings/privacy',
    ruta: 'privacy',
    component: 'pages/PrivacyPage.vue',
    padre: 3,
    indexeddb: 0,
    privilegio: 0,
  }
];

export const parseObjectRutas = async (router: Router) => {
  // Utilizar rutas codificadas en lugar de recuperar desde localStorage
  const rutas: RutaInterface[] = rutasCodificadas;

  // Obtener las rutas existentes en el enrutador
  const existingRoutes = router.getRoutes().map((route) => route.name);

  // Añadir rutas nuevas al enrutador
  rutas.forEach((ruta) => {
    if (!existingRoutes.includes(ruta.ruta)) {
      router.addRoute({
        path: ruta.path,
        name: ruta.ruta,
        component: () => import(/* @vite-ignore */ `../../../${ruta.component}`),
        meta: {
          requiresAuth: true,
          transition: 'fade',
        },
      });
    }
  });

  // Procesar rutas padre e hija
  const rutasPadre = rutas.filter((ruta) => ruta.padre === 0);
  const rutasHijas = rutas.filter((ruta) => ruta.padre !== 0);
  const rutasParseadas = rutasPadre.map((rutaPadre) => {
    const rutasHijasParseadas = rutasHijas.filter((rutaHija) => rutaHija.padre === rutaPadre.id);
    return {
      ...rutaPadre,
      rutasHijas: rutasHijasParseadas,
    };
  });

  return rutasParseadas;
};

// Función para eliminar rutas al cerrar sesión
export const removeRoutesOnLogout = (router: Router) => {
  router.getRoutes().forEach((route) => {
    const arr = ['dashboard', 'login', 'not-found'];
    const isDeletable = arr.includes(route.name as string);

    if (!isDeletable) {
      router.removeRoute(route.name as string);
    }
  });
};
