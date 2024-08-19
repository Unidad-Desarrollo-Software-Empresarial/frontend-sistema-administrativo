<template>
    <div class="mb-4">
            <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
              <h2 class="text-lg font-bold text-gray-800"><i class="fas fa-tools"></i> Habilidades / Conocimientos
              </h2>
              <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="habilidadesActive" class="sr-only" />
                  <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                    :class="{ 'bg-blue-500': habilidadesActive, 'bg-gray-300': !habilidadesActive }">
                    <span
                      class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                      :class="{
                        'translate-x-6 bg-white': habilidadesActive,
                        'bg-neutral-400': !habilidadesActive
                      }"></span>
                  </div>
                </label>
              </span>
            </div>

            <div v-if="habilidadesActive" class="p-4 border border-t-0 rounded-b-lg bg-gray-50">
              <p class="text-sm text-gray-600 mb-4">Inserta las habilidades mínimas requeridas por el cargo con sus
                respectivos niveles.</p>

              <!-- Campo para añadir habilidades -->
              <div class="mb-4">
                <input v-model="nuevaHabilidad" @keydown.enter.prevent="agregarHabilidad" type="text"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe aquí la habilidad y presiona Enter" />
              </div>

              <!-- Lista de habilidades añadidas -->
              <div v-for="(habilidad, index) in habilidades" :key="index"
                class="flex items-center justify-between mb-2">
                <span class="w-1/3 text-gray-700">{{ habilidad.nombre }}</span>
                <div class="flex items-center w-2/3 justify-end">
                  <!-- Niveles de habilidad -->
                  <div class="flex items-center space-x-1">
                    <div v-for="nivel in 5" :key="nivel" class="w-6 h-6 cursor-pointer border border-gray-300" :class="{
                      'bg-gray-200': nivel > habilidad.nivel,
                      'bg-blue-200': nivel <= habilidad.nivel,
                      'bg-blue-400': nivel <= habilidad.nivel && nivel === 3,
                      'bg-blue-600': nivel <= habilidad.nivel && nivel > 3
                    }" @click="establecerNivel(index, nivel)"></div>
                  </div>
                  <!-- Botón para eliminar la habilidad -->
                  <button @click="eliminarHabilidad(index)" class="text-gray-500 hover:text-red-600 ml-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>
<script setup>
import { ref } from 'vue';

const habilidadesActive = ref(false);
const nuevaHabilidad = ref('');
const habilidades = ref([]);

const agregarHabilidad = () => {
  if (nuevaHabilidad.value.trim() !== '') {
    habilidades.value.push({ nombre: nuevaHabilidad.value, nivel: 0 });
    nuevaHabilidad.value = '';
  }
};

const establecerNivel = (index, nivel) => {
  habilidades.value[index].nivel = nivel;
};

const eliminarHabilidad = (index) => {
  habilidades.value.splice(index, 1);
};


</script>