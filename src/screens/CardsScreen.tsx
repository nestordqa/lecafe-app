import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import useStore from '@/store/useStore';
import ProfileCard from '@/components/users/ProfileCard';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import useCategory from '@/components/hooks/useCategory';
import { Header } from '@/components/common/Header';
import { ProfileCardHandle } from '@/types/components';

const CardsScreen = () => {
    // Obtenemos los datos y funciones del store global
    const {
        profiles,
        likedProfiles,
        dislikedProfiles,
        superLikedProfiles,
        likeProfile,
        dislikeProfile,
        superLikeProfile,
    } = useStore();

    const { category } = useCategory();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Referencia para acceder a métodos de ProfileCard
    const profileCardRef = useRef<ProfileCardHandle>(null);

    // Filtramos perfiles que no han sido evaluados
    const availableProfiles = profiles.filter(
        (profile) =>
            !likedProfiles.includes(profile.id) &&
            !dislikedProfiles.includes(profile.id) &&
            !superLikedProfiles.includes(profile.id)
    );
    const currentProfile = availableProfiles[currentIndex];

    // Manejador de swipes en diferentes direcciones
    const handleSwipe = (direction: 'left' | 'right' | 'up') => {
        if (!currentProfile) return;
        if (direction === 'right') likeProfile(currentProfile.id);
        else if (direction === 'left') dislikeProfile(currentProfile.id);
        else if (direction === 'up') superLikeProfile(currentProfile.id);
        if (currentIndex < availableProfiles.length - 1) setCurrentIndex(currentIndex + 1);
    };

    if (!currentProfile) {
        return (
        <View style={styles.noMoreProfiles}>
            <Text>No more people to show</Text>
        </View>
        );
    }

    return (
        <LinearGradient
            colors={[category.colors.secondary, category.colors.primary]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.gradientContainer}
        >
            {/* Imagen de fondo */}
            <Image 
                source={require('@/assets/images/background.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.screenContainer}>
                    <Header />
                    {/* Componente de tarjeta de perfil con gestos */}
                    <ProfileCard
                        ref={profileCardRef}
                        profile={currentProfile}
                        onSwipe={handleSwipe}
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
        position: 'relative',
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: heightPercentageToDP(5)
    },
    screenContainer: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: widthPercentageToDP(7.5),
        rowGap: heightPercentageToDP(2)
    },
    backgroundImage: {
        position: 'absolute',
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        top: 0,
        left: 0,
        zIndex: 0,
    },
    noMoreProfiles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

export default CardsScreen;
