import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';
import { StackParamList } from '../App';

type HomeProps = NativeStackNavigationProp<StackParamList, 'Home'>;

function Home() {
  const navigation = useNavigation<HomeProps>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-red-500'>Home Screen</Text>
      <Button 
        title='Go to Workout'
        onPress={() => navigation.navigate('Workout') }
      />
    </View>
  );
}

export default Home;