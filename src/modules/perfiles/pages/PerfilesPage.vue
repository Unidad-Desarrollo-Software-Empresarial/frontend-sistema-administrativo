<template>

    <DashboardLayout>

        <!-- Botón para abrir el modal -->
        <button @click="abrirModal"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Crear Nuevo Perfil
        </button>

        <!-- Modal -->
        <div v-if="mostrarModal" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4 text-center">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Crear Perfil
                                </h3>
                                <div class="mt-2">
                                    <!-- Formulario dentro del modal -->
                                    <div class="mb-4">
                                        <label for="nombre"
                                            class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                        <input v-model="nombre" type="text" id="nombre"
                                            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Analista de Talento Humano" />
                                        <div class="text-right text-sm text-gray-500 mt-1">26 / 150</div>
                                    </div>

                                    <!-- Opciones de nivel -->
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2">Nivel</label>
                                        <div class="flex justify-around">
                                            <label class="inline-flex items-center">
                                                <input type="radio" v-model="nivel" value="alto"
                                                    class="form-radio text-blue-500">
                                                <span class="ml-2">Alto</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input type="radio" v-model="nivel" value="medio"
                                                    class="form-radio text-blue-500">
                                                <span class="ml-2">Medio</span>
                                            </label>
                                            <label class="inline-flex items-center">
                                                <input type="radio" v-model="nivel" value="bajo"
                                                    class="form-radio text-blue-500">
                                                <span class="ml-2">Bajo</span>
                                            </label>
                                        </div>
                                    </div>

                                    <!-- Checkboxes -->
                                    <div class="mb-6 grid grid-cols-2 gap-4">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="opciones" value="disc"
                                                class="form-checkbox text-orange-500">
                                            <span class="ml-2">DISC</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="opciones" value="curriculum"
                                                class="form-checkbox text-orange-500">
                                            <span class="ml-2">CURRICULUM</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="opciones" value="conocimiento"
                                                class="form-checkbox text-orange-500">
                                            <span class="ml-2">CONOCIMIENTO</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="opciones" value="competencias"
                                                class="form-checkbox text-orange-500">
                                            <span class="ml-2">COMPETENCIAS</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="opciones" value="video"
                                                class="form-checkbox text-orange-500">
                                            <span class="ml-2">VIDEO ENTREVISTA</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button @click="guardar"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
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

    </DashboardLayout>

</template>

<script setup lang="ts">
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import { ref } from 'vue';

// Estado para mostrar/ocultar el modal
const mostrarModal = ref(false);
const nombre = ref('');
const nivel = ref('');
const opciones = ref<string[]>([]);

// Funciones para abrir y cerrar el modal
const abrirModal = () => {
    mostrarModal.value = true;
};

const cerrarModal = () => {
    mostrarModal.value = false;
};

// Función para guardar los datos (puedes personalizar esta lógica)
const guardar = () => {
    console.log('Guardado', {
        nombre: nombre.value,
        nivel: nivel.value,
        opciones: opciones.value
    });
    cerrarModal(); // Cierra el modal después de guardar
};
</script>

<style scoped></style>