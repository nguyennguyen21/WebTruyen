import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5193/api",
  timeout: 10000,
});

export const getTopManga = async (limit = 15) => {
  try {
    const response = await apiClient.get(`/manga/top?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tải truyện:", error.message);
    return [];
  }
};