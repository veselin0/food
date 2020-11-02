import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam('id');

  console.log(id);
  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
}

const style = StyleSheet.create({});
