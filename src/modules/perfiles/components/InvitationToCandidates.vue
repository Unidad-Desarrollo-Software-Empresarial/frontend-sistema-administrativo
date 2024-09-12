<template>
  <div v-if="mostrarModalCandidatos" class="fixed inset-0 bg-black bg-opacity-30 z-40 flex items-center justify-center">
    <div class="bg-white rounded-lg w-full max-w-2xl p-6 relative shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Añadir evaluados / candidato</h3>

      <!-- Tabla de candidatos -->
      <div v-if="candidatos.length > 0" class="overflow-auto mb-4">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2">Candidato</th>
              <th class="px-4 py-2">País</th>
              <th class="px-4 py-2">Documento de identificación</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(candidato, index) in candidatos" :key="index">
              <td class="border px-4 py-2">{{ candidato.nombre }} {{ candidato.apellido }}</td>
              <td class="border px-4 py-2">{{ candidato.pais }}</td>
              <td class="border px-4 py-2">{{ candidato.identificacion }}</td>
              <td class="border px-4 py-2">
                <button @click="eliminarCandidato(index)" class="text-red-600 hover:text-red-800">
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vista de candidatos vacía -->
      <div v-else class="flex justify-center items-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m0 0V9h1v3h1m-1 1v3h1m-2-3h-1v3h1v-3zM4 4v2a1 1 0 001 1h1m10-4v2a1 1 0 001 1h1m2 0a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16z" />
        </svg>
        <p class="text-gray-600 ml-3 text-sm">Parece que aún no tienes candidatos</p>
      </div>

      <!-- Opciones para agregar candidatos -->
      <div class="flex justify-between items-center mt-6">
        <span class="text-sm text-gray-500">Descarga la plantilla para cargar candidatos desde
          <a href="#" class="text-blue-600 hover:underline">aquí</a>
        </span>
        <div class="flex space-x-3">
          <!-- Abrir modal de agregar candidato -->
          <button @click="abrirModalAgregar" class="bg-green-500 text-white px-4 py-2 text-sm rounded-md">AGREGAR CANDIDATO</button>
          <button class="bg-green-500 text-white px-4 py-2 text-sm rounded-md">CARGAR ARCHIVO</button>
        </div>
      </div>

      <!-- Paginación (si hay muchos candidatos) -->
      <div v-if="candidatos.length > 5" class="flex justify-between items-center mt-4">
        <span class="text-xs text-gray-500">Candidatos por página</span>
        <select class="border-gray-300 rounded-md p-1 text-sm">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <div class="flex items-center space-x-1">
          <span class="text-xs text-gray-500">1 de {{ Math.ceil(candidatos.length / 5) }}</span>
          <button class="p-1 bg-gray-200 rounded-md">❮</button>
          <button class="p-1 bg-gray-200 rounded-md">❯</button>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="mt-6 flex justify-end space-x-3">
        <button @click="cerrarModalCandidatos" class="bg-gray-600 text-white px-4 py-2 text-sm rounded-md">
          REGRESAR
        </button>
        <button class="bg-blue-600 text-white px-4 py-2 text-sm rounded-md">
          ACEPTAR
        </button>
      </div>

      <!-- Modal de agregar candidato -->
      <AddCandidateModal :mostrarModalAgregar="mostrarModalAgregar" @close="cerrarModalAgregar" @submit="agregarCandidato" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import AddCandidateModal from '@/modules/perfiles/components/AddCandidateModal.vue';

// Props que vienen desde el componente padre
const props = defineProps({
  mostrarModalCandidatos: Boolean
});

// Emitir evento para cerrar el modal
const emit = defineEmits(['close']);

// Estado para manejar la visibilidad del modal de agregar candidato
const mostrarModalAgregar = ref(false);

// Lista de candidatos
const candidatos = ref([]);

// Función para abrir el modal de agregar candidato
const abrirModalAgregar = () => {
  mostrarModalAgregar.value = true;
};

// Función para cerrar el modal de agregar candidato
const cerrarModalAgregar = () => {
  mostrarModalAgregar.value = false;
};

// Función para agregar un candidato a la lista
const agregarCandidato = (candidato) => {
  candidatos.value.push(candidato);
};

// Función para eliminar un candidato
const eliminarCandidato = (index) => {
  candidatos.value.splice(index, 1);
};

// Función para cerrar el modal de candidatos
const cerrarModalCandidatos = () => {
  emit('close');
};
</script>

<style scoped>
/* Puedes agregar tus estilos aquí */
</style>
