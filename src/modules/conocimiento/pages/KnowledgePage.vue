<template>
  <DashboardLayout>
    <div class="relative min-h-screen p-8 bg-gray-100">
      
      <!-- Título, subtítulo y enlace de regreso -->
      <div class="mb-8">
        <div class="flex items-center text-gray-500 mt-2">
          <a 
            href="/perfil-settings" 
            class="flex items-center text-blue-500 hover:text-blue-600 underline"
          >
            <!-- Ícono de flecha usando SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Regresar a configuración del perfil
          </a>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mt-2">Conocimiento</h1>
        <p class="text-gray-500">Editor del perfil - DESARROLLADOR DE SOFTWARE</p>
      </div>

      <!-- Mensaje principal -->
      <div class="bg-white p-6 shadow-md text-center mb-8">
        <p class="text-lg font-semibold text-gray-800">No tienes cuestionarios al momento.</p>
        <p class="text-gray-500">Puedes seleccionar cuestionarios predefinidos de Allware o los que han creado otros usuarios.</p>
        <p class="text-gray-500">También puedes crear un nuevo cuestionario personalizado.</p>
      </div>

      <!-- Botones para añadir cuestionarios -->
      <div class="flex justify-center space-x-4 mb-8">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 uppercase tracking-wide font-semibold">+ Cuestionario</button>
        <button class="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 uppercase tracking-wide font-semibold">+ Cuestionario personalizado</button>
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

// import { useRouter } from 'vue-router';
// import { ref } from 'vue';

import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
</script>
