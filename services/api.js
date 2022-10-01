import axios from 'axios';
import { apiKey, baseUrl } from './config';

export const movieService = async (param) => {
  const res = axios
    .get(`${baseUrl}/movie/${param}?api_key=${apiKey}`)
    .catch(console.log);
  return res;
};
