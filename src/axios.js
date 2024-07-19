import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://socialmediadashboardbackend-tcg7.onrender.com',
});

export default instance;
