import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev-burger-backend.vercel.app/',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:UserData');
  const token = userData && JSON.parse(userData).token;
  
  config.headers.authorization = `Bearer ${token}`

  return config
})
