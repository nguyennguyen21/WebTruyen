// src/components/Search.jsx
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Bắt sự kiện Ctrl+K để focus vào ô tìm kiếm
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-input")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Tìm kiếm: ${searchQuery}`);
      // Thêm logic tìm kiếm thực tế tại đây
    }
  };

  return (
    <div className="relative w-full md:w-80 lg:w-105 2xl:w-110  max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className={`w-4 h-4 ${isFocused ? "text-white" : "text-gray-400"}`} />
          </div>
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Tìm kiếm truyện..."
            className="block w-full pl-10 pr-3 py-2 text-sm rounded-lg bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white transition duration-200 ease-in-out"
          />
        </div>
      </form>

      {/* Gợi ý hoặc thông báo nhỏ (có thể mở rộng) */}
      {isFocused && searchQuery === "" && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-2 text-xs text-gray-400 z-10">
          Dùng <span className="font-semibold text-white">Ctrl+K</span> để tìm nhanh
        </div>
      )}
    </div>
  );
};

export default Search;