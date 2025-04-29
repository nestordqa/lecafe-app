import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, TouchableOpacity, StyleSheet, View, ScrollView, Text, Image, Dimensions } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { RouteProp, useRoute } from '@react-navigation/native'
import XIcon from '../components/icons/XIcon'
import DotsIcon from '../components/icons/DotsIcon'
import DownArrowButton from '../components/icons/DownArrowButton'
import colors from '@/config/colors'
import { InfoChip } from '../components/common/InfoChip'
import ActionButtons from '../components/common/ActionButtons'
import UpArrowButton from '@/components/icons/UpArrowButton'
import { RootStackParamList } from '@/types/app'

const screenHeight = Dimensions.get('window').height;

export default function BottomModal({
    navigation,
    onGoBackFunction
}: {
    navigation: any,
    onGoBackFunction?: () => void
}) {
    // Obtenemos los parámetros de la ruta
    const route = useRoute<RouteProp<RootStackParamList, 'InfoModal'>>();
    const { profile, onDislike, onLike, onSuperLike } = route.params;
    const [minimized, setMinimized] = useState(false);

    // Valores animados para controlar la transición
    const imageHeight = useRef(new Animated.Value(0)).current;
    const modalTranslateY = useRef(new Animated.Value(screenHeight)).current;

    // Tiempo de duración para todas las animaciones
    const animationDuration = 300;

    // Función para minimizar el modal
    const minimizeModal = () => {
        Animated.parallel([
            Animated.timing(imageHeight, {
                toValue: screenHeight * 0.92,
                duration: animationDuration,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(modalTranslateY, {
                toValue: screenHeight * 0.92,
                duration: animationDuration,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
        ]).start(() => setMinimized(true));
    };

    // Función para maximizar el modal
    const maximizeModal = () => {
        Animated.parallel([
            Animated.timing(imageHeight, {
                toValue: screenHeight * 0.5,
                duration: animationDuration,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(modalTranslateY, {
                toValue: screenHeight * 0.5,
                duration: animationDuration,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
        ]).start(() => setMinimized(false));
    };

    // Animación de entrada del modal
    const fadeIn = () => {
        Animated.parallel([
            Animated.timing(imageHeight, {
                toValue: screenHeight * 0.5,
                duration: animationDuration,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(modalTranslateY, {
                toValue: screenHeight * 0.5,
                duration: animationDuration,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
        ]).start();
    };

    // Animación de salida del modal
    const fadeOut = () => {
        Animated.parallel([
            Animated.timing(imageHeight, {
                toValue: 0,
                duration: animationDuration,
                useNativeDriver: false,
                easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(modalTranslateY, {
                toValue: screenHeight,
                duration: animationDuration,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
        ]).start(() => {
            // Ejecutamos la función de callback si existe
            onGoBackFunction && onGoBackFunction()
            if (navigation.canGoBack()) {
                navigation.goBack()
            }
        });
    };

    // Manejador de acciones (like, dislike, superlike)
    const handleAction = (action: string): any => {
        fadeOut();
        switch (action) {
            case 'onLike':
                onLike();
                break;
            case 'onDislike':
                onDislike();
                break;
            case 'onSuperLike':
                onSuperLike();
                break;
            default:
                break;
        }
    }

    // Iniciamos la animación al montar el componente
    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <>
        {/* Fondo semitransparente */}
        <TouchableOpacity activeOpacity={1} onPress={fadeOut} style={styles.overlay} />

        {/* Imagen ocupando la parte superior */}
        <Animated.View style={[styles.imageContainer, { height: imageHeight }]}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={fadeOut}>
                    <XIcon />
                </TouchableOpacity>

                <TouchableOpacity>
                    <DotsIcon />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: profile.photos[0] }} style={styles.image} resizeMode="cover" />
        </Animated.View>

        {/* Modal con información del perfil */}
        <Animated.View style={[styles.card, { transform: [{ translateY: modalTranslateY }] }]}>
            <TouchableOpacity style={styles.arrowContainer} onPress={minimized ? maximizeModal : minimizeModal}>
                {
                    minimized ?
                    <UpArrowButton width={75} height={75}/>
                    :
                    <DownArrowButton width={75} height={75}/>
                }
            </TouchableOpacity>
            <View style={[styles.header, {
                paddingVertical: minimized ? heightPercentageToDP(0): heightPercentageToDP(1)
            }]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{profile.name} {profile.lastname}, {profile.age}</Text>
                    <Text style={styles.subtitle}>{profile.city}, {profile.country}</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Intereses</Text>
                    <View style={styles.infoContainer}>
                        {
                            profile.hobbies.map((hobby, index) => <InfoChip text={hobby} key={`${hobby}-${index}`}/>)
                        }
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Me considero</Text>
                    <InfoChip text={profile.gender}/>
                </View>
                <View style={styles.actionsButton}>
                    <ActionButtons
                        onDislike={() => handleAction('onDislike')}
                        onLike={() => handleAction('onLike')}
                        onSuperLike={() => handleAction('onSuperLike')}
                    />
                </View>
            </ScrollView>
        </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#00000080',
        zIndex: 1,
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 2,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    card: {
        flex: 1,
        position: 'absolute',
        bottom: heightPercentageToDP(50),
        width: '100%',
        height: heightPercentageToDP(55),
        backgroundColor: 'white',
        borderTopLeftRadius: widthPercentageToDP(10),
        borderTopRightRadius: widthPercentageToDP(0),
        paddingVertical: heightPercentageToDP(6),
        paddingHorizontal: widthPercentageToDP(7.5),
        zIndex: 3,
    },
    arrowContainer: {
        position: 'absolute',
        top: heightPercentageToDP(-3.5),
        right: widthPercentageToDP(3.5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: widthPercentageToDP(4),
        elevation: widthPercentageToDP(4),
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    titleContainer: {
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.text
    },
    infoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: widthPercentageToDP(3),
        rowGap: heightPercentageToDP(1)
    },
    contentContainer: {
        flexGrow: 1,
        width: '100%',
        paddingTop: heightPercentageToDP(2),
        rowGap: heightPercentageToDP(5)
    },
    iconsContainer: {
        position: 'absolute',
        zIndex: 10000,
        top: heightPercentageToDP(6),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingHorizontal: widthPercentageToDP(7.5),
    },
    actionsButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
