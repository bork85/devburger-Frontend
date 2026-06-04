import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
});

const fixUrl = (value, baseURL) => {
  if (typeof value === 'string' && value.includes('localhost'))
    return value.replace(/http:\/\/localhost:\d+/, baseURL);
  return value;
};

const replaceUrls = (obj, baseURL) => {
  if (Array.isArray(obj)) return obj.map((item) => replaceUrls(item, baseURL));
  if (obj && typeof obj === 'object')
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, replaceUrls(v, baseURL)]));
  return fixUrl(obj, baseURL);
};

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:UserData');
  const token = userData && JSON.parse(userData).token;
  
  if (token) config.headers.authorization = `Bearer ${token}`

  return config
})

api.interceptors.response.use((response) => {
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  response.data = replaceUrls(response.data, baseURL);
  return response;
})
