import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenuTopics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

  // Hàm chuyển đổi chuỗi thành slug
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // loại bỏ dấu thanh
      .replace(/[^a-z0-9\s-]/g, "")     // chỉ giữ chữ cái, số, khoảng trắng và gạch ngang
      .replace(/\s+/g, "-")             // thay khoảng trắng bằng -
      .replace(/-+/g, "-")              // không có nhiều gạch liên tiếp
      .replace(/^-+|-+$/g, "");         // xóa gạch đầu/cuối
  };

  // Lấy dữ liệu từ API khi component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/topics")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch topics");
        return res.json();
      })
      .then((data) => {
        // Kiểm tra data có phải là mảng
        if (!Array.isArray(data)) {
          console.error("Invalid data format from API:", data);
          setError("Invalid data format received.");
          setLoading(false);
          return;
        }

        // Định dạng lại dữ liệu phù hợp với UI
        const formattedTopics = data.map((topic) => ({
          ...topic,
          subtopics: 0,
          date: new Date().toLocaleDateString(),
          colorClass:
            topic.category?.toLowerCase() === "technology"
              ? "bg-blue-100 text-blue-800"
              : topic.category?.toLowerCase() === "science"
              ? "bg-green-100 text-green-800"
              : topic.category?.toLowerCase() === "business"
              ? "bg-purple-100 text-purple-800"
              : topic.category?.toLowerCase() === "art"
              ? "bg-pink-100 text-pink-800"
              : "bg-gray-100 text-gray-800",
        }));
        setTopics(formattedTopics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", category: "", description: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra đầu vào
    if (!formData.name.trim() || !formData.category.trim() || !formData.description.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const payload = {
      id: slugify(formData.name), // ←←← Thêm id dựa trên name
      name: formData.name.trim(),
      category: formData.category.trim(),
      description: formData.description.trim()
    };

    try {
      const res = await fetch("http://localhost:5000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Thêm chủ đề thất bại");
      }

      const createdTopic = await res.json();

      // Thêm các trường phụ trợ cho UI
      const newTopic = {
        ...createdTopic.topic,
        id: slugify(createdTopic.topic.name), // Tạo id dựa trên tên
        subtopics: 0,
        date: new Date().toLocaleDateString(),
        colorClass:
          createdTopic.topic.category?.toLowerCase() === "technology"
            ? "bg-blue-100 text-blue-800"
            : createdTopic.topic.category?.toLowerCase() === "science"
            ? "bg-green-100 text-green-800"
            : createdTopic.topic.category?.toLowerCase() === "business"
            ? "bg-purple-100 text-purple-800"
            : createdTopic.topic.category?.toLowerCase() === "art"
            ? "bg-pink-100 text-pink-800"
            : "bg-gray-100 text-gray-800",
      };

      // Cập nhật danh sách topic từ server
      setTopics((prev) => [...prev, newTopic]);
      closeModal();
      alert("Thêm chủ đề thành công!");
    } catch (err) {
      console.error(err);
      alert("Lỗi khi thêm chủ đề. Vui lòng thử lại sau.");
    }
  };

  const filteredTopics = topics.filter((topic) =>
    topic.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="text-center py-10">Đang tải dữ liệu chủ đề...</div>
    );
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Lỗi tải dữ liệu: {error}
      </div>
    );

  return (
    <div className="container mx-auto mt-20 px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-800">Quản Lý Chủ Đề</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm chủ đề..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-blue-500 text-gray-700 w-48 md:w-64 transition-all duration-300"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          {/* Add New Topic Button */}
          <button
            onClick={openModal}
            className="add-topic-btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center shadow transition-transform duration-300 transform hover:scale-105"
          >
            <i className="fas fa-plus mr-2"></i>
            <span>Thêm Chủ Đề</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Topics List Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Tất Cả Chủ Đề</h2>
            <span className="text-sm text-gray-500">
              Hiển thị {filteredTopics.length} chủ đề
            </span>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Render Topics */}
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="topic-card bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center mb-3">
                    <div
                      className={`text-xs font-semibold px-3 py-1 rounded-full mr-2 ${topic.colorClass}`}
                    >
                      {topic.category || "Không xác định"}
                    </div>
                    <span className="text-xs text-gray-500">
                      Tạo ngày: {topic.date}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
                <Link
                  to={`/vocabulary/${topic.id}`}
                  className="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {topic.name}
                </Link>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {topic.subtopics} Chủ đề con
                  </span>
                  <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                    Chi tiết{" "}
                    <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State for Adding New Topic */}
          <div
            onClick={openModal}
            className="topic-card bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden flex items-center justify-center min-h-[200px] hover:bg-gray-100 transition-all duration-300 cursor-pointer"
          >
            <div className="text-center p-6">
              <i className="fas fa-plus-circle text-4xl text-gray-400 mb-3"></i>
              <h3 className="text-lg font-medium text-gray-700">Thêm Chủ Đề Mới</h3>
              <p className="text-sm text-gray-500 mt-1">
                Nhấp để tạo một chủ đề mới
              </p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Hiển thị từ 1 đến {filteredTopics.length} trong tổng số{" "}
            {topics.length} chủ đề
          </span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="px-3 py-1 rounded border border-blue-500 bg-blue-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Thêm Chủ Đề Mới
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="topicName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tên Chủ Đề
                </label>
                <input
                  type="text"
                  id="topicName"
                  name="name"
                  placeholder="Nhập tên chủ đề"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="topicCategory"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Danh Mục
                </label>
                <select
                  id="topicCategory"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Chọn danh mục</option>
                  <option value="Technology">Công Nghệ</option>
                  <option value="Science">Khoa Học</option>
                  <option value="Business">Kinh Doanh</option>
                  <option value="Art">Nghệ Thuật & Thiết Kế</option>
                  <option value="Other">Khác</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="topicDescription"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mô Tả
                </label>
                <textarea
                  id="topicDescription"
                  name="description"
                  rows="3"
                  placeholder="Nhập mô tả cho chủ đề"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Thêm Chủ Đề
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuTopics;