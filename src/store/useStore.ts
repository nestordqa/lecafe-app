import { create } from 'zustand';
import { CategoryType, UserProfile } from '../types/common';
import { StoreState } from '@/types/store';

// Zustand store
const useStore = create<StoreState>((set) => ({
    // Fake data
    profiles: [
        {
            id: '1',
            isMatch: false,
            gender: 'femenino',
            name: 'Sofía',
            lastname: 'García',
            city: 'Lima',
            country: 'Perú',
            age: 26,
            hobbies: ['Leer', 'Bailar', 'Cocinar'],
            photos: [
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/women/3.jpg',
            ],
        },
        {
            id: '2',
            isMatch: false,
            gender: 'masculino',
            name: 'Carlos',
            lastname: 'Ramírez',
            city: 'Arequipa',
            country: 'Perú',
            age: 29,
            hobbies: ['Fútbol', 'Viajar', 'Fotografía'],
            photos: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg',
                'https://randomuser.me/api/portraits/men/3.jpg',
            ],
        },
        {
            id: '3',
            isMatch: true,
            gender: 'femenino',
            name: 'María',
            lastname: 'Fernández',
            city: 'Cusco',
            country: 'Perú',
            age: 24,
            hobbies: ['Pintar', 'Yoga', 'Música'],
            photos: [
                'https://randomuser.me/api/portraits/women/4.jpg',
                'https://randomuser.me/api/portraits/women/5.jpg',
                'https://randomuser.me/api/portraits/women/6.jpg',
            ],
        },
        {
            id: '4',
            isMatch: false,
            gender: 'masculino',
            name: 'José',
            lastname: 'Torres',
            city: 'Trujillo',
            country: 'Perú',
            age: 31,
            hobbies: ['Correr', 'Leer', 'Videojuegos'],
            photos: [
                'https://randomuser.me/api/portraits/men/4.jpg',
                'https://randomuser.me/api/portraits/men/5.jpg',
                'https://randomuser.me/api/portraits/men/6.jpg',
            ],
        },
        {
            id: '5',
            isMatch: true,
            gender: 'femenino',
            name: 'Lucía',
            lastname: 'Martínez',
            city: 'Piura',
            country: 'Perú',
            age: 27,
            hobbies: ['Cine', 'Natación', 'Escribir'],
            photos: [
                'https://randomuser.me/api/portraits/women/7.jpg',
                'https://randomuser.me/api/portraits/women/8.jpg',
                'https://randomuser.me/api/portraits/women/9.jpg',
            ],
        },
        {
            id: '6',
            isMatch: false,
            gender: 'masculino',
            name: 'Andrés',
            lastname: 'Morales',
            city: 'Chiclayo',
            country: 'Perú',
            age: 28,
            hobbies: ['Escuchar música', 'Cocinar', 'Montar bicicleta'],
            photos: [
                'https://randomuser.me/api/portraits/men/7.jpg',
                'https://randomuser.me/api/portraits/men/8.jpg',
                'https://randomuser.me/api/portraits/men/9.jpg',
            ],
        },
        {
            id: '7',
            isMatch: true,
            gender: 'femenino',
            name: 'Valentina',
            lastname: 'Rojas',
            city: 'Tacna',
            country: 'Perú',
            age: 23,
            hobbies: ['Dibujar', 'Viajar', 'Cantar'],
            photos: [
                'https://randomuser.me/api/portraits/women/10.jpg',
                'https://randomuser.me/api/portraits/women/11.jpg',
                'https://randomuser.me/api/portraits/women/12.jpg',
            ],
        },
        {
            id: '8',
            isMatch: false,
            gender: 'masculino',
            name: 'Miguel',
            lastname: 'Vargas',
            city: 'Iquitos',
            country: 'Perú',
            age: 33,
            hobbies: ['Pescar', 'Cocinar', 'Leer'],
            photos: [
                'https://randomuser.me/api/portraits/men/10.jpg',
                'https://randomuser.me/api/portraits/men/11.jpg',
                'https://randomuser.me/api/portraits/men/12.jpg',
            ],
        },
        {
            id: '9',
            isMatch: true,
            gender: 'femenino',
            name: 'Camila',
            lastname: 'Castro',
            city: 'Huancayo',
            country: 'Perú',
            age: 25,
            hobbies: ['Bailar', 'Correr', 'Ver series'],
            photos: [
                'https://randomuser.me/api/portraits/women/13.jpg',
                'https://randomuser.me/api/portraits/women/14.jpg',
                'https://randomuser.me/api/portraits/women/15.jpg',
            ],
        },
        {
            id: '10',
            isMatch: false,
            gender: 'masculino',
            name: 'Pedro',
            lastname: 'Soto',
            city: 'Puno',
            country: 'Perú',
            age: 30,
            hobbies: ['Escalar', 'Tocar guitarra', 'Fútbol'],
            photos: [
                'https://randomuser.me/api/portraits/men/13.jpg',
                'https://randomuser.me/api/portraits/men/14.jpg',
                'https://randomuser.me/api/portraits/men/15.jpg',
            ],
        },
        {
            id: '11',
            isMatch: false,
            gender: 'femenino',
            name: 'Isabella',
            lastname: 'Reyes',
            city: 'Ica',
            country: 'Perú',
            age: 22,
            hobbies: ['Fotografía', 'Pintar', 'Leer'],
            photos: [
                'https://randomuser.me/api/portraits/women/16.jpg',
                'https://randomuser.me/api/portraits/women/17.jpg',
                'https://randomuser.me/api/portraits/women/18.jpg',
            ],
        },
        {
            id: '12',
            isMatch: false,
            gender: 'masculino',
            name: 'Diego',
            lastname: 'Mendoza',
            city: 'Tumbes',
            country: 'Perú',
            age: 27,
            hobbies: ['Nadar', 'Cocinar', 'Ciclismo'],
            photos: [
                'https://randomuser.me/api/portraits/men/16.jpg',
                'https://randomuser.me/api/portraits/men/17.jpg',
                'https://randomuser.me/api/portraits/men/18.jpg',
            ],
        },
        {
            id: '13',
            isMatch: true,
            gender: 'femenino',
            name: 'Gabriela',
            lastname: 'Paredes',
            city: 'Moquegua',
            country: 'Perú',
            age: 28,
            hobbies: ['Tejer', 'Leer', 'Cocinar'],
            photos: [
                'https://randomuser.me/api/portraits/women/19.jpg',
                'https://randomuser.me/api/portraits/women/20.jpg',
                'https://randomuser.me/api/portraits/women/21.jpg',
            ],
        },
        {
            id: '14',
            isMatch: false,
            gender: 'masculino',
            name: 'Luis',
            lastname: 'Guzmán',
            city: 'Cajamarca',
            country: 'Perú',
            age: 26,
            hobbies: ['Boxeo', 'Videojuegos', 'Viajar'],
            photos: [
                'https://randomuser.me/api/portraits/men/19.jpg',
                'https://randomuser.me/api/portraits/men/20.jpg',
                'https://randomuser.me/api/portraits/men/21.jpg',
            ],
        },
        {
            id: '15',
            isMatch: false,
            gender: 'femenino',
            name: 'Paula',
            lastname: 'Salazar',
            city: 'Ayacucho',
            country: 'Perú',
            age: 29,
            hobbies: ['Cantar', 'Cocinar', 'Ver películas'],
            photos: [
                'https://randomuser.me/api/portraits/women/22.jpg',
                'https://randomuser.me/api/portraits/women/23.jpg',
                'https://randomuser.me/api/portraits/women/24.jpg',
            ],
        },
        {
            id: '16',
            isMatch: false,
            gender: 'masculino',
            name: 'Juan',
            lastname: 'Ortega',
            city: 'Pucallpa',
            country: 'Perú',
            age: 32,
            hobbies: ['Pescar', 'Leer', 'Correr'],
            photos: [
                'https://randomuser.me/api/portraits/men/22.jpg',
                'https://randomuser.me/api/portraits/men/23.jpg',
                'https://randomuser.me/api/portraits/men/24.jpg',
            ],
        },
        {
            id: '17',
            isMatch: false,
            gender: 'femenino',
            name: 'Fernanda',
            lastname: 'Aguilar',
            city: 'Tarapoto',
            country: 'Perú',
            age: 24,
            hobbies: ['Bailar', 'Yoga', 'Cocinar'],
            photos: [
                'https://randomuser.me/api/portraits/women/25.jpg',
                'https://randomuser.me/api/portraits/women/26.jpg',
                'https://randomuser.me/api/portraits/women/27.jpg',
            ],
        },
        {
            id: '18',
            isMatch: false,
            gender: 'masculino',
            name: 'Ricardo',
            lastname: 'Peña',
            city: 'Huaraz',
            country: 'Perú',
            age: 28,
            hobbies: ['Ciclismo', 'Escalar', 'Leer'],
            photos: [
                'https://randomuser.me/api/portraits/men/25.jpg',
                'https://randomuser.me/api/portraits/men/26.jpg',
                'https://randomuser.me/api/portraits/men/27.jpg',
            ],
        },
        {
            id: '19',
            isMatch: true,
            gender: 'femenino',
            name: 'Antonia',
            lastname: 'Campos',
            city: 'Chimbote',
            country: 'Perú',
            age: 27,
            hobbies: ['Dibujar', 'Cantar', 'Ver series'],
            photos: [
                'https://randomuser.me/api/portraits/women/28.jpg',
                'https://randomuser.me/api/portraits/women/29.jpg',
                'https://randomuser.me/api/portraits/women/30.jpg',
            ],
        },
        {
            id: '20',
            isMatch: false,
            gender: 'masculino',
            name: 'Santiago',
            lastname: 'Herrera',
            city: 'Juliaca',
            country: 'Perú',
            age: 31,
            hobbies: ['Tocar piano', 'Fútbol', 'Leer'],
            photos: [
                'https://randomuser.me/api/portraits/men/28.jpg',
                'https://randomuser.me/api/portraits/men/29.jpg',
                'https://randomuser.me/api/portraits/men/30.jpg',
            ],
        },
    ],
    likedProfiles: [], // Inicialmente sin perfiles con likes
    dislikedProfiles: [], // Inicialmente sin perfikles con dislike
    superLikedProfiles: [], // Inicialmente sin perfiles con superlike
    currentCategory: 'friendship',

    //Para elegir una nueva categoria
    setCurrentCategory: (category) => set({ currentCategory: category }),

    likeProfile: (id) =>
        set((state) => ({
          likedProfiles: [...state.likedProfiles, id],
          profiles: state.profiles.filter((p) => p.id !== id)
        })
    ),
    
    dislikeProfile: (id) =>
        set((state) => ({
            dislikedProfiles: [...state.dislikedProfiles, id],
            profiles: state.profiles.filter((p) => p.id !== id)
        })
    ),
    
    superLikeProfile: (id) =>
        set((state) => ({
          superLikedProfiles: [...state.superLikedProfiles, id],
          profiles: state.profiles.filter((p) => p.id !== id),
        })
    ),

    resetProfiles: () => set({ likedProfiles: [], dislikedProfiles: [], superLikedProfiles: [] }),
}));

export default useStore;
