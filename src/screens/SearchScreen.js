import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/Search Bar';


export default function SearchScreen() {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
