import axios from 'axios';
import { apiKey, baseUrl } from './config';

export const tmdbService = async (queryType, param) => {
  const res = axios
    .get(
      `${baseUrl}/${queryType}/${param}?api_key=${apiKey}`
    )
    .catch(console.log);
  return res;
};
