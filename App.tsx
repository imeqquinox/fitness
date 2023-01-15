import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Workout from './screens/Workout';

export type StackParamList = {
  Home: undefined, 
  Workout: undefined,
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Workout' component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
