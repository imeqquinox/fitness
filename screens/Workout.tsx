import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';
import { StackParamList } from '../App';

type WorkoutProps = NativeStackNavigationProp<StackParamList, 'Home'>;

function Workout() {
  const navigation = useNavigation<WorkoutProps>();

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-blue-500'>Workout Screen</Text>
      <Button 
        title='Go to Home'
        onPress={() => navigation.navigate('Home') }
      />
    </View>
  );
}

export default Workout;