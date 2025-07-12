import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div id="particles" className="footer-particles absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      <div className="footer-wave absolute bottom-0 left-0 w-full h-24 bg-repeat-x bg-[url(' https://storage.googleapis.com/site-assets/wave.png ')] animate-[wave_8s_linear_infinite] transform translate-y-full"></div>

      <div className="footer-container max-w-6xl mx-auto px-4 py-12">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="footer-about scroll-animate">
            <div className="footer-logo mb-6">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26e3a213-1a97-4c54-9328-0685ecbff060.png " alt="Logo" className="mb-4" />
              <p className="text-gray-300">Chúng tôi cam kết mang lại những sản phẩm và dịch vụ chất lượng cao cho khách hàng.</p>
            </div>
            <div className="social-links flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 transition-all duration-300">
                <i className="fab fa-youtube text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-container scroll-animate" style={{ transitionDelay: "0.1s" }}>
            <h3 className="footer-heading text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-1 after:bg-blue-400 after:rounded-full after:animate-pulse">
              Liên kết nhanh
            </h3>
            <ul className="footer-links list-none p-0 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Trang chủ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Dịch vụ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Sản phẩm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Tin tức</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links-container scroll-animate" style={{ transitionDelay: "0.2s" }}>
            <h3 className="footer-heading text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-1 after:bg-blue-400 after:rounded-full after:animate-pulse">
              Hỗ trợ
            </h3>
            <ul className="footer-links list-none p-0 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Chính sách hoàn tiền</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 relative group">Hướng dẫn sử dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact scroll-animate" style={{ transitionDelay: "0.3s" }}>
            <h3 className="footer-heading text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-1 after:bg-blue-400 after:rounded-full after:animate-pulse">
              Liên hệ
            </h3>
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <i className="fas fa-map-marker-alt"></i> Số 123, Đường ABC, Quận XYZ, TP.HCM
            </p>
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <i className="fas fa-phone-alt"></i> +84 123 456 789
            </p>
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <i className="fas fa-envelope"></i> info@example.com
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <i className="fas fa-clock"></i> Thứ 2 - Thứ 6: 8:00 - 17:00
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 scroll-animate" style={{ transitionDelay: "0.4s" }}>
          <p>© 2023 Tên Công Ty. Bảo lưu mọi quyền.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { background-position-x: 0; }
          100% { background-position-x: 1000px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;