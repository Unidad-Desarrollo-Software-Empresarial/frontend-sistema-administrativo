<template>
  <DashboardLayout>
    <div class="w-full bg-white shadow">
      <!-- Encabezado -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <div class="flex items-center space-x-2">
          <button @click="goBack" class="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-gray-800">Configura el match perfecto de Currículum</h1>
        </div>
        <button class="text-blue-600 hover:text-blue-800 font-semibold hidden">
          Configuración avanzada
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Subtítulo -->
      <div class="px-4 py-2 border-b border-gray-200 bg-gray-50">
        <p class="text-sm text-gray-600">Edición del perfil - <span class="font-semibold">DESARROLLADOR DE
            SOFTWARE</span></p>
      </div>

      <!-- Contenido principal -->
      <div class="p-4">
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 class="text-lg font-semibold text-blue-600">Configuración del CV</h2>
          <p class="text-sm text-gray-600 mt-2">
            Configura las secciones del CV para que Evaluar filtre los mejores talentos entre todos los candidatos de tu
            proceso.
          </p>
          <p class="text-sm text-gray-600 mt-2">
            Si crees que alguna sección no es útil para tu proceso, selecciona la opción <span
              class="font-semibold">Deshabilitar Sección</span> con el switch.
          </p>
          <p class="text-xs text-gray-500 mt-2">
            * Nada de lo que configures en estos campos se le mostrará al candidato.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto bg-white rounded-lg p-6">
      <!-- Información Personal -->
      <PersonalInfoSection />

      <!-- Salario -->
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
            <button @click="mostrarMas" class="text-blue-500 hover:text-blue-700 focus:outline-none">
              Ver más <span v-if="!mostrarDetalle">▼</span><span v-else>▲</span>
            </button>
          </div>

          <!-- Sección adicional que se muestra al hacer clic en "Ver más" -->
          <div v-if="mostrarDetalle" class="mt-4">
            <!-- Agrega aquí el contenido adicional que se debe mostrar al hacer clic en "Ver más" -->
            <p>Aquí puedes añadir más campos o información adicional que se deba mostrar cuando el usuario expanda la
              sección.</p>
          </div>
        </div>
      </div>

      <!-- Educación -->

      <div class="mb-4">
        <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
          <h2 class="text-lg font-bold">Educación</h2>
          <span class="transition-transform">
            <!-- Toggle Switch -->
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="educationActive" class="sr-only" />
              <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                :class="{ 'bg-blue-500': educationActive, 'bg-gray-300': !educationActive }">
                <span
                  class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                  :class="{
                    'translate-x-6 bg-white': educationActive,
                    'bg-neutral-400': !educationActive
                  }"></span>
              </div>
            </label>
          </span>
        </div>
        <div v-if="educationActive" class="p-4 border border-t-0 rounded-b-lg">
          <!-- Contenido de la sección Educación -->
          <p class="text-sm text-gray-600 mb-4">Configura los estudios requeridos para desempeñar el cargo.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Nivel de Estudios -->
            <div>
              <label for="nivel-estudios" class="block text-gray-700 text-sm font-bold mb-2">Nivel de Estudios</label>
              <select v-model="nivelEstudios" id="nivel-estudios"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>Seleccione</option>
                <option value="secundario">Secundario</option>
                <option value="tecnico">Técnico</option>
                <option value="universitario">Universitario</option>
                <option value="postgrado">Postgrado</option>
              </select>
            </div>

            <!-- Estado de Estudios -->
            <div>
              <label for="estado-estudios" class="block text-gray-700 text-sm font-bold mb-2">Estado de Estudios</label>
              <select v-model="estadoEstudios" id="estado-estudios"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>Seleccione</option>
                <option value="en-curso">En curso</option>
                <option value="terminado">Terminado</option>
                <option value="incompleto">Incompleto</option>
              </select>
            </div>

            <!-- Áreas de Estudio -->
            <AreaEstudioModal />
          </div>

          <div class="mt-4 text-center">
            <button @click="mostrarMasEducacion" class="text-blue-500 hover:text-blue-700 focus:outline-none">
              Ver más <span v-if="!mostrarDetalleEducacion">▼</span><span v-else>▲</span>
            </button>
          </div>

          <!-- Sección adicional que se muestra al hacer clic en "Ver más" -->
          <div v-if="mostrarDetalleEducacion" class="mt-4">
            <!-- Contenido adicional mostrado en la imagen proporcionada -->
            <div>
              <label for="institucion-educativa" class="block text-gray-700 text-sm font-bold mb-2">Institución
                Educativa</label>
              <input v-model="institucionEducativa" type="text" id="institucion-educativa"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserta la(s) instituciones donde deseas que el candidato haya estudiado" />
            </div>

            <div class="bg-red-100 border border-red-300 p-4 rounded-lg mb-6 mt-4">
              <h4 class="text-red-500 font-bold mb-2">Campos Excluyentes</h4>
              <p class="text-sm text-red-500 mb-4">Advertencia: selecciona los campos que son indispensables para el
                perfil. Ten en cuenta que si un candidato no cumple con un campo excluyente será descartado del proceso.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <label class="inline-flex items-center">
                  <input type="checkbox" v-model="excluyentes" value="educacion" class="form-checkbox text-red-500">
                  <span class="ml-2">Educación</span>
                </label>
                <!-- Agrega otros campos excluyentes si es necesario -->
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Experiencia Profesional -->

      <div class="mb-4">
        <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
          <h2 class="text-lg font-bold"><i class="fas fa-briefcase"></i> Experiencia profesional</h2>
          <span class="transition-transform">
            <!-- Toggle Switch -->
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="professionalExperienceActive" class="sr-only" />
              <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                :class="{ 'bg-blue-500': professionalExperienceActive, 'bg-gray-300': !professionalExperienceActive }">
                <span
                  class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                  :class="{
                    'translate-x-6 bg-white': professionalExperienceActive,
                    'bg-neutral-400': !professionalExperienceActive
                  }"></span>
              </div>
            </label>
          </span>
        </div>
        <div v-if="professionalExperienceActive" class="p-4 border border-t-0 rounded-b-lg">
          <form>
            <!-- Nombre del Cargo -->
            <div class="mb-4">
              <label for="cargo" class="block text-gray-700 text-sm font-bold mb-2">Nombre del cargo</label>
              <input v-model="cargo" type="text" id="cargo" placeholder="Ingresa el nombre del cargo"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Años de experiencia -->
            <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="experienceYearsDesde" class="block text-gray-700 text-sm font-bold mb-2">Desde</label>
                <input v-model="experienceYearsDesde" type="number" id="experienceYearsDesde"
                  placeholder="Inserta el valor mínimo de años de experiencia requeridos"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label for="experienceYearsHasta" class="block text-gray-700 text-sm font-bold mb-2">Hasta</label>
                <input v-model="experienceYearsHasta" type="number" id="experienceYearsHasta"
                  placeholder="Inserta el valor máximo de años de experiencia requeridos"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <!-- Áreas / Departamentos en la Empresa -->
            <div class="mb-4">
              <label for="department" class="block text-gray-700 text-sm font-bold mb-2">Áreas / Departamentos en la
                Empresa</label>
              <input v-model="department" type="text" id="department" placeholder="Selecciona el área o departamento"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Sub Áreas Laborales -->
            <div class="mb-4">
              <label for="subArea" class="block text-gray-700 text-sm font-bold mb-2">Sub Áreas Laborales</label>
              <input v-model="subArea" type="text" id="subArea" placeholder="Selecciona la sub-área"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </form>

          <div class="mt-4 text-center">
            <button @click="mostrarMasExperiencia" class="text-blue-500 hover:text-blue-700 focus:outline-none">
              Ver más <span v-if="!mostrarDetalleExperiencia">▼</span><span v-else>▲</span>
            </button>
          </div>

          <!-- Sección adicional que se muestra al hacer clic en "Ver más" -->
          <div v-if="mostrarDetalleExperiencia" class="mt-4">
            <!-- Agrega aquí el contenido adicional que se debe mostrar al hacer clic en "Ver más" -->
            <div>
              <label for="institucion-laboral" class="block text-gray-700 text-sm font-bold mb-2">Institución
                Laboral</label>
              <input v-model="institucionLaboral" type="text" id="institucion-laboral"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Inserta la(s) instituciones donde deseas que el candidato haya trabajado" />
            </div>

            <div class="bg-red-100 border border-red-300 p-4 rounded-lg mb-6 mt-4">
              <h4 class="text-red-500 font-bold mb-2">Campos Excluyentes</h4>
              <p class="text-sm text-red-500 mb-4">Advertencia: selecciona los campos que son indispensables para el
                perfil. Ten en cuenta que si un candidato no cumple con un campo excluyente será descartado del proceso.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <label class="inline-flex items-center">
                  <input type="checkbox" v-model="excluyentesExperiencia" value="experiencia"
                    class="form-checkbox text-red-500">
                  <span class="ml-2">Experiencia</span>
                </label>
                <!-- Agrega otros campos excluyentes si es necesario -->
              </div>
            </div>
          </div>
        </div>
      </div>




      <!-- Idiomas -->
      <div class="mb-4">
        <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
          <h2 class="text-lg font-bold">Idiomas</h2>
          <span class="transition-transform">
            <!-- Toggle Switch -->
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="idiomasActive" class="sr-only" />
              <div class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                :class="{ 'bg-blue-500': idiomasActive, 'bg-gray-300': !idiomasActive }">
                <span
                  class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                  :class="{
                    'translate-x-6 bg-white': idiomasActive,
                    'bg-neutral-400': !idiomasActive
                  }"></span>
              </div>
            </label>
          </span>
        </div>
        <div v-if="idiomasActive" class="p-4 border border-t-0 rounded-b-lg">
          <!-- Contenido de la sección Idiomas -->
          <p>Aquí va el contenido de Idiomas.</p>
        </div>
      </div>
    </div>

  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/modules/dashboard/layouts/DashboardLayout.vue';
import PersonalInfoSection from '@/modules/curriculum/componentes/PersonalInfoSection.vue';
import AreaEstudioModal from '@/modules/curriculum/componentes/AreaEstudioModal.vue';

import { ref } from 'vue';

// Estado para manejar qué sección está activa
const professionalExperienceActive = ref(false);
const idiomasActive = ref(false);

// Salario
const salaryActive = ref(false);
const salarioDesde = ref(null);
const salarioHasta = ref(null);
const beneficios = ref(null);
const mostrarDetalle = ref(false);

const mostrarMas = () => {
  mostrarDetalle.value = !mostrarDetalle.value;
};

// Educación
const educationActive = ref(false);
const nivelEstudios = ref(null);
const estadoEstudios = ref(null);
const institucionEducativa = ref(null);
const excluyentes = ref([]);
const mostrarDetalleEducacion = ref(false);


const mostrarMasEducacion = () => {
  mostrarDetalleEducacion.value = !mostrarDetalleEducacion.value;
};


//Experiencia Personal 

const cargo = ref(null);
const experienceYearsDesde = ref(null);
const experienceYearsHasta = ref(null);
const department = ref(null);
const subArea = ref(null);
const institucionLaboral = ref(null);
const excluyentesExperiencia = ref([]);

const mostrarDetalleExperiencia = ref(false);

const mostrarMasExperiencia = () => {
  mostrarDetalleExperiencia.value = !mostrarDetalleExperiencia.value;
};

</script>
