<template>
    <div class="mb-4">
        <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
            <h2 class="text-lg font-bold text-gray-800"><i class="fas fa-comments"></i> Preguntas Filtro</h2>
            <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="preguntasFiltroActive" class="sr-only" />
                    <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                        :class="{ 'bg-blue-500': preguntasFiltroActive, 'bg-gray-300': !preguntasFiltroActive }">
                        <span
                            class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                            :class="{
                                'translate-x-6 bg-white': preguntasFiltroActive,
                                'bg-neutral-400': !preguntasFiltroActive
                            }"></span>
                    </div>
                </label>
            </span>
        </div>

        <div v-if="preguntasFiltroActive" class="p-4 border border-t-0 rounded-b-lg bg-white shadow-sm">
            <p class="text-sm text-gray-600 mb-4">Agrega preguntas clave para filtrar a tus candidatos.</p>

            <!-- Lista de preguntas añadidas -->
            <div v-for="(pregunta, index) in preguntas" :key="index" class="mb-6">
                <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div class="mr-4 flex-grow">
                        <select v-model="pregunta.tipo" class="border border-gray-300 rounded-lg p-2 w-full"
                            @change="seleccionarTipo(index)">
                            <option disabled value="">Seleccionar tipo de pregunta</option>
                            <option value="abierta">Abierta</option>
                            <option value="cerrada">Cerrada</option>
                            <option value="archivo">Archivo</option>
                            <option value="predeterminada">Predeterminada</option>
                        </select>
                    </div>
                    <button @click="eliminarPregunta(index)" class="text-gray-500 hover:text-red-600" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div v-if="pregunta.tipoSeleccionado" class="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <div class="flex items-center">
                        <div class="w-full">
                            <input v-model="pregunta.texto" type="text"
                                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe la pregunta" />
                        </div>
                    </div>

                    <!-- Respuestas para preguntas cerradas -->
                    <div v-if="pregunta.tipo === 'cerrada'" class="mt-4 space-y-2">
                        <div v-for="(respuesta, rIndex) in pregunta.respuestas" :key="rIndex"
                            class="flex items-center bg-white p-2 rounded-lg shadow-sm">
                            <input v-model="respuesta.texto" type="text"
                                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe la respuesta" />
                            <button @click="eliminarRespuesta(index, rIndex)" type="button"
                                class="text-gray-500 hover:text-red-600 ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <button @click="agregarRespuesta(index)" type="button"
                            class="text-blue-500 hover:text-blue-700 mt-2 w-full flex items-center justify-center p-2 border border-dashed border-blue-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m8-8H4" />
                            </svg>
                            Agregar respuesta
                        </button>
                        <div class="flex items-center mt-2">
                            <input type="checkbox" v-model="pregunta.excluyente" class="mr-2">
                            <label for="excluyente" class="text-sm text-gray-600">Pregunta excluyente</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Botón para agregar una nueva pregunta -->
            <button @click="agregarPregunta" type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                + Agregar pregunta
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const preguntasFiltroActive = ref(false);
const preguntas = ref([
    { tipo: '', texto: '', tipoSeleccionado: false, respuestas: [], excluyente: false }
]);

const agregarPregunta = () => {
    preguntas.value.push({
        tipo: '',
        texto: '',
        tipoSeleccionado: false,
        respuestas: [],
        excluyente: false
    });
};

const eliminarPregunta = (index) => {
    preguntas.value.splice(index, 1);
};

const seleccionarTipo = (index) => {
    const pregunta = preguntas.value[index];
    pregunta.tipoSeleccionado = true;

    // Configurar respuestas predeterminadas si el tipo es 'cerrada'

    if (pregunta.tipo === 'cerrada' && pregunta.respuestas.length === 0) {
        pregunta.respuestas = [
            { texto: 'Sí' },
            { texto: 'No' },
            { texto: 'Quizás' }
        ];
    }
};

const agregarRespuesta = (index) => {
    preguntas.value[index].respuestas.push({ texto: '' });
};

const eliminarRespuesta = (pIndex, rIndex) => {
    preguntas.value[pIndex].respuestas.splice(rIndex, 1);
};

</script>