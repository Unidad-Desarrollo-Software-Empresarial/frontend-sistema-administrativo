// import { useApi } from "@/composables/use-api"
import { useMutation } from '@tanstack/vue-query';
import type { LoginDto } from '../dto/login.dto';
import type { LoginResponseDto } from '../dto/login-response.dto';
import { useApi } from '@/composables/use-api';
import Swal from 'sweetalert2';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (data: LoginDto) => {
      const response = await useApi.post<LoginResponseDto>('/api/v1/auth/login', {
        username: data.username,
        password: data.password,
        // apiKey: 'documental',
        // apiSecret: 'Documental2021file'
      });

      const { usuario, rol, rutas, token } = response.data;

      if (!usuario || !rol || !rutas || !token) {
        throw new Error('La respuesta del servidor es incompleta.');
      }

      return response.data;
    },

    onError: (error) => {
      if (error instanceof Error) {
        console.error('Error durante el login:', error.message);

        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      } else {
        console.error('Error inesperado durante el login:', error);
        Swal.fire({
          title: 'Error inesperado',
          text: 'Ocurrió un error inesperado, por favor intenta nuevamente.',
          icon: 'error',
        });
      }
    },
  });
  return mutation;
};
