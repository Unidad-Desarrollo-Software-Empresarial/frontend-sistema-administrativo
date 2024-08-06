<template>
    <DashboardLayout>
      <div class="min-h-screen bg-gray-100 p-4">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
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
  
  </script>
  