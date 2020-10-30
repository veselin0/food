import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function SearchBar() {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 16,
    backgroundColor: '#d3d3d3',
    height: 60,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 22,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 16,
  },
});
