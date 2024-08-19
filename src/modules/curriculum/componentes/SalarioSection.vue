<template>
    <div class="mb-4">
        <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
            <h2 class="text-lg font-bold">Salario</h2>
            <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="salaryActive" class="sr-only" />
                    <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                        :class="{ 'bg-blue-500': salaryActive, 'bg-gray-300': !salaryActive }">
                        <span
                            class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                            :class="{
                                'translate-x-6 bg-white': salaryActive,
                                'bg-neutral-400': !salaryActive
                            }"></span>
                    </div>
                </label>
            </span>
        </div>
        <div v-if="salaryActive" class="p-4 border border-t-0 rounded-b-lg">
            <!-- Contenido de la sección Salario -->
            <p class="text-sm text-gray-600 mb-4">Inserta el rango salarial disponible para el cargo que buscas. Por
                defecto la moneda es USD.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Salario Desde -->
                <div>
                    <label for="salario-desde" class="block text-gray-700 text-sm font-bold mb-2">Desde</label>
                    <input v-model="salarioDesde" type="number" id="salario-desde"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserta valor mínimo" />
                </div>

                <!-- Salario Hasta -->
                <div>
                    <label for="salario-hasta" class="block text-gray-700 text-sm font-bold mb-2">Hasta</label>
                    <input v-model="salarioHasta" type="number" id="salario-hasta"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Inserta valor máximo" />
                </div>

                <!-- Beneficios -->
                <div>
                    <label for="beneficios" class="block text-gray-700 text-sm font-bold mb-2">Beneficios</label>
                    <select v-model="beneficios" id="beneficios"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected>Seleccione</option>
                        <option value="beneficio1">Beneficio 1</option>
                        <option value="beneficio2">Beneficio 2</option>
                        <option value="beneficio3">Beneficio 3</option>
                    </select>
                </div>
            </div>

            <div class="mt-4 text-center">
                <button @click="toggleDetalle" class="text-blue-500 hover:text-blue-700 focus:outline-none"
                    type="button">
                    Ver más <span v-if="!mostrarDetalle">▼</span><span v-else>▲</span>
                </button>
            </div>

            <!-- Sección adicional que se muestra al hacer clic en "Ver más" -->
            <div v-if="mostrarDetalle" class="mt-4">
                <!-- Agrega aquí el contenido adicional que se debe mostrar al hacer clic en "Ver más" -->
                <p>Aquí puedes añadir más campos o información adicional que se deba mostrar cuando el usuario expanda
                    la
                    sección.</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const salaryActive = ref(false);
const salarioDesde = ref(null);
const salarioHasta = ref(null);
const beneficios = ref(null);
const mostrarDetalle = ref(false);

const toggleDetalle = () => {
    mostrarDetalle.value = !mostrarDetalle.value;
};
</script>