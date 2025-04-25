import { create } from 'zustand';
import { CategoryType, UserProfile } from '../types';

// Define the shape of the store's state and actions
interface StoreState {
    profiles: UserProfile[]; // List of all user profiles
    likedProfiles: string[]; // IDs of liked profiles
    dislikedProfiles: string[]; // IDs of disliked profiles
    superLikedProfiles: string[]; // IDs of super-liked profiles
    currentCategory: CategoryType;
    setCurrentCategory: (category: 'friendship' | 'relationship' | 'dating') => void; // Function to set the current category
    likeProfile: (id: string) => void; // Function to like a profile
    dislikeProfile: (id: string) => void; // Function to dislike a profile
    superLikeProfile: (id: string) => void; // Function to super-like a profile
    resetProfiles: () => void; // Function to reset all liked/disliked/super-liked profiles
}

// Zustand store creation
const useStore = create<StoreState>((set) => ({
    // Initial list of user profiles (mock data)
    profiles: [
        {
            id: '1',
            gender: 'female',
            name: 'Sophia',
            lastname: 'Williams',
            age: 28,
            hobbies: ['Reading', 'Hiking', 'Photography'],
            photos: [
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
        },
        {
            id: '2',
            gender: 'male',
            name: 'James',
            lastname: 'Smith',
            age: 32,
            hobbies: ['Gaming', 'Cooking', 'Traveling'],
            photos: [
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
        },
        {
            id: '3',
            gender: 'female',
            name: 'Emma',
            lastname: 'Johnson',
            age: 25,
            hobbies: ['Yoga', 'Painting', 'Dancing'],
            photos: [
                'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
        },
        {
            id: '4',
            gender: 'male',
            name: 'Michael',
            lastname: 'Brown',
            age: 30,
            hobbies: ['Sports', 'Music', 'Movies'],
            photos: [
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
        },
        {
            id: '5',
            gender: 'female',
            name: 'Olivia',
            lastname: 'Davis',
            age: 27,
            hobbies: ['Writing', 'Running', 'Meditation'],
            photos: [
                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
        },
      ],
    likedProfiles: [], // Initially, no profiles are liked
    dislikedProfiles: [], // Initially, no profiles are disliked
    superLikedProfiles: [], // Initially, no profiles are super-liked
    currentCategory: 'friendship', // Default category

    // Set the current category (friendship, relationship, or dating)
    setCurrentCategory: (category) => set({ currentCategory: category }),

    // Add a profile ID to the likedProfiles array
    likeProfile: (id) => set((state) => ({ likedProfiles: [...state.likedProfiles, id] })),

    // Add a profile ID to the dislikedProfiles array
    dislikeProfile: (id) => set((state) => ({ dislikedProfiles: [...state.dislikedProfiles, id] })),

    // Add a profile ID to the superLikedProfiles array
    superLikeProfile: (id) => set((state) => ({ superLikedProfiles: [...state.superLikedProfiles, id] })),

    // Reset all liked, disliked, and super-liked profiles to empty arrays
    resetProfiles: () => set({ likedProfiles: [], dislikedProfiles: [], superLikedProfiles: [] }),
}));

export default useStore;
