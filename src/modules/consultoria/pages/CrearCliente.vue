<template>
    <DashboardLayout>
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Crear Cliente</h2>
        <form @submit.prevent="crearCliente">
          <div class="mb-4">
            <label for="empresa" class="block text-gray-700 font-bold mb-2">Empresa:</label>
            <input type="text" id="empresa" v-model="cliente.ccli_empresa" class="border border-gray-400 p-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="ruc" class="block text-gray-700 font-bold mb-2">RUC:</label>
            <input type="text" id="ruc" v-model="cliente.ccli_ruc" class="border border-gray-400 p-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="contacto" class="block text-gray-700 font-bold mb-2">Contacto:</label>
            <input type="text" id="contacto" v-model="cliente.ccli_contacto_nombre" class="border border-gray-400 p-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="correo" class="block text-gray-700 font-bold mb-2">Correo:</label>
            <input type="email" id="correo" v-model="cliente.ccli_contacto_correo" class="border border-gray-400 p-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="telefono" class="block text-gray-700 font-bold mb-2">Teléfono:</label>
            <input type="tel" id="telefono" v-model="cliente.ccli_contacto_telefono" class="border border-gray-400 p-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="tipoEmpresa" class="block text-gray-700 font-bold mb-2">Tipo de Empresa:</label>
            <select id="tipoEmpresa" v-model.number="cliente.ctemp_id" class="border border-gray-400 p-2 w-full" required> 
              <option value="1">Tipo 1</option>
              <option value="2">Tipo 2</option>
              </select>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear Cliente</button>
        </form>
      </div>
    </DashboardLayout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useApi } from '@/composables/use-api';
  import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
  import Swal from 'sweetalert2'; 
  
  const cliente = ref({
    ccli_empresa: '',
    ccli_ruc: '',
    ccli_contacto_nombre: '',
    ccli_contacto_correo: '',
    ccli_contacto_telefono: '',
    ctemp_id: null, 
  });
  
  const crearCliente = async () => {
    try {
      await useApi.post('/api/v1/consultoria/consultoria-empresa', cliente.value);
  
      Swal.fire({
        icon: 'success',
        title: '¡Cliente registrado!',
        showConfirmButton: false,
        timer: 1500 
      });
  
      cliente.value = {
        ccli_empresa: '',
        ccli_ruc: '',
        ccli_contacto_nombre: '',
        ccli_contacto_correo: '',
        ccli_contacto_telefono: '',
        ctemp_id: null 
      };
  
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar el cliente',
        text: 'Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };
  </script>