import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RegularAnimationsScreen from '../screens/RegularAnimationsScreen';
import CicleAnimationScreen from '../screens/CicleAnimationScreen';
import EventsAnimationScreen from '../screens/EventsAnimationScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    RegularAnimationsScreen:undefined,
    CicleAnimationScreen:undefined,
    EventsAnimationScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Animations', headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: 'black' }, }}

            />

            <Stack.Screen
                name="RegularAnimationsScreen"
                component={RegularAnimationsScreen}
                options={{ title: 'Animations regulares', headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: 'black' }, }}

            />

            <Stack.Screen
                name="CicleAnimationScreen"
                component={CicleAnimationScreen}
                options={{ title: 'Cicle animations', headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: 'black' }, }}

            />

<Stack.Screen
                name="EventsAnimationScreen"
                component={EventsAnimationScreen}
                options={{ title: 'Events animations', headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: 'black' }, }}

            />

        </Stack.Navigator>
    );
};

export default StackNavigator