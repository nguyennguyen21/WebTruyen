import axios from "axios";

// Tạo một Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:5193/api", // ✅ sửa lại nếu backend cổng khác
  headers: {
    "Content-Type": "application/json",
  },
});
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ------------------- API CALLS -------------------

export const registerUser = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Lỗi đăng ký");
  }
};

export const loginUser = async (data) => {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Lỗi đăng nhập");
  }
};

// ✅ Google Login (dùng credential từ Google)
export const loginWithGoogle = async (credential) => {
  try {
    const response = await apiClient.post("/auth/google-login", { credential });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Lỗi đăng nhập Google");
  }
};
