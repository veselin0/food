import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/Search Bar';
import yelp from '../api/yelp';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
