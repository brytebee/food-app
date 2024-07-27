import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async searchTerm => {
    setErrMessage('');
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong fetching businesses');
    }
  };

  useEffect(() => {
    searchApi('washer');
  }, []);

  return [searchApi, errMessage, results];
};
