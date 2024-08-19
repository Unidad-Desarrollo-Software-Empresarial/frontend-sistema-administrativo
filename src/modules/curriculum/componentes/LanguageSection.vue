<template>
    <div class="mb-4">
            <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
              <h2 class="text-lg font-bold text-gray-800"><i class="fas fa-globe"></i> Idiomas</h2>
              <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="idiomasActive" class="sr-only" />
                  <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                    :class="{ 'bg-blue-500': idiomasActive, 'bg-gray-300': !idiomasActive }">
                    <span
                      class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                      :class="{
                        'translate-x-6 bg-white': idiomasActive,
                        'bg-neutral-400': !idiomasActive
                      }"></span>
                  </div>
                </label>
              </span>
            </div>

            <div v-if="idiomasActive" class="p-4 border border-t-0 rounded-b-lg bg-gray-50">
              <p class="text-sm text-gray-600 mb-4">Agrega los idiomas requeridos por el cargo.</p>

              <!-- Lista de idiomas seleccionados -->
              <div v-if="idiomas.length > 0" class="mb-4">
                <div v-for="(idioma, index) in idiomas" :key="index" class="flex items-center mb-2">
                  <span class="w-1/3 text-gray-700">{{ idioma.idioma }}</span>
                  <span class="w-1/3 text-gray-700">{{ idioma.nivel }}</span>
                  <button @click="eliminarIdioma(index)" class="text-gray-500 hover:text-red-600" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Botón para agregar nuevo idioma -->
              <div v-if="!mostrarCampos" class="text-center">
                <button @click="mostrarCampos = true" type="button"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                  + Agregar Idioma
                </button>
              </div>

              <!-- Campos de selección de idioma y nivel -->
              <div v-if="mostrarCampos" class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="idioma" class="block text-gray-700 text-sm font-bold mb-2">Idioma</label>
                  <select v-model="nuevoIdioma.idioma" class="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="" disabled>Seleccione un idioma</option>
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Francés">Francés</option>
                    <option value="Italiano">Italiano</option>
                    <option value="Portugués">Portugués</option>
                    <!-- Agrega más opciones según sea necesario -->
                  </select>
                </div>
                <div>
                  <label for="nivel" class="block text-gray-700 text-sm font-bold mb-2">Nivel</label>
                  <select v-model="nuevoIdioma.nivel" class="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="" disabled>Seleccione un nivel</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <!-- Agrega más opciones según sea necesario -->
                  </select>
                </div>
              </div>

              <!-- Botón para guardar el idioma seleccionado -->
              <div v-if="mostrarCampos" class="text-center">
                <button @click="agregarIdioma" type="button"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                  Guardar Idioma
                </button>
              </div>
            </div>
          </div>
</template>
<script setup>
import { ref } from 'vue';

const idiomasActive = ref(false);
const idiomas = ref([]); // Array para almacenar los idiomas seleccionados
const mostrarCampos = ref(false); // Estado para mostrar u ocultar los campos de selección
const nuevoIdioma = ref({ idioma: '', nivel: '' }); // Modelo para un nuevo idioma

const agregarIdioma = () => {
  if (nuevoIdioma.value.idioma && nuevoIdioma.value.nivel) {
    idiomas.value.push({ ...nuevoIdioma.value });
    nuevoIdioma.value = { idioma: '', nivel: '' }; // Resetea el formulario
    mostrarCampos.value = false; // Oculta los campos después de agregar el idioma
  }
};

const eliminarIdioma = (index) => {
  idiomas.value.splice(index, 1);
};

</script>