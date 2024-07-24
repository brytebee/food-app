import {View, Text} from 'react-native';
import SearchBar from '../components/Search';
import {useState} from 'react';
import yelp from '../api/yelp';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchResult = async () => {
    setErrMessage('');
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong fetching businesses');
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchResult}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text>We found {results.length} results.</Text>
    </View>
  );
}
