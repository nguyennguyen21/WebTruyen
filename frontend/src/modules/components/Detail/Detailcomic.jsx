import React from 'react';

const DetailComic = () => {
  return (
    <div className="container mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 max-w-9xl">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Cover Image */}
        <div className="cover-image w-full md:w-1/3 lg:w-1/4 min-w-[300px] max-w-md mx-auto md:mx-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15b25bf9-2b36-46fd-b37d-60c909ac60b2.png "
            alt="Bìa truyện với phong cách nghệ thuật sống động, nhân vật chính đứng giữa cảnh quan hùng vĩ"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Info Section */}
        <div className="info-section mt-6 md:mt-0 md:pl-4 flex flex-col">
          <h1 className="story-title text-3xl md:text-4xl font-bold text-gray-800 mb-3">Tên Truyện</h1>
          <p className="author text-lg text-gray-600 mb-3">Tác giả: Tên Tác Giả</p>
          
          <span className="status inline-block px-3 py-1 bg-green-500 text-white rounded text-sm font-semibold w-fit mb-4">
            Đang tiến hành
          </span>

          {/* Rating */}
          <div className="rating flex items-center gap-2 mb-3">
            <div className="stars text-yellow-500 text-xl">★★★★★</div>
            <span className="rating-value font-semibold">5.0</span>
          </div>

          <p className="followers text-gray-600 mb-6">10,000 người theo dõi</p>

          {/* Buttons */}
          <div className="action-buttons flex flex-wrap gap-3 mt-auto">
            <button className="btn btn-follow px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition duration-300 min-w-[150px]">
              Theo dõi
            </button>
            <button className="btn btn-read px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition duration-300">
              Đọc mới nhất
            </button>
            <button className="btn btn-read px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition duration-300">
              Đọc từ đầu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComic;