import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // <-- Replace with actual base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Setup request/response interceptors
api.interceptors.request.use(
  (config) => {
    // Example: attach token if available
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error);
    return Promise.reject(error);
  }
);

export default api;
