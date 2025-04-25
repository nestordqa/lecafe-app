export type UserProfile = {
    id: string;
    gender: string;
    name: string;
    lastname: string;
    age: number;
    hobbies: string[];
    photos: string[];
};
  
export type CategoryType = 'friendship' | 'relationship' | 'dating';