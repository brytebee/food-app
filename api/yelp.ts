import axios from 'axios';
// @ts-ignore
import {REACT_APP_YELP_BASE_URL, REACT_APP_API_KEY} from '@env';

export default axios.create({
  baseURL: REACT_APP_YELP_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  },
});
