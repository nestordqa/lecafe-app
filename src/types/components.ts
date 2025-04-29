import { CategoryType } from "./common";

export interface ActionButtonsProps {
    onDislike: () => void;
    onSuperLike: () => void;
    onLike: () => void;
}

export interface CategoriesSelector {
    key: CategoryType;
    icon: React.ReactNode,
    label: string
}

export interface ProfileCardHandle {
    swipe: (direction: 'left' | 'right' | 'up') => void;
}
