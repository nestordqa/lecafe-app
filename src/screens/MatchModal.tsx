import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, TouchableOpacity, StyleSheet, View, Text, Image, Dimensions, TextInput } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import useStore from '@/store/useStore';
import HeartIcon from '@/components/icons/HeartIcon';
import { CategoryType } from '@/types/common';
import colors from '@/config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '@/types/app';

const screenHeight = Dimensions.get('window').height;

export default function MatchModal({
    navigation,
    onGoBackFunction
}: {
    navigation: any,
    onGoBackFunction?: () => void
}) {
    // Estado para el texto del input
    const [value, setValue] = useState('');
    const route = useRoute<RouteProp<RootStackParamList, 'MatchModal'>>();
    const { currentCategory } = useStore();
    const { profile } = route.params;

    // Valores animados para transiciones
    const imageHeight = useRef(new Animated.Value(0)).current;
    const modalTranslateY = useRef(new Animated.Value(screenHeight)).current;

    // Duración estándar para animaciones
    const animationDuration = 300;

    // Animación de entrada
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

    // Animación de salida
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
            onGoBackFunction && onGoBackFunction()
                if (navigation.canGoBack()) {
                    navigation.goBack()
                }
        });
    };

    // Determina la palabra según la categoría
    const handleWord = (category: CategoryType): string => {
        if (category === 'dating') return 'cita';
        if (category === 'friendship') return 'amistad';
        return 'relación';
    }

    // Navegación de regreso a pantalla principal
    const onReturn = () => {
        navigation.navigate('Cards');
    }

    // Iniciar animación al montar
    useEffect(() => {
        fadeIn()
    }, [])

    return (
        <>
            {/* Contenedor principal con imagen de fondo */}
            <Animated.View style={styles.imageContainer}>
                <Image source={{ uri: profile.photos[0] }} style={styles.image} resizeMode="cover" />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={styles.gradient}
                />
                <View style={styles.cardContainer}>
                    <View style={styles.infoContainer}>
                        <HeartIcon />
                        <View style={styles.textContainer}>
                            <Text style={styles.new}>New</Text>
                            <Text style={styles.match}>MATCH!</Text>
                            <Text style={styles.too}>{`¡También le gustas a ${profile.name}!`}</Text>
                            <Text style={styles.closer}>{`Estás más cerca de tener una ${handleWord(currentCategory)}`}</Text>
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}
                                placeholder="Dile algo agradable"
                                placeholderTextColor="#888"
                                value={value}
                                onChangeText={setValue}
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity style={styles.button} onPress={() => console.log('Enviando...')}>
                                <Text style={styles.buttonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={onReturn}>
                            <Text style={styles.too}>Regresar a Lecafé</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </>
  )
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    imageContainer: {
        position: 'absolute',
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        top: 0,
        left: 0,
        zIndex: 0,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    cardContainer: {
        position: 'absolute',
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        top: 0,
        left: 0,
        zIndex: 100,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    infoContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: heightPercentageToDP(50),
        paddingBottom: heightPercentageToDP(5),
    },
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: heightPercentageToDP(1)
    },
    new: {
        fontWeight: '700',
        color: 'white',
        fontSize: widthPercentageToDP(8.5)
    },
    match: {
        fontWeight: '700',
        color: 'white',
        fontSize: widthPercentageToDP(15)
    },
    too: {
        fontWeight: '700',
        color: 'white',
        fontSize: widthPercentageToDP(4)
    },
    closer: {
        fontWeight: '400',
        color: 'white',
        fontSize: widthPercentageToDP(4)
    },
    container: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 999,
        alignItems: 'center',
        paddingHorizontal: widthPercentageToDP(10),
        paddingVertical: heightPercentageToDP(1.5),
      },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: '#222',
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 0,
    },
    button: {
        backgroundColor: 'transparent',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
    },
    buttonText: {
        color: colors.relationshipGradiantSecondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
})
