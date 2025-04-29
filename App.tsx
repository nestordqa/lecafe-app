import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import CardsScreen from '@/screens/CardsScreen';
import BottomModal from '@/screens/BottomModal';
import { Platform, StatusBar } from 'react-native';
import MatchModal from '@/screens/MatchModal';
import { RootStackParamList } from '@/types/app';

enableScreens(); // Optimiza el rendimiento de las pantallas

const Stack = createStackNavigator<RootStackParamList>();

const ModalsOptions = {
    headerShown: false,
    headerTransparent: Platform.OS === "android" ? false : true,
};

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar 
                backgroundColor="transparent"
                translucent={true}
            />
            <Stack.Navigator initialRouteName="Cards">
                {/* Pantalla principal */}
                <Stack.Screen
                    name="Cards"
                    component={CardsScreen}
                    options={{ headerShown: false }}
                />
                {/* Agrupa los modales */}
                <Stack.Group
                    screenOptions={{
                        presentation: "transparentModal",
                        animation: "fade",
                        animationTypeForReplace: "pop",
                        headerShown: false,
                    }}
                >
                    {/* Modal de información */}
                    <Stack.Screen 
                        options={ModalsOptions}
                        name={'InfoModal'} 
                        component={BottomModal} 
                    />
                    {/* Modal de match */}
                    <Stack.Screen 
                        options={ModalsOptions}
                        name={'MatchModal'} 
                        component={MatchModal} 
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
