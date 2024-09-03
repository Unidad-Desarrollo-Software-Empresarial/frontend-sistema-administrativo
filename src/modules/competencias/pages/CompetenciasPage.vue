<template>
    <DashboardLayout>
        <!-- Encabezado de Competencias y Pruebas -->
        <div class="flex items-center justify-between p-4 border-b bg-gray-50">
            <div class="flex items-center">
                <!-- Flecha para regresar -->
                <button @click="goBack" class="mr-2 text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div>
                    <h1 class="text-xl font-semibold">Competencias y Pruebas</h1>
                    <p class="text-sm text-gray-600">Edición del perfil - Desarrollador de software.</p>
                </div>
            </div>
            <div class="flex space-x-4">
                <button @click="cambiarSeccion('competencias')"
                    :class="['flex items-center space-x-2', seccionActiva === 'competencias' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-500']">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12-1H6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                    <span>Competencias</span>
                </button>
                <button @click="cambiarSeccion('pruebas')"
                    :class="['flex items-center space-x-2', seccionActiva === 'pruebas' ? 'text-blue-500 font-bold border-b-2 border-blue-500' : 'text-gray-500']">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-1 1v4H5a1 1 0 000 2h3v3H5a1 1 0 000 2h3v4a1 1 0 001 1h2a1 1 0 001-1v-4h3a1 1 0 100-2h-3v-3h3a1 1 0 100-2h-3V3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd" />
                    </svg>
                    <span>Pruebas</span>
                </button>
            </div>
        </div>

        <!-- Resto del contenido -->
        <div class="max-w-5xl mx-auto p-6">
            <div v-if="competenciasSeleccionadas.length > 0" class="space-y-6 mb-8">
                <div v-for="(competencia, index) in competenciasSeleccionadas" :key="index"
                    class="bg-white p-4 rounded-lg shadow-md">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h3 class="text-lg font-semibold">{{ competencia.nombre }}</h3>
                            <p class="text-sm text-gray-500">{{ competencia.eje }}</p>
                        </div>
                        <div>
                            <button @click="eliminarCompetencia(index)"
                                class="text-red-500 hover:text-red-700">Eliminar</button>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <!-- Slider de Peso -->
                        <div class="flex flex-col w-1/2">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-semibold text-gray-600">Peso</span>
                                <span class="text-blue-600 font-semibold text-xs">{{ competencia.peso }}%</span>
                            </div>
                            <input type="range" min="0" max="100" v-model="competencia.peso" class="slider"
                                :style="{ 'background-size': competencia.peso + '% 100%' }" />
                        </div>


                        <!-- Slider de Nivel de desarrollo -->
                        <div class="flex flex-col w-1/2">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-xs font-semibold text-gray-600">Nivel de desarrollo</span>
                                <span class="text-blue-600 font-semibold text-xs">{{ competencia.nivel }}%</span>
                            </div>
                            <input type="range" min="0" max="100" v-model="competencia.nivel" class="slider"
                                :style="{ 'background-size': competencia.nivel + '% 100%' }" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button @click="toggleCompetencias"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    + Agregar competencias
                </button>
            </div>
        </div>

        <!-- Fondo para cerrar el modal al hacer clic fuera -->
        <transition name="fade">
            <div v-if="mostrarPanel" @click="closePanel" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        </transition>

        <!-- Panel Lateral -->
        <transition name="slide">
            <div v-if="mostrarPanel" ref="panel" class="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-50"
                @click.stop>
                <div class="p-4 border-b">
                    <h3 class="text-xl font-bold">Competencias ({{ totalCompetencias }})</h3>
                    <input type="text" placeholder="Buscar" v-model="busqueda" class="mt-4 p-2 border rounded w-full" />
                </div>
                <div class="p-4 overflow-y-auto">
                    <ul>
                        <li v-for="categoria in categoriasFiltradas" :key="categoria.nombre" class="mb-4">
                            <div class="flex items-center justify-between cursor-pointer"
                                @click="categoria.expandido = !categoria.expandido">
                                <span :class="categoria.icono">{{ categoria.nombre }}</span>
                                <span>{{ categoria.competencias.length }}</span>
                            </div>
                            <ul v-if="categoria.expandido" class="mt-2 ml-4">
                                <li v-for="competencia in categoria.competencias" :key="competencia"
                                    class="pl-2 py-1 border-b flex justify-between items-center">
                                    {{ competencia }}
                                    <button @click="agregarCompetencia(competencia, categoria.nombre)"
                                        :disabled="competenciaYaSeleccionada(competencia)"
                                        :class="competenciaYaSeleccionada(competencia) ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-700'"
                                        class="text-white text-sm px-2 py-1 rounded ml-2">
                                        {{ competenciaYaSeleccionada(competencia) ? 'Añadido' : 'Agregar' }}
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </transition>
    </DashboardLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
    router.push({ name: 'perfil-settings' });
};

const mostrarPanel = ref(false);
const busqueda = ref('');
const competenciasSeleccionadas = ref([]);
const totalCompetencias = ref(118); // Total de competencias disponibles
const seccionActiva = ref('competencias'); // Para el encabezado

const toggleCompetencias = () => {
    mostrarPanel.value = !mostrarPanel.value;
};

const closePanel = () => {
    mostrarPanel.value = false;
};

const cambiarSeccion = (seccion) => {
    seccionActiva.value = seccion;
};

const agregarCompetencia = (competencia, eje) => {
    if (!competenciaYaSeleccionada(competencia)) {
        competenciasSeleccionadas.value.push({
            nombre: competencia,
            eje: eje,
            peso: 25,
            nivel: 50 // Valor inicial del slider para el nivel de desarrollo
        });
    }
};

const competenciaYaSeleccionada = (competencia) => {
    return competenciasSeleccionadas.value.some(c => c.nombre === competencia);
};

const eliminarCompetencia = (index) => {
    competenciasSeleccionadas.value.splice(index, 1);
};

const categorias = ref([
    {
        nombre: 'Actualizables',
        competencias: ['Apertura al cambio', 'Aptitud numérica'],
        expandido: false,
        icono: '⚡',
    },
    {
        nombre: 'Administrativas',
        competencias: ['Planificación', 'Gestión de proyectos'],
        expandido: false,
        icono: '🔧',
    },
    {
        nombre: 'Cognitivas',
        competencias: ['Creatividad', 'Pensamiento analítico'],
        expandido: false,
        icono: '🧠',
    },
]);

// Computed property to filter categories based on the search query
const categoriasFiltradas = computed(() => {
    if (!busqueda.value) {
        return categorias.value;
    }
    const searchLowerCase = busqueda.value.toLowerCase();
    return categorias.value.filter(categoria =>
        categoria.nombre.toLowerCase().includes(searchLowerCase)
    );
});
</script>

<style scoped>
.slider {
    appearance: none;
    width: 100%;
    height: 8px;
    background: linear-gradient(to right, #3b82f6 0%, #3b82f6 100%);
    border-radius: 5px;
    outline: none;
    transition: background-size 0.3s;
}

.slider::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background-color: #3b82f6;
    border-radius: 50%;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background-color: #3b82f6;
    border-radius: 50%;
    cursor: pointer;
}
</style>
