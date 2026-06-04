import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:UserData');
  const token = userData && JSON.parse(userData).token;
  
  if (token) config.headers.authorization = `Bearer ${token}`

  return config
})
