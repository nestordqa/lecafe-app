import { View, TouchableOpacity, Text } from 'react-native';
import useStore from '@/store/useStore';
import FriendshipIcon from '../icons/FriendshipIcon';
import RelationshipIcon from '../icons/RelationshipIcon';
import DatingIcon from '../icons/DatingIcon';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '@/config/colors';
import { CategoriesSelector } from '@/types/components';

// Selector de categorías (Amistad, Citas, Relación)
const CategorySelector = () => {
    // Estado global: categoría seleccionada y función para cambiarla
    const { currentCategory, setCurrentCategory } = useStore();
  
    // Definición de categorías disponibles
    const categories: CategoriesSelector[] = [
        { key: 'friendship', icon: <FriendshipIcon />, label: 'Amistad' },
        { key: 'dating', icon: <DatingIcon />, label: 'Citas' },
        { key: 'relationship', icon: <RelationshipIcon />, label: 'Relación' },
    ];

    return (
        <View style={styles.CategorySelector}>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.key}
                    style={[
                        styles.categoryButton
                    ]}
                    onPress={() => setCurrentCategory(category.key)} // Cambia la categoría al hacer click
                >
                    <View style={[styles.ringContainer, currentCategory === category.key && styles.activeCategory]}>
                        <View style={[styles.iconContainer, currentCategory === category.key && styles.iconContainerActive]}>
                            { category.icon }
                        </View>
                    </View>
                    <Text style={[
                        styles.categoryText,
                        currentCategory === category.key && styles.activeCategoryText
                    ]}>
                        {category.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = {
    CategorySelector: {
        position: 'absolute',
        // backgroundColor: '#0ff',
        width: '100%',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        // backgroundColor: 'transparent',
        zIndex: 10000,
    },
    categoryButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'column',
        gap: 5,
    },
    activeCategory: {
        borderColor: colors.borderColor,
        borderWidth: 2,
        borderStyle: 'solid',
        opacity: 1
    },
    categoryText: {
        display: 'none',
    },
    iconContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(15),
        height: widthPercentageToDP(15),
        borderRadius: 10000,
        opacity: 0.5
    },
    iconContainerActive: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(15),
        height: widthPercentageToDP(15),
        borderRadius: 10000,
        opacity: 1
    },
    ringContainer: {
        borderRadius: 10000,
        padding: widthPercentageToDP(1)
    },
    activeCategoryText: {
        display: 'flex',
        color: 'white',
        fontWeight: '700',
        fontSize: widthPercentageToDP(4)
    }
};

export default CategorySelector;
