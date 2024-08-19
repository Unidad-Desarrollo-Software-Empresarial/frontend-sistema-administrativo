<template>
  <div>
    <div class="mb-4">
      <label for="areas-laboral" class="block text-gray-700 text-sm font-bold mb-2">Áreas Laborales</label>
      <div class="relative">
        <input v-model="areasLaborales" type="text" id="areas-laboral"
               class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Selecciona o inserta la(s) área(s) laborales requeridas" readonly />
        <button @click="abrirModal" class="absolute right-0 top-0 mt-2 mr-2" type="button" >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-700" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4v16m8-8H4"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal de selección de áreas laborales -->
    <div v-if="mostrarModal" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 text-center">
        <!-- Fondo gris con evento @click para cerrar el modal -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="cerrarModal">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!-- Contenido del modal que detiene la propagación del evento click -->
        <div @click.stop class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full md:max-w-2xl lg:max-w-3xl">
          <div class="bg-blue-500 text-white p-4">
            <h3 class="text-lg font-semibold">Áreas Laborales</h3>
          </div>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="mb-4">
              <input v-model="buscarArea" type="text" placeholder="Buscar..." class="w-full p-2 border rounded-lg">
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-60 overflow-y-auto">
              <label v-for="area in areasFiltradas" :key="area" class="inline-flex items-center">
                <input type="checkbox" v-model="areasSeleccionadas" :value="area" class="form-checkbox">
                <span class="ml-2">{{ area }}</span>
              </label>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="guardarAreas" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
              Guardar
            </button>
            <button @click="cerrarModal"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const mostrarModal = ref(false);
const buscarArea = ref('');
const areasSeleccionadas = ref([]);
const areasLaborales = ref('');

const abrirModal = () => {
  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

// Lista de áreas laborales disponibles
const areasDisponibles = ref([
  'Abastecimiento y Logística',
  'Aduana y Comercio Exterior',
  'Biotecnología',
  'Comercial, Ventas y Negocios',
  'Diseño',
  'Educación, Docencia e Investigación',
  'Farmacia Clínica',
  'Finanzas',
  'Gerencia y Dirección General',
  'Housekeeping y Mantenimiento',
  'Ingeniería Civil y Construcción',
  'Administración, Contabilidad y Finanzas',
  'Atención al Cliente, Call Center y Telemarketing',
  'Cargos Directivos y Administrativos',
  'Comunicación',
  'Economía de la Salud y Acceso al Mercado',
  'Eventos y Convenciones',
  'Farmacovigilancia',
  'Gastronomía y Turismo',
  'Gimnasio / Deporte',
  'Industria Extractiva y Procesos Asociados',
  'Ingenierías'
]);

const areasFiltradas = computed(() => {
  if (!buscarArea.value) return areasDisponibles.value;
  return areasDisponibles.value.filter(area =>
    area.toLowerCase().includes(buscarArea.value.toLowerCase())
  );
});

const guardarAreas = () => {
  areasLaborales.value = areasSeleccionadas.value.join(', ');
  cerrarModal();
};
</script>

<style scoped>
/* Estilos adicionales */
</style>
