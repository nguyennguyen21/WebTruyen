import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBars, FaHome, FaHistory, FaListAlt, FaTrophy, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Ctrl + K để mở ô tìm kiếm
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">LOGO</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaHome /> Trang chủ
          </a>
          <a href="/history" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaHistory /> Lịch sử
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
              <FaListAlt /> Thể loại
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Thể loại 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Thể loại 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Thể loại 3</li>
            </ul>
          </div>
          <a href="/rank" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaTrophy /> Xếp hạng
          </a>
          <button onClick={() => setShowSearch(true)} className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaSearch /> Tìm kiếm
          </button>

          {/* Avatar */}
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <FaUserCircle size={30} />
            </button>
            {isSubMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                <a href="/login" className="block px-4 py-2 hover:bg-gray-100">Đăng nhập</a>
                <a href="/register" className="block px-4 py-2 hover:bg-gray-100">Đăng ký</a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-3">
            <a href="/" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaHome /> Trang chủ
            </a>
            <a href="/history" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaHistory /> Lịch sử
            </a>
            <details className="group">
              <summary className="flex items-center gap-2 text-gray-700 list-none py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">
                <FaListAlt /> Thể loại
              </summary>
              <ul className="ml-6 mt-2 space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded">Thể loại 1</li>
                <li className="hover:bg-gray-100 p-2 rounded">Thể loại 2</li>
                <li className="hover:bg-gray-100 p-2 rounded">Thể loại 3</li>
              </ul>
            </details>
            <a href="/rank" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaTrophy /> Xếp hạng
            </a>
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaSearch /> Tìm kiếm
            </button>
            <a href="/login" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaUserCircle /> Đăng nhập
            </a>
            <a href="/register" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaUserCircle /> Đăng ký
            </a>
          </nav>
        </div>
      )}

      {/* Global Search Modal */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-2xl w-96 transition-transform transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center mb-4">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                autoFocus
                className="flex-grow p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="ml-2 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            <div className="text-sm text-gray-500 text-center">Nhấn ESC hoặc click ra ngoài để đóng</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;