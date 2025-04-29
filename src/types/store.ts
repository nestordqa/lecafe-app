import { CategoryType, UserProfile } from "./common";

export interface StoreState {
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