// screens/SearchScreen.tsx
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import SearchBar from '../components/Search';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen: React.FC<Props> = () => {
  const [term, setTerm] = useState<string>('');
  const [searchApi, errMessage, results] = useResults();

  const filterResultByPrice = (price: string) => {
    return results.filter((res: any) => res.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
