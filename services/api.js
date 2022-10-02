import axios from 'axios';
import { apiKey, baseUrl } from './config';

export const tmdbService = async (
  queryType,
  param,
  queryParams = ''
) => {
  const url = `${baseUrl}/${queryType}${
    param ? '/' + param : ''
  }?api_key=${apiKey}${
    queryParams ? '&query=' + queryParams : ''
  }`;
  console.log(url);
  const res = axios.get(url).catch(console.log);
  return res;
};
