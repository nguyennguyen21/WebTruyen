import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, loginWithGoogle } from "../../../api/authApi";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaRegUser,
  FaPhoneAlt,
} from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";

const Login = ({ isLogin: initialTab = true }) => {
  const [isLogin, setIsLogin] = useState(initialTab);
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = registerData;
    if (!name || !email || !phone || !password) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert("Số điện thoại phải đúng 10 số");
      return;
    }
    setIsLoading(true);
    try {
      await registerUser({
        Username: name,
        Email: email,
        Phone: phone,
        PassWords: password,
        Roles: "user",
      });
      alert("Đăng ký thành công!");
      setRegisterData({ name: "", email: "", phone: "", password: "" });
      setIsLogin(true);
    } catch (err) {
      alert(err?.response?.data?.message || "Lỗi đăng ký");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    setIsLoading(true);
    try {
      const data = await loginUser({
        Email: email,
        PassWords: password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.user.name || data.user.username || "Người dùng",
        })
      );
      alert("Đăng nhập thành công!");
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(err?.response?.data?.message || "Lỗi đăng nhập");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Đăng xuất thành công");
    navigate("/");
    window.location.reload();
  };

  // ✅ Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const profile = await res.json();

        const data = await loginWithGoogle({
          Email: profile.email,
          Name: profile.name,
        });

        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.user.name || data.user.username || "Người dùng",
          })
        );
        alert("Đăng nhập Google thành công!");
        navigate("/");
        window.location.reload();
      } catch (error) {
        console.error(error);
        alert("Đăng nhập Google thất bại");
      }
    },
    onError: () => alert("Đăng nhập Google thất bại"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-4">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
        <div className="flex mb-6 justify-center space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-medium transition ${
              isLogin
                ? "bg-black text-white rounded-full"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-medium transition ${
              !isLogin
                ? "bg-black text-white rounded-full"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Đăng Ký
          </button>
        </div>

        {/* Đăng Nhập */}
        <form
          onSubmit={handleLoginSubmit}
          className={`${!isLogin ? "hidden" : ""} space-y-5`}
        >
          <input
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-black text-white rounded-md"
          >
            {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
          </button>
          <div className="flex justify-center mt-4 space-x-3">
            <SocialButton icon={<FaFacebookF className="text-blue-600" />} />
            <SocialButton
              icon={<FaGoogle className="text-red-500" />}
              onClick={googleLogin}
            />
            <SocialButton icon={<FaInstagram className="text-pink-500" />} />
          </div>
        </form>

        {/* Đăng Ký */}
        <form
          onSubmit={handleRegisterSubmit}
          className={`${isLogin ? "hidden" : ""} space-y-5`}
        >
          <div className="relative">
            <FaRegUser className="absolute left-3 top-3 text-gray-400" />
            <input
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              placeholder="Họ và tên"
              className="pl-10 w-full py-2 border rounded-md"
            />
          </div>
          <input
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              name="phone"
              value={registerData.phone}
              onChange={handleRegisterChange}
              type="tel"
              placeholder="Số điện thoại"
              className="pl-10 w-full py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-black text-white rounded-md"
          >
            {isLoading ? "Đang xử lý..." : "Đăng Ký"}
          </button>
          <div className="flex justify-center mt-4 space-x-3">
            <SocialButton icon={<FaFacebookF className="text-blue-600" />} />
            <SocialButton
              icon={<FaGoogle className="text-red-500" />}
              onClick={googleLogin}
            />
            <SocialButton icon={<FaInstagram className="text-pink-500" />} />
          </div>
        </form>

        {/* Đăng xuất (nếu đang đăng nhập) */}
        {localStorage.getItem("token") && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline text-sm"
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const SocialButton = ({ icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex justify-center items-center border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50"
  >
    {icon}
  </button>
);

export default Login;
