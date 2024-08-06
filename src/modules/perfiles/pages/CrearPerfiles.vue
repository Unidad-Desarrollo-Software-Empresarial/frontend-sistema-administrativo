<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div class="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
        <!-- Título -->
        <div class="bg-blue-500 text-white rounded-t-lg py-4 px-6">
          <h2 class="text-lg font-bold">Crear Perfil</h2>
        </div>
  
        <!-- Formulario -->
        <div class="p-6">
          <!-- Nombre -->
          <div class="mb-4">
            <label for="nombre" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              id="nombre"
              class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Analista de Talento Humano"
            />
            <div class="text-right text-sm text-gray-500 mt-1">26 / 150</div>
          </div>
  
          <!-- Opciones de nivel -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nivel</label>
            <div class="flex justify-around">
              <label class="inline-flex items-center">
                <input type="radio" v-model="nivel" value="alto" class="form-radio text-blue-500">
                <span class="ml-2">Alto</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" v-model="nivel" value="medio" class="form-radio text-blue-500">
                <span class="ml-2">Medio</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" v-model="nivel" value="bajo" class="form-radio text-blue-500">
                <span class="ml-2">Bajo</span>
              </label>
            </div>
          </div>
  
          <!-- Checkboxes -->
          <div class="mb-6 grid grid-cols-2 gap-4">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="opciones" value="disc" class="form-checkbox text-orange-500">
              <span class="ml-2">DISC</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="opciones" value="curriculum" class="form-checkbox text-orange-500">
              <span class="ml-2">CURRICULUM</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="opciones" value="conocimiento" class="form-checkbox text-orange-500">
              <span class="ml-2">CONOCIMIENTO</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="opciones" value="competencias" class="form-checkbox text-orange-500">
              <span class="ml-2">COMPETENCIAS</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="opciones" value="video" class="form-checkbox text-orange-500">
              <span class="ml-2">VIDEO ENTREVISTA</span>
            </label>
          </div>
  
          <!-- Botones -->
          <div class="flex justify-end space-x-4">
            <button @click="cancelar" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Cancelar
            </button>
            <button @click="guardar" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const nombre = ref('');
  const nivel = ref('');
  const opciones = ref<string[]>([]);
  
  const cancelar = () => {
    // Lógica para cancelar
    console.log('Cancelado');
  };
  
  const guardar = () => {
    // Lógica para guardar
    console.log('Guardado', { nombre: nombre.value, nivel: nivel.value, opciones: opciones.value });
  };
  </script>
  
  <style scoped>
  /* Añade estilos adicionales si es necesario */
  </style>
  