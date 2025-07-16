import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5193/api',
  headers: {
    'Content-Type': 'application/json', // Cần có dòng này
  },
});
export const loginUser = async (data) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi đăng nhập');
  }
};

export const registerUser = async (data) => {
  try {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi đăng ký');
  }
};