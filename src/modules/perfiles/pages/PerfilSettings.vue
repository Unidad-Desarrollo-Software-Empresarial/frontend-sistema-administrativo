<template>
  <DashboardLayout>
    <!-- Contenido principal -->
    <div class="flex-1 flex flex-col">
      <!-- Encabezado -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">Edición del perfil - Desarrollador de software</h1>
        <button class="text-blue-600 hover:text-blue-800 hidden">
          Configuración avanzada
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </header>

      <!-- Contenido del cuerpo -->
      <div class="p-6 space-y-6">
        <!-- Sección de Configuración -->
        <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h2 class="text-lg font-semibold text-blue-600">Proceso E-Talent</h2>
          <p class="text-gray-600 mt-2">
            Para lanzar procesos E-Talent debes cumplir con los siguientes requisitos: ...
          </p>
        </div>

        <!-- Formulario y Paneles de Configuración -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Formulario de edición -->
          <div class="bg-white shadow p-4 rounded-lg md:col-span-2">
            <div class="mb-4">
              <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="nombre" class="mt-1 block w-full border-gray-300 rounded-md" value="DESARROLLADOR DE SOFTWARE">
            </div>

            <div class="mb-4">
              <label for="nivel" class="block text-sm font-medium text-gray-700">Nivel del perfil</label>
              <select id="nivel" class="mt-1 block w-full border-gray-300 rounded-md">
                <option>MEDIO</option>
                <!-- Otras opciones -->
              </select>
            </div>

            <div class="mb-4">
              <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea id="descripcion" class="mt-1 block w-full border-gray-300 rounded-md" rows="5"></textarea>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Responsabilidades</label>
              <textarea class="mt-1 block w-full border-gray-300 rounded-md" rows="5"></textarea>
            </div>

            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700">Requisitos</label>
              <textarea class="mt-1 block w-full border-gray-300 rounded-md" rows="5"></textarea>
            </div>
          </div>

          <!-- Paneles de Configuración y Sumatoria de pesos -->
          <div class="space-y-4 flex flex-col">
            <div class="bg-white shadow p-4 rounded-lg flex-1">
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-sm font-semibold text-gray-700">DISC</h3>
                <span class="text-green-500">Completo</span>
              </div>
            </div>

            <div class="bg-white shadow p-4 rounded-lg flex-1 cursor-pointer">
              <div @click="irACurriculum" class="flex justify-between items-center mb-2 hover:bg-gray-200 transition-colors duration-200 p-2 rounded">
                <h3 class="text-sm font-semibold text-gray-700" >CURRICULUM</h3>
                <span class="text-red-500">Pendiente</span>
              </div>
              <!-- Slider para el peso -->
              <div class="relative">
                <input type="range" min="0" max="100" v-model="pesoCurriculum" class="w-full h-2 bg-gray-200 rounded-lg overflow-hidden appearance-none cursor-pointer accent-red-500">
                <span class="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">{{ pesoCurriculum }}%</span>
              </div>
            </div>

            <div class="bg-white shadow p-4 rounded-lg flex-1">
              <div @click="irAKnowledge" class="flex justify-between items-center mb-2 hover:bg-gray-200 transition-colors duration-200 p-2 rounded">
                <h3 class="text-sm font-semibold text-gray-700">CONOCIMIENTO</h3>
                <span class="text-blue-500">Pendiente</span>
              </div>
              <!-- Slider para el peso -->
              <div class="relative">
                <input type="range" min="0" max="100" v-model="pesoConocimiento" class="w-full h-2 bg-gray-200 rounded-lg overflow-hidden appearance-none cursor-pointer accent-blue-500">
                <span class="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-md">{{ pesoConocimiento }}%</span>
              </div>
            </div>

            <div class="bg-white shadow p-4 rounded-lg flex-1">
              <div @click="irACompetencia" class="flex justify-between items-center mb-2 hover:bg-gray-200 transition-colors duration-200 p-2 rounded">
                <h3 class="text-sm font-semibold text-gray-700">COMPETENCIAS</h3>
                <span class="text-purple-500">Pendiente</span>
              </div>
              <!-- Slider para el peso -->
              <div class="relative">
                <input type="range" min="0" max="100" v-model="pesoCompetencias" class="w-full h-2 bg-gray-200 rounded-lg overflow-hidden appearance-none cursor-pointer accent-purple-500">
                <span class="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-md">{{ pesoCompetencias }}%</span>
              </div>
            </div>

            <div class="bg-white shadow p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-yellow-500">Sumatoria de pesos</h3>
              <div class="flex items-center mt-2">
                <div class="h-24 w-24 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                  <span class="text-2xl font-bold">100%</span>
                </div>
                <p class="text-gray-600 ml-4">Importante: los pesos configurados deben sumar 100%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón de acción flotante -->
      <button class="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H5a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';

const router = useRouter();

const irACurriculum = () => {
  router.replace('/curriculum');
};

const irAKnowledge = () => {
  router.replace('/conocimiento');
};

const irACompetencia = () => {
  router.replace('/competencia');
};

const pesoCurriculum = ref(25);
const pesoConocimiento = ref(10);
const pesoCompetencias = ref(42);
</script>
