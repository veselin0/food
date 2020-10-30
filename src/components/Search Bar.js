import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require('../imgs/magnifying-glass.png')}
        style={styles.img}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#d3d3d3',
    height: 60,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
  img: {
    width: 25,
    height: 25,
  },
});
