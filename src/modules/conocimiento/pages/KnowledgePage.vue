<template>
  <DashboardLayout>
    <div class="flex-1 flex flex-col">

      <div class="flex items-center justify-between p-4 border-b bg-gray-50">
        <div class="flex items-center">
          <!-- Flecha para regresar -->
          <button @click="goBack" class="mr-2 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 class="text-xl font-semibold">Regresar a configuración del perfil</h1>
            
          </div>
        </div>

      </div>
      <!-- Título, subtítulo y enlace de regreso -->

      <!-- Mensaje principal -->
      <div class="bg-white p-6 shadow-md text-center mb-8">
        <p class="text-lg font-semibold text-gray-800">No tienes cuestionarios al momento.</p>
        <p class="text-gray-500">Puedes seleccionar cuestionarios predefinidos de Allware o los que han creado otros
          usuarios.</p>
        <p class="text-gray-500">También puedes crear un nuevo cuestionario personalizado.</p>
      </div>

      <!-- Botones para añadir cuestionarios -->
      <div class="flex justify-center space-x-4 mb-8">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 uppercase tracking-wide font-semibold">+
          Cuestionario</button>
        <button class="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 uppercase tracking-wide font-semibold">+
          Cuestionario personalizado</button>
      </div>

      <!-- Tarjetas de cuestionarios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-purple-500 text-white p-4 shadow-md">
          <h3 class="font-semibold text-lg">Alemán</h3>
          <p class="text-sm">Conocimientos del idioma alemán.</p>
        </div>
        <div class="bg-red-500 text-white p-4 shadow-md">
          <h3 class="font-semibold text-lg">Asas</h3>
          <p class="text-sm">Descripción breve de Asas.</p>
        </div>
        <div class="bg-pink-500 text-white p-4 shadow-md">
          <h3 class="font-semibold text-lg">Atención al cliente</h3>
          <p class="text-sm">Evalúa conocimientos sobre el trato con clientes.</p>
        </div>
        <!-- Añadir más tarjetas según sea necesario -->
      </div>

    </div>
  </DashboardLayout>
</template>

<script setup>

import { useRouter } from 'vue-router';
// import { ref } from 'vue';

import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';

import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

const router = useRouter();
const goBack = () => {
    router.push({ name: 'perfil-settings' });
};

</script>
