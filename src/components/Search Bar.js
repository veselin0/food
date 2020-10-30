import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.background}>
      <Image
        source={require('../imgs/magnifying-glass.png')}
        style={styles.img}
      />
      <Text>Search Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d3d3d3',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
  },
  img: {
    width: 25,
    height: 25,
  },
});
