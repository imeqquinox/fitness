import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Button, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to Workout'
        onPress={() => navigation.navigate('Workout') }
      />
    </View>
  );
}

export default Home;