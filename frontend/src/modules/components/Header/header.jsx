import { ROUTES } from "../../config/routes";
import React, { useState, useEffect } from "react";
import { updateMobileMenu } from "../../utils/HeaderUpdate";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBars,
  FaHome,
  FaHistory,
  FaListAlt,
  FaTrophy,
} from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) updateMobileMenu();
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ✅ Lấy tên người dùng từ localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserName(parsed.name || parsed.username || null);
      } catch {
        setUserName(null);
      }
    } else {
      setUserName(null);
    }
  }, []);



 const handleLogout = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("user");
   navigate("/"); // hoặc ROUTES.HOME nếu bạn đã định nghĩa sẵn
   window.location.reload(); // Tải lại trang để cập nhật giao diện
 };


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">LOGO</div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to={ROUTES.HOME}
            className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
          >
            <FaHome /> Trang chủ
          </Link>
          <a
            href="/"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
          >
            <RiUserFollowLine /> Theo dõi
          </a>
          <Link
            to={ROUTES.HISTORY}
            className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
          >
            <FaHistory /> Lịch sử
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-500">
              <FaListAlt /> Thể loại
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Thể loại 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Thể loại 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Thể loại 3
              </li>
            </ul>
          </div>
          <a
            href="/rank"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
          >
            <FaTrophy /> Xếp hạng
          </a>

          {/* Avatar & tên người dùng */}
          <div className="relative">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex items-center gap-2 focus:outline-none group"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold shadow-sm group-hover:scale-105 transition-transform duration-200">
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
              <span className="hidden sm:inline text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
                {userName || "Tài khoản"}
              </span>
            </button>

            {isSubMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden animate-fadeIn">
                <div className="py-2">
                  {userName ? (
                    <button
                      onClick={handleLogout}
                      className="flex w-full text-left items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                      <span className="p-1.5 rounded-full bg-red-100 text-red-600">
                        <FaUserCircle size={14} />
                      </span>
                      Đăng xuất
                    </button>
                  ) : (
                    <>
                      <Link
                        to={ROUTES.LOGIN}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="p-1.5 rounded-full bg-blue-100 text-blue-600">
                          <FaUserCircle size={14} />
                        </span>
                        Đăng nhập
                      </Link>
                      <Link
                        to={ROUTES.REGISTER}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        <span className="p-1.5 rounded-full bg-green-100 text-green-600">
                          <FaUserCircle size={14} />
                        </span>
                        Đăng ký
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
