<template>
    <DashboardLayout>

      <div class="w-full bg-white shadow">
        <!-- Encabezado -->
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
            <div class="flex items-center space-x-2">
                <button @click="goBack" class="text-gray-600 hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 class="text-xl font-semibold text-gray-800">Configura el match perfecto de Currículum</h1>
            </div>
            <button class="text-blue-600 hover:text-blue-800 font-semibold hidden" >
                Configuración avanzada
                <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- Subtítulo -->
        <div class="px-4 py-2 border-b border-gray-200 bg-gray-50">
            <p class="text-sm text-gray-600">Edición del perfil - <span class="font-semibold">DESARROLLADOR DE SOFTWARE</span></p>
        </div>

        <!-- Contenido principal -->
        <div class="p-4">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h2 class="text-lg font-semibold text-blue-600">Configuración del CV</h2>
                <p class="text-sm text-gray-600 mt-2">
                    Configura las secciones del CV para que Evaluar filtre los mejores talentos entre todos los candidatos de tu proceso.
                </p>
                <p class="text-sm text-gray-600 mt-2">
                    Si crees que alguna sección no es útil para tu proceso, selecciona la opción <span class="font-semibold">Deshabilitar Sección</span> con el switch.
                </p>
                <p class="text-xs text-gray-500 mt-2">
                    * Nada de lo que configures en estos campos se le mostrará al candidato.
                </p>
            </div>
        </div>
    </div>
      
        <div class=" mx-auto bg-white  rounded-lg p-6">
          <!-- Información Personal -->
          <div class="mb-4">
            <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
              <h2 class="text-lg font-bold">Información personal</h2>
              <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="personalInfoActive" class="sr-only" />
                  <div
                    class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
                    :class="{ 'bg-blue-500': personalInfoActive, 'bg-gray-300': !personalInfoActive }">
                    <span
                      class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform duration-300 ease-in-out"
                      :class="{
                        'translate-x-6 bg-white': personalInfoActive,
                        'bg-neutral-400': !personalInfoActive
                      }"></span>
                  </div>
                </label>
              </span>
            </div>
            <div v-if="personalInfoActive" class="p-4 border border-t-0 rounded-b-lg">
              <!-- Contenido de la sección Información Personal -->
              <p>Aquí va el contenido de Información personal.</p>
            </div>
          </div>
  
          <!-- Salario -->
          <div class="mb-4">
            <div class="flex items-center justify-between bg-gray-200 p-4 rounded-t-lg">
              <h2 class="text-lg font-bold">Salario</h2>
              <span class="transition-transform">
                <!-- Toggle Switch -->
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="salaryActive" class="sr-only" />
                  <div
                    class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
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
              <p>Aquí va el contenido de Salario.</p>
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
                  <div
                    class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
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
              <p>Aquí va el contenido de Educación.</p>
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
                  <div
                    class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
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
                  <label for="cargo" class="block text-gray-700 text-sm font-bold mb-2">Nombre del
                    cargo</label>
                  <input v-model="cargo" type="text" id="cargo" placeholder="Ingresa el nombre del cargo"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
  
                <!-- Años de experiencia -->
                <div class="mb-4">
                  <label for="experienceYears" class="block text-gray-700 text-sm font-bold mb-2">Años de
                    experiencia</label>
                  <input v-model="experienceYears" type="number" id="experienceYears"
                    placeholder="Ingresa los años de experiencia"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
  
                <!-- Áreas / Departamentos en la Empresa -->
                <div class="mb-4">
                  <label for="department" class="block text-gray-700 text-sm font-bold mb-2">Áreas /
                    Departamentos en la Empresa</label>
                  <input v-model="department" type="text" id="department"
                    placeholder="Selecciona el área o departamento"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
  
                <!-- Sub Áreas Laborales -->
                <div class="mb-4">
                  <label for="subArea" class="block text-gray-700 text-sm font-bold mb-2">Sub Áreas
                    Laborales</label>
                  <input v-model="subArea" type="text" id="subArea" placeholder="Selecciona la sub-área"
                    class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </form>
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
                  <div
                    class="relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out"
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
  import { ref } from 'vue';
  
  // Estado para manejar qué sección está activa
  const personalInfoActive = ref(false);
  const salaryActive = ref(false);
  const educationActive = ref(false);
  const professionalExperienceActive = ref(false);
  const idiomasActive = ref(false);
  
  </script>
  