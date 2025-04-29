import { StyleProp } from "react-native";

export type UserProfile = {
    id: string;
    gender: string;
    name: string;
    lastname: string;
    age: number;
    hobbies: string[];
    photos: string[];
    country: string,
    city: string,
    isMatch: boolean
};

interface StylesProps extends StyleProp {

}
export interface IconProps {
    color?: string;
    width?: string | number;
    height?: string | number;
    primaryColor?: string;
    otherProps?: any
    showRedDot?: boolean
    style?: StylesProps,
    secondary?: boolean
}
  
export type CategoryType = 'friendship' | 'relationship' | 'dating';