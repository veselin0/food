import React from 'react';
import { View,Image,  Text, StyleSheet } from 'react-native';

export default function ResultsDetails({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
