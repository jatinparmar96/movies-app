import axios from 'axios';
import { apiKey, baseUrl } from './config';

const baseUrl = baseUrl;

export const movie = (param) => {
  return axios.get(
    `${baseUrl}/movie/${param}?apiKey=${apiKey}`
  );
};
