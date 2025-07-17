import React from 'react';

const Fooster = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo và Giới thiệu */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33b00eb1-44cd-43c2-8705-c78b6f088f3b.png "
                alt="Logo công ty với nền gradient xanh dương"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-100">
                YourBrand
              </span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Cung cấp giải pháp công nghệ tiên tiến với chất lượng hàng đầu. Đồng hành cùng sự phát triển của bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon text-gray-200 hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white transition-all transform hover:-translate-y-1">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Liên Kết Nhanh</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Bảng Giá
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Dịch Vụ</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Thiết Kế Web
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Phát Triển Ứng Dụng
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Tư Vấn CNTT
                </a>
              </li>
              <li>
                <a href="#" className="footer-link flex items-center text-blue-100 hover:text-white transition-all transform hover:translate-x-1">
                  <span className="mr-2">→</span> Hosting & Domain
                </a>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-200"></i>
                <span className="text-blue-100">123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-200"></i>
                <span className="text-blue-100">+84 123 456 789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-200"></i>
                <span className="text-blue-100">contact@yourbrand.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-blue-200"></i>
                <span className="text-blue-100">Thứ 2 - Thứ 6: 8:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 mb-12">
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Đăng Ký Nhận Tin</h3>
              <p className="text-blue-100 mb-6">Nhận thông tin mới nhất và ưu đãi đặc biệt qua email</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-black placeholder-blue-200 outline-none transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Đăng Ký
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-blue-300 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2023 YourBrand. Bảo lưu mọi quyền.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm">Điều Khoản</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Bảo Mật</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fooster;