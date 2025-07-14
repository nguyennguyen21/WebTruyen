// SlideImageCM.jsx
import { useEffect, useState } from "react";

const SlideImageCM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Siêu Anh Hùng Thế Giới",
      chapter: "Tập 1: Nguồn gốc bí ẩn của Emerald Knight được khám phá khi anh đối mặt với kẻ thù nguy hiểm nhất.",
      tags: ["Hành động", "Siêu anh hùng", "Khoa học viễn tưởng"],
      image: "https://placehold.co/800x1200 ",
    },
    {
      title: "Vũ Điệu Kiếm Thuật",
      chapter: "Tập 3: Cuộc đối đầu định mệnh giữa Asuka và Midori, khi bí mật gia tộc cuối cùng cũng được hé lộ.",
      tags: ["Kiếm hiệp", "Trung cổ", "Drama"],
      image: "https://placehold.co/800x1200 ",
    },
    {
      title: "Huyền Thoại Đại Dương",
      chapter: "Tập 5: Hành trình tìm kiếm Atlantis dẫn đoàn thám hiểm vào mê cung ngầm đầy nguy hiểm.",
      tags: ["Phiêu lưu", "Thần thoại", "Kỳ ảo"],
      image: "https://placehold.co/800x1200 ",
    },
    {
      title: "Những Chú Đại Bàng",
      chapter: "Tập 2: Phi đội 99 phải đối mặt với nhiệm vụ bất khả thi khi bảo vệ căn cứ quan trọng.",
      tags: ["Lịch sử", "Chiến tranh", "Hành động"],
      image: "https://placehold.co/800x1200 ",
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-800 p-6 shadow-2xl mb-8 max-w-7xl mx-auto">
      {/* Slider container */}
      <div className="relative h-[500px]  overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
              <img
                src={slide.image}
                alt={`Bìa truyện ${slide.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-300">{slide.title}</h2>
              <p className="text-gray-300 mb-4">{slide.chapter}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {slide.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-900 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="self-start px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
                Đọc ngay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10 transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 z-10 transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-indigo-400 scale-125" : "bg-indigo-300"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlideImageCM;