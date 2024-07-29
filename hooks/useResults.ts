// hooks/useResults.ts
import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

type Business = {
  id: string;
  name: string;
  price: string;
  // Add more fields as needed
};

type UseResults = [(searchTerm: string) => Promise<void>, string, Business[]];

const useResults = (): UseResults => {
  const [results, setResults] = useState<Business[]>([]);
  const [errMessage, setErrMessage] = useState<string>('');

  const searchApi = async (searchTerm: string) => {
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
    searchApi('pasta');
  }, []);

  return [searchApi, errMessage, results];
};

export default useResults;
