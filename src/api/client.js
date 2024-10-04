import axios from 'axios';
import config from '../config/envConfig';

const { BACKEND_URL } = config;

export const apiClient = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true
});

export default apiClient;
