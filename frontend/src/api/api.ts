import axios from 'axios';

// //Padrão backend real
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
// });

//Enquanto usa mock json
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

