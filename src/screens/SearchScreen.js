import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/Search Bar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen({ navigation }) {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
