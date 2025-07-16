import React, { useState } from 'react';

const BoolCM = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const stories = [
    {
      title: 'Tiên Nghịch',
      author: 'Nhĩ Căn',
      tag: 'Mới đăng',
      genre: ['Tiên hiệp', 'Dài kỳ'],
      date: '12/05/2023',
      chapters: 15,
      status: 'new',
    },
    {
      title: 'Bạch Ngọc Đường',
      author: 'Cổ Long',
      tag: 'Chờ sửa đổi',
      genre: ['Kiếm hiệp', 'Hoàn thành'],
      date: '08/05/2023',
      chapters: 42,
      status: 'revision',
    },
    {
      title: 'Tình Yêu Không Lời',
      author: 'Tiểu Cam',
      tag: 'Mới đăng',
      genre: ['Ngôn tình', 'Đang ra'],
      date: '15/05/2023',
      chapters: 8,
      status: 'new',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm rounded-lg mb-6">
        <div className="flex items-center">
          <img src="https://placehold.co/50x50 " alt="Logo" className="mr-3" />
          <h1 className="text-xl font-bold text-gray-800">Hệ thống kiểm duyệt truyện</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-gray-600">
            Xin chào, <span className="font-semibold">Người kiểm duyệt</span>
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Đăng xuất
          </button>
        </div>
      </header>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex">
            {['Chờ duyệt (24)', 'Đã duyệt', 'Từ chối', 'Thống kê'].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`py-4 px-4 ${
                  activeTab === i
                    ? 'text-blue-500 border-b-2 border-blue-500 font-semibold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Filter Section */}
        <div className="p-6 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Tất cả thể loại</option>
              <option>Tiên hiệp</option>
              <option>Kiếm hiệp</option>
              <option>Ngôn tình</option>
              <option>Đam mỹ</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2">
              <option>Tất cả trạng thái</option>
              <option>Mới đăng</option>
              <option>Chờ sửa đổi</option>
            </select>
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Tìm kiếm truyện..."
              className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Story List */}
        <div className="divide-y divide-gray-200">
          {stories.map((story, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 story-card">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <img
                    src="https://placehold.co/150x200 "
                    alt="Cover"
                    className="w-32 h-44 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{story.title}</h2>
                      <p className="text-gray-600">Tác giả: {story.author}</p>
                    </div>
                    <span
                      className={`${
                        story.status === 'new'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      } text-xs px-2 py-1 rounded-full`}
                    >
                      {story.tag}
                    </span>
                  </div>
                  <div className="mt-2">
                    {story.genre.map((g, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-gray-700 line-clamp-3">
                    Nội dung truyện... (có thể thêm dữ liệu đầy đủ sau)
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between">
                    <div className="text-sm text-gray-500 mb-2 md:mb-0">
                      <span className="mr-3">Đăng ngày: {story.date}</span>
                      <span>Chương: {story.chapters}</span>
                    </div>
                    <div>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-2">
                        Duyệt
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2">
                        Từ chối
                      </button>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
          <p className="text-sm text-gray-700">Hiển thị 1 đến 3 trong 24 truyện</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded">Trước</button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">Sau</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Kiểm duyệt: Tiên Nghịch</h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <p>Nội dung modal xem chi tiết truyện...</p>
              <div className="flex justify-end space-x-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Phê duyệt</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Từ chối</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoolCM;