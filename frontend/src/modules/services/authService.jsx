// src/services/authService.js
import api from './api';

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    return response.data; // Trả về dữ liệu phản hồi từ server
  } catch (error) {
    throw error.response.data; // Xử lý lỗi từ server
  }
};

export const register = async (data) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};