<template>
    <DashboardLayout>
        <div class="w-full h-full bg-white shadow-lg rounded-lg p-6">
            <!-- Título y subtítulo -->
            <div class="mb-4">
                <h2 class="text-2xl font-bold text-gray-800">Listado de perfiles</h2>
                <p class="text-gray-600">Aquí puedes elegir los perfiles existentes y editarlos.</p>
            </div>

            <!-- Filtro de estado -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                <div class="w-full sm:w-1/3">
                    <select
                        class="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Activo</option>
                        <option>Pendiente</option>
                        <option>Inactivo</option>
                    </select>
                </div>
                <div class="flex space-x-2">
                    <button class="p-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button class="p-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Listado de perfiles -->
            <div class="space-y-4">
                <!-- Tarjeta de perfil -->
                <div class="border border-gray-200 p-4 rounded-lg shadow">
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-xs text-green-500">Activo</span>
                            <p class="font-semibold text-gray-800">PRACTICANTE PRE PROFESIONAL DE BUSINESS
                                EXCELLENCE PRUEBA</p>
                        </div>
                        <button class="text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 12h12m-6-6v12" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-sm text-gray-600">Estado: Activo | Dificultad: Bajo | Componente: DISC,
                        Competencias</p>
                </div>

                <div class="border border-gray-200 p-4 rounded-lg shadow">
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-xs text-red-500">Pendiente</span>
                            <p class="font-semibold text-gray-800">PRUEBA JULIO 11</p>
                        </div>
                        <button class="text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 12h12m-6-6v12" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-sm text-gray-600">Estado: Activo | Dificultad: Bajo | Componente: DISC,
                        Competencias</p>
                </div>

                <div class="border border-gray-200 p-4 rounded-lg shadow">
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-xs text-red-500">Pendiente</span>
                            <p class="font-semibold text-gray-800">REPRESENTANTE COMERCIAL</p>
                        </div>
                        <button class="text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 12h12m-6-6v12" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-sm text-gray-600">Estado: Activo | Dificultad: Medio | Componente: DISC,
                        Competencias, Conocimiento, Currículum</p>
                </div>
            </div>

            <!-- Botón verde de añadir perfil -->
            <button @click="abrirModal"
                class="fixed bottom-4 right-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H5a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Modal -->
            <div v-if="mostrarModal" class="fixed inset-0 z-50 overflow-y-auto" @click="cerrarModal">
                <div class="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <!-- Centrado del modal -->
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-2xl lg:max-w-3xl"
                        @click.stop>
                        <form @submit.prevent="guardar">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Crear
                                            Perfil
                                        </h3>
                                        <div class="mt-2">
                                            <!-- Formulario dentro del modal -->
                                            <div class="mb-4">
                                                <label for="nombre"
                                                    class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                                <input v-model="nombre" type="text" id="nombre" @input="limitarLetras"
                                                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Analista de Talento Humano" />
                                                <div class="text-right text-sm text-gray-500 mt-1">{{ contarCaracteres }} /
                                                    150</div>
                                                <p v-if="mensajeError" class="text-red-500 text-sm mt-1">{{ mensajeError }}
                                                </p>
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
                                            <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                <button type="submit"
                                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Guardar
                                </button>
                                <button @click="cerrarModal" type="button"
                                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';

const router = useRouter();
const mostrarModal = ref(false);
const nombre = ref('');
const nivel = ref('');
const opciones = ref<string[]>([]);
const mensajeError = ref('');

const contarCaracteres = computed(() => {
    return nombre.value.length;
});

const limitarLetras = () => {
    if (nombre.value.length > 150) {
        nombre.value = nombre.value.slice(0, 150);
    }
};

const abrirModal = () => {
    mostrarModal.value = true;
};

const cerrarModal = () => {
    mostrarModal.value = false;
};


const guardar = () => {
    console.log('Guardado', {
        nombre: nombre.value,
        nivel: nivel.value,
        opciones: opciones.value,
    });
    cerrarModal(); 

    
    setTimeout(() => {
        router.replace('/perfil-settings');
    }, 100);
};
</script>

<style scoped></style>
