import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.background}>
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
});
