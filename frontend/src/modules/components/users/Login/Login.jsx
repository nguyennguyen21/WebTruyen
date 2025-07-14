import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaRegUser,
  FaPhoneAlt,
} from "react-icons/fa";

const Login = ({ isLogin: initialTab = true }) => {
  const [isLogin, setIsLogin] = useState(initialTab);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const phone = document.getElementById("register-phone").value;

    if (phone.length !== 10) {
      alert("Số điện thoại phải đúng 10 số");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Username: name,
          Email: email,
          Phone: phone,
          PassWords: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Đăng ký thành công");
      } else {
        alert(data.message || "Lỗi đăng ký");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-4">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
        {/* Tabs */}
        <div className="flex mb-6 justify-center space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-medium transition ${isLogin
                ? "bg-black text-white rounded-full"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-medium transition ${!isLogin
                ? "bg-black text-white rounded-full"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            Đăng Ký
          </button>
        </div>

        {/* Form Đăng Nhập */}
        <form className={`${!isLogin ? "hidden" : ""} space-y-5`}>
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="example@example.com"
              autoComplete="off"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-medium mb-1"
            >
              Mật khẩu
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black rounded-md"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 rounded focus:ring-black"
              />
              <span className="text-gray-600">Ghi nhớ</span>
            </label>
            <a href="#" className="text-gray-600 hover:text-black">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Đăng Nhập
          </button>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <SocialButton icon={<FaFacebookF className="text-blue-600" />} />
            <SocialButton icon={<FaGoogle className="text-red-500" />} />
            <SocialButton icon={<FaInstagram className="text-pink-500" />} />
          </div>
        </form>

        {/* Form Đăng Ký */}
        <form
          onSubmit={handleRegisterSubmit}
          className={`${isLogin ? "hidden" : ""} space-y-5`}
        >
          <div>
            <label
              htmlFor="register-name"
              className="block text-sm font-medium mb-1"
            >
              Họ và tên
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRegUser className="text-gray-400" />
              </div>
              <input
                id="register-name"
                type="text"
                autoComplete="off"
                placeholder="Nhập đầy đủ họ tên"
                className="pl-10 w-full border border-gray-300 focus:border-black rounded-md py-2 px-3"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              id="register-email"
              autoComplete="off"
              type="email"
              placeholder="example@example.com"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="block text-sm font-medium mb-1"
            >
              Mật khẩu
            </label>
            <input
              id="register-password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 focus:border-black rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="register-phone"
              className="block text-sm font-medium mb-1"
            >
              Số điện thoại
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhoneAlt className="text-gray-400" />
              </div>
              <input
                id="register-phone"
                type="tel"
                placeholder="xxxxxxxxxx"
                className="pl-10 w-full border border-gray-300 focus:border-black rounded-md py-2 px-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Đăng Ký
          </button>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <SocialButton icon={<FaFacebookF className="text-blue-600" />} />
            <SocialButton icon={<FaGoogle className="text-red-500" />} />
            <SocialButton icon={<FaInstagram className="text-pink-500" />} />
          </div>
        </form>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }) => (
  <button
    type="button"
    className="flex justify-center items-center border border-gray-300 rounded-full py-2 hover:bg-gray-50"
  >
    {icon}
  </button>
);

export default Login;
