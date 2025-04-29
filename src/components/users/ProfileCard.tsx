import React, { useImperativeHandle, forwardRef, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { UserProfile } from '@/types/common';
import CategorySelector from '../common/CategorySelector';
import ActionButtons from '../common/ActionButtons';
import useStore from '@/store/useStore';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import InfoButton from '../icons/InfoButton';
import CheckIcon from '../icons/CheckIcon';
import DislikeIcon from '../icons/DislikeIcon';
import SuperlikeIcon from '../icons/SuperlikeIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileCardHandle } from '@/types/components';

const ICON_SIZE = 70;
const springConfig = {
    damping: 15,
    stiffness: 90,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
};

// Componente que muestra perfiles y permite hacer swipe (like, dislike, superlike)
const ProfileCard = forwardRef<ProfileCardHandle, {
    onProfileChange?: (profile: UserProfile, index: number) => void;
    onSwipeProfile?: (profile: UserProfile, direction: 'left' | 'right' | 'up') => void;
}>(({ onProfileChange, onSwipeProfile }, ref) => {
    const { profiles, likedProfiles, dislikedProfiles, superLikedProfiles } = useStore();

    // Filtramos perfiles que no han sido swiped
    const availableProfiles = profiles.filter(
        (profile) =>
            !likedProfiles.includes(profile.id) &&
            !dislikedProfiles.includes(profile.id) &&
            !superLikedProfiles.includes(profile.id)
    );

    // Índice del perfil actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // Perfil que se muestra actualmente
    const currentProfile = availableProfiles[currentIndex] || null;

    // Estado para mostrar overlay de acción (like, dislike, superlike)
    const [overlayAction, setOverlayAction] = useState<null | 'like' | 'dislike' | 'superlike'>(null);

    // Valores animados para posición y rotación
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue(0);

    const navigation = useNavigation();

    // Resetea la posición y rotación de la card
    const resetPosition = () => {
        translateX.value = 0;
        translateY.value = 0;
        rotate.value = 0;
    };

    // Muestra overlay de acción y oculta después de 600ms
    // Llama a handleMatch si es like o superlike
    const showOverlay = (action: 'like' | 'dislike' | 'superlike') => {
        setOverlayAction(action);
        setTimeout(() => setOverlayAction(null), 600);
        if (action === 'like' || action === 'superlike') {
            handleMatch();
        }
    };

    // Cambia al siguiente perfil y notifica cambio si hay callback
    const goToNextProfile = useCallback(() => {
        setCurrentIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex < availableProfiles.length) {
                if (onProfileChange) onProfileChange(availableProfiles[nextIndex], nextIndex);
                return nextIndex;
            }
            return prev; // No avanza si no hay más perfiles
        });
        resetPosition();
    }, [availableProfiles, onProfileChange]);

    // Llama callback de swipe y avanza perfil
    const handleSwipe = (direction: 'left' | 'right' | 'up') => {
        if (onSwipeProfile && currentProfile) onSwipeProfile(currentProfile, direction);
        goToNextProfile();
    };

    // Swipe programático desde ref
    useImperativeHandle(ref, () => ({
        swipe: (direction: 'left' | 'right' | 'up') => {
            if (!currentProfile) return;
            if (direction === 'right') {
                showOverlay('like');
                translateX.value = withSpring(220, springConfig, () => {
                    runOnJS(handleSwipe)('right');
                });
                rotate.value = withSpring(10, springConfig);
            } else if (direction === 'left') {
                showOverlay('dislike');
                translateX.value = withSpring(-220, springConfig, () => {
                    runOnJS(handleSwipe)('left');
                });
                rotate.value = withSpring(-10, springConfig);
            } else if (direction === 'up') {
                showOverlay('superlike');
                translateY.value = withSpring(-220, springConfig, () => {
                    runOnJS(handleSwipe)('up');
                });
            }
        }
    }));

    // Maneja el gesto de swipe con animaciones y lógica de dirección
    const onGestureEvent = useCallback(
        (event: PanGestureHandlerGestureEvent) => {
            const { translationX, translationY, state } = event.nativeEvent;
            translateX.value = translationX;
            translateY.value = translationY;
            rotate.value = translationX * 0.03;

            if (state === 5) { // Gesture ended
                const absX = Math.abs(translationX);
                const absY = Math.abs(translationY);

                if (absX > 120 || absY > 120) {
                    if (absX > absY) {
                        if (translationX > 0) {
                            showOverlay('like');
                            translateX.value = withSpring(220, springConfig, () => {
                                runOnJS(handleSwipe)('right');
                            });
                            rotate.value = withSpring(10, springConfig);
                        } else {
                            showOverlay('dislike');
                            translateX.value = withSpring(-220, springConfig, () => {
                                runOnJS(handleSwipe)('left');
                            });
                            rotate.value = withSpring(-10, springConfig);
                        }
                    } else {
                        if (translationY < 0) {
                            showOverlay('superlike');
                            translateY.value = withSpring(-220, springConfig, () => {
                                runOnJS(handleSwipe)('up');
                            });
                        } else {
                            runOnJS(resetPosition)();
                        }
                    }
                } else {
                    runOnJS(resetPosition)();
                }
            }
        },
        [currentProfile]
    );

    // Swipe desde botones
    const handleButtonSwipe = (direction: 'left' | 'right' | 'up') => {
        if (!currentProfile) return;
        if (direction === 'right') {
            showOverlay('like');
            translateX.value = withSpring(220, springConfig, () => {
                runOnJS(handleSwipe)('right');
            });
            rotate.value = withSpring(10, springConfig);
        } else if (direction === 'left') {
            showOverlay('dislike');
            translateX.value = withSpring(-220, springConfig, () => {
                runOnJS(handleSwipe)('left');
            });
            rotate.value = withSpring(-10, springConfig);
        } else if (direction === 'up') {
            showOverlay('superlike');
            translateY.value = withSpring(-220, springConfig, () => {
                runOnJS(handleSwipe)('up');
            });
        }
    };

    // Estilo animado para la card
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { rotate: `${rotate.value}deg` },
        ],
    }));

    // Navega a pantalla de info del perfil
    const openInfo = () => {
        if (!currentProfile) return;
        // @ts-ignore
        navigation.navigate('InfoModal', {
            profile: currentProfile,
            onDislike: () => handleButtonSwipe('left'),
            onSuperLike: () => handleButtonSwipe('up'),
            onLike: () => handleButtonSwipe('right')
        });
    };

    // Muestra modal de match si es match
    const handleMatch = () => {
        if (!currentProfile) return;
        if (!currentProfile.isMatch) return;
        setTimeout(() => {
            // @ts-ignore
            navigation.navigate('MatchModal', {
                profile: currentProfile,
            });
        }, 1000);
    };

    // Renderiza icono según overlayAction
    const renderOverlayIcon = () => {
        if (overlayAction === 'like') {
            return <CheckIcon width={ICON_SIZE} height={ICON_SIZE} />;
        } else if (overlayAction === 'dislike') {
            return <DislikeIcon width={ICON_SIZE} height={ICON_SIZE} />;
        } else if (overlayAction === 'superlike') {
            return <SuperlikeIcon width={ICON_SIZE} height={ICON_SIZE} />;
        }
        return null;
    };

    // Si no hay perfiles, muestra mensaje
    if (!currentProfile) {
        return (
            <View style={[styles.card, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: 'white', fontSize: 22 }}>¡No hay más perfiles!</Text>
            </View>
        );
    }

    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.card, animatedStyle]}>
                <CategorySelector />
                <Image source={{ uri: currentProfile.photos[0] }} style={styles.cardImage} />

                {/* Gradiente para mejorar visibilidad del texto */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.85)']}
                    style={styles.gradient}
                />

                {/* Overlay visual de acción */}
                {overlayAction && (
                    <View style={styles.overlayContainer} pointerEvents="none">
                        <View style={styles.overlay}>
                            {renderOverlayIcon()}
                        </View>
                    </View>
                )}

                <View style={styles.cardOverlay}>
                    <View style={styles.infoContainer}>
                        <View style={styles.info}>
                            <Text style={styles.cardName}>{currentProfile.name} {currentProfile.lastname}, {currentProfile.age}</Text>
                            <Text style={styles.location}>{currentProfile.city}, {currentProfile.country}</Text>
                        </View>
                        <TouchableOpacity style={styles.infoButtonContainer} onPress={openInfo}>
                            <InfoButton width={70} height={70} />
                        </TouchableOpacity>
                    </View>
                    <ActionButtons
                        onDislike={() => handleButtonSwipe('left')}
                        onSuperLike={() => handleButtonSwipe('up')}
                        onLike={() => handleButtonSwipe('right')}
                    />
                </View>
            </Animated.View>
        </PanGestureHandler>
    );
});

const styles = StyleSheet.create({
    card: {
        borderRadius: widthPercentageToDP(7.5),
        overflow: 'hidden',
        justifyContent: 'flex-end',
        height: heightPercentageToDP(75),
        width: '100%',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    cardOverlay: {
        padding: 20,
        height: heightPercentageToDP(21),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {},
    infoButtonContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        right: 0,
        bottom: heightPercentageToDP(0.5),
    },
    cardName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    location: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        width: '100%',
        height: '100%',
        borderRadius: 24,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileCard;
