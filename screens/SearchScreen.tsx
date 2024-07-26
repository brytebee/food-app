import {View, Text} from 'react-native';
import SearchBar from '../components/Search';
import {useState} from 'react';
import useResults from '../hooks/useResults';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, errMessage, results] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        // @ts-ignore
        onTermSubmit={() => searchApi(term)}
      />
      {/* @ts-ignore */}
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text>We found {results.length} results.</Text>
    </View>
  );
}
