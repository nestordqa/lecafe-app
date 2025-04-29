import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import useCategory from '../hooks/useCategory';
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Chip de información con gradiente según la categoría actual
export const InfoChip = ({ text }: { text: string }) => {
    const { category } = useCategory(); // Obtiene la categoría actual

    return (
        <LinearGradient
            colors={[category.colors.primary, category.colors.secondary]} // Gradiente según la categoría
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientContainer: {
        alignSelf: 'flex-start',
        borderRadius: widthPercentageToDP(5),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: heightPercentageToDP(0.75),
        paddingHorizontal: widthPercentageToDP(3),
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
        textTransform: 'capitalize'
    },
});
