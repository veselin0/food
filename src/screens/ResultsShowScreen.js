import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, [id]);
  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
}

const style = StyleSheet.create({});
