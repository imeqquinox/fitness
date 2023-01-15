import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Button, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

function Workout() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Workout Screen</Text>
      <Button 
        title='Go to Home'
        onPress={() => navigation.navigate('Home') }
      />
    </View>
  );
}

export default Workout;