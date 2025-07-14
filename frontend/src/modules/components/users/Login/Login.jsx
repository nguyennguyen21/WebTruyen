import React, { useState } from 'react';

import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaRegUser,
  FaPhoneAlt,
  FaCalendarDay,
  FaVenusMars,
} from 'react-icons/fa';

const Login = ({ isLogin: initialTab = true }) => {
  const [isLogin, setIsLogin] = useState(initialTab);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-4">
      {/* Container */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
        {/* Toggle Buttons */}
        <div className="flex mb-6 justify-center space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-medium transition ${
              isLogin
                ? 'bg-black text-white rounded-full'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-medium transition ${
              !isLogin
                ? 'bg-black text-white rounded-full'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Đăng Ký
          </button>
        </div>

        {/* Form đăng nhập */}
        <form className={`${!isLogin ? 'hidden' : ''} space-y-5`}>
          {/* Email */}
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 rounded-md"
            />
          </div>

          {/* Mật khẩu */}
          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 rounded-md"
            />
          </div>

          {/* Ghi nhớ & Quên mật khẩu */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 mr-2 rounded focus:ring-black" />
              <span className="text-gray-600">Ghi nhớ</span>
            </label>
            <a href="#" className="text-gray-600 hover:text-black">Quên mật khẩu?</a>
          </div>

          {/* Nút đăng nhập */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Đăng Nhập
          </button>

          {/* Liên kết tài khoản */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaFacebookF className="h-4 w-4 text-blue-600" />
            </button>
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaGoogle className="h-4 w-4 text-red-500" />
            </button>
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaInstagram className="h-4 w-4 text-pink-500" />
            </button>
          </div>
        </form>

        {/* Form đăng ký */}
        <form className={`${isLogin ? 'hidden' : ''} space-y-5`}>
          {/* Họ tên */}
          <div>
            <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRegUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="register-name"
                type="text"
                placeholder="Nhập đầy đủ họ tên"
                className="pl-10 w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md py-2 px-3"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="register-email"
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 rounded-md"
            />
          </div>

          {/* Mật khẩu */}
          <div>
            <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              id="register-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:ring-0 rounded-md"
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhoneAlt className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="register-phone"
                type="tel"
                placeholder="xxxxxxxxxx"
                className="pl-10 w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md py-2 px-3"
              />
            </div>
          </div>

          {/* Ngày sinh */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
            <div className="grid grid-cols-3 gap-2">
              <select className="border border-gray-300 rounded-md py-2 px-3">
                <option>Ngày</option>
                {[...Array(31).keys()].map((d) => (
                  <option key={d + 1} value={d + 1}>{d + 1}</option>
                ))}
              </select>
              <select className="border border-gray-300 rounded-md py-2 px-3">
                <option>Tháng</option>
                {[...Array(12).keys()].map((m) => (
                  <option key={m + 1} value={m + 1}>{m + 1}</option>
                ))}
              </select>
              <select className="border border-gray-300 rounded-md py-2 px-3">
                <option>Năm</option>
                {Array.from({ length: 100 }, (_, i) =>
                  new Date().getFullYear() - i
                ).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Giới tính */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="gender" className="mr-2" />
                <span>Nam</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="gender" className="mr-2" />
                <span>Nữ</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="gender" className="mr-2" />
                <span>Khác</span>
              </label>
            </div>
          </div>

          {/* Checkbox đồng ý điều khoản */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="agree"
              className="h-4 w-4 mr-2 border-gray-300 focus:ring-black"
            />
            <label htmlFor="agree" className="text-gray-600">
              Tôi đồng ý với điều khoản sử dụng
            </label>
          </div>

          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Đăng Ký
          </button>

          {/* Liên kết mạng xã hội */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaFacebookF className="h-4 w-4 text-blue-600" />
            </button>
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaGoogle className="h-4 w-4 text-red-500" />
            </button>
            <button
              type="button"
              className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
            >
              <FaInstagram className="h-4 w-4 text-pink-500" />
            </button>
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default Login;