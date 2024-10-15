<template>
  <DashboardLayout>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Clientes</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Empresa
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                RUC
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contacto
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Correo
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Teléfono
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tipo de empresa
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acción
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="cliente in clientes" :key="cliente.Ruc">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ cliente.Empresa }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ cliente.Ruc }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ cliente.Contacto }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ cliente.Correo }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">{{ cliente.Teléfono }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ obtenerNombreTipoEmpresa(cliente["Tipo de empresa"]) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ obtenerNombreAccion(cliente.Acción) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  @click="editarCliente(cliente.Ruc)"
                >
                  Editar
                </button>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  @click="eliminarCliente(cliente.Ruc)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useApi } from "@/composables/use-api";
import DashboardLayout from "@/modules/dashboard/layouts/DashboardLayout.vue";

const clientes = ref([]);

// Ejemplo de funciones para obtener los nombres de tipo de empresa y acción
const obtenerNombreTipoEmpresa = (tipoId) => {
  // Aquí deberías obtener el nombre del tipo de empresa a partir del ID
  // Puedes usar un objeto, un array o una función que consulte una API
  const tiposEmpresa = {
    1: "Tipo 1",
    2: "Tipo 2",
    // ...
  };
  return tiposEmpresa[tipoId] || "Desconocido";
};

const obtenerNombreAccion = (accionId) => {
  // Aquí deberías obtener el nombre de la acción a partir del ID
  const acciones = {
    1: "Acción 1",
    2: "Acción 2",
    // ...
  };
  return acciones[accionId] || "Desconocida";
};

const editarCliente = (id) => {
  // Redirigir a la página de edición con el ID del cliente
  // Por ejemplo: this.$router.push(`/clientes/${id}/editar`);
  console.log("Editar cliente con ID:", id);
};

const eliminarCliente = (id) => {
  // Mostrar una confirmación y eliminar el cliente con el ID
  if (confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
    // Llamar a la API para eliminar el cliente
    // Por ejemplo: useApi.delete(`/clientes/${id}`)
    console.log("Eliminar cliente con ID:", id);
  }
};

onMounted(async () => {
  try {
    const response = await useApi.get(
      "/api/v1/consultoria/consultoria-empresa"
    );
    clientes.value = response.data;
  } catch (error) {
    console.error(error);
    // Manejar el error, mostrar un mensaje al usuario, etc.
  }
});
</script>