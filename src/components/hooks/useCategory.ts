import colors from "@/config/colors";
import useStore from "@/store/useStore";
import { UseCategory } from "@/types/hooks";
import { useState, useEffect } from "react";

// Hook para obtener los colores según la categoría seleccionada
const useCategory = () => {
    const { currentCategory } = useStore(); // Categoría seleccionada en el store

    // Estado para los colores de la categoría
    const [category, setCategory] = useState<UseCategory>({
        colors: {
            primary: colors.friendshipGradiantPrimary,
            secondary: colors.friendshipGradiantSecondary
        },
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        // Cambia los colores según la categoría actual
        switch (currentCategory) {
            case 'dating':
                setCategory({
                    colors: {
                        primary: colors.datesGradiantPrimary,
                        secondary: colors.datesGradiantSecondary
                    }
                });
                break;

            case 'relationship':
                setCategory({
                    colors: {
                        primary: colors.relationshipGradiantPrimary,
                        secondary: colors.relationshipGradiantSecondary
                    }
                })
                break;

            case 'friendship':
                setCategory({
                    colors: {
                        primary: colors.friendshipGradiantPrimary,
                        secondary: colors.friendshipGradiantSecondary
                    }
                });
                break;
        
            default:
                break;
        }
        return () => {
            isMounted = false;
            setLoading(false);
        };
    }, [currentCategory]);

    return { category, loading, error };
};

export default useCategory;
