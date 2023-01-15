import { StyleSheet, View, Text } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type LinkProps = {
  title: string;
}

function Navbar() {
  return (
    <View style={styles.container}>
      <Link title="Workout" />
    </View>
  );
}

function Link({ title }: LinkProps) {
  return (
    <View >
      <Text>{title}</Text>
    </View>
  )
}

export default Navbar;