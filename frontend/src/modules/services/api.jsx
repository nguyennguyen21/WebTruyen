// src/services/api.js
import axios from 'axios';

// Khởi tạo Axios instance với baseURL
const api = axios.create({
  baseURL: 'https://localhost:7071/api',
});

// Thêm interceptor để xử lý token nếu cần
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Giả sử token được lưu trong localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;