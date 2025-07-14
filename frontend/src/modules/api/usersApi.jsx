// src/api/usersApi.js
import apiClient from './index';

const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

const getUserById = async (id) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

export { getUsers, getUserById };