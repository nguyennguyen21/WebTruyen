import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaHome, FaHistory, FaListAlt, FaTrophy, FaSearch } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  // Ctrl + K để mở ô tìm kiếm
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        
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
          <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaHome /> Trang chủ
          </Link>
          <a href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <RiUserFollowLine /> Theo dõi
          </a>
          <Link to="/Home/History" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <FaHistory /> Lịch sử
          </Link>
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
         

        {/* Avatar hiện đại */}
<div className="relative">
  <button
    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
    className="flex items-center gap-2 focus:outline-none group"
  >
    {/* Avatar hình tròn với hover scale nhẹ */}
    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold shadow-sm group-hover:scale-105 transition-transform duration-200">
      U
    </div>
    <span className="hidden sm:inline text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
      Tài khoản
    </span>
  </button>

  {/* Dropdown menu với hiệu ứng animate */}
  {isSubMenuOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden animate-fadeIn">
      <div className="py-2">
        <Link
          to="Home/Login/SignIn"
          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <span className="p-1.5 rounded-full bg-blue-100 text-blue-600">
            <FaUserCircle size={14} />
          </span>
          Đăng nhập
        </Link>
        <Link 
        to="Home/Login/SignUp"
          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
        >
          <span className="p-1.5 rounded-full bg-green-100 text-green-600">
            <FaUserCircle size={14} />
          </span>
          Đăng ký
        </Link>
      </div>
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
           
            <a href="/login" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaUserCircle /> Đăng nhập
            </a>
            <a href="/register" className="flex items-center gap-2 text-gray-700 py-2 px-3 rounded hover:bg-gray-100">
              <FaUserCircle /> Đăng ký
            </a>
          </nav>
        </div>
      )}

      
    </header>
  );
};

export default Header;