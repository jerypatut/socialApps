import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const checkAuth = () => api.get('/auth/auth');

export const login = (credentials) => api.post('/auth/login', credentials);

export const register = (credentials) => api.post('/auth', credentials);

export const logout = () => api.delete('/auth/logout');
