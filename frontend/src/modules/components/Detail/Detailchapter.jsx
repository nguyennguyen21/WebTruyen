import React from 'react';


const DetailChapter = () => {
  const chapters = [
    { number: "Chương 1", title: "Khởi đầu của một chi vương", updated: "1 giờ trước" },
    { number: "Chương 2", title: "Xuyên việt đi - hệ thống thức tỉnh", updated: "2 giờ trước" },
    { number: "Chương 3", title: "Tiếp cận thế giới mới", updated: "5 giờ trước" },
    { number: "Chương 4", title: "Gặp gỡ nữ chính", updated: "Hôm qua" },
    { number: "Chương 5", title: "Chiến đấu đầu tiên", updated: "2 ngày trước" },
    { number: "Chương 6", title: "Bước ngoặt quan trọng", updated: "3 ngày trước" },
    { number: "Chương 7", title: "Âm mưu lộ diện", updated: "5 ngày trước" },
    { number: "Chương 8", title: "Tiến vào tông môn", updated: "1 tuần trước" },
    { number: "Chương 9", title: "Gặp phải cường địch", updated: "2 tuần trước" },
    { number: "Chương 10", title: "Bí kíp tuyệt thế", updated: "3 tuần trước" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Chapter List Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header of chapter list */}
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Danh Sách Chương</h2>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="overflow-y-auto max-h-[70vh] scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            {chapters.map((chapter, index) => (
              <div key={index} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{chapter.number}</span>
                  <a href="#" className="text-blue-600 text-sm">Đọc</a>
                </div>
                <div className="mt-1 text-sm text-gray-600 truncate">{chapter.title}</div>
                <div className="mt-1 text-xs text-gray-400">{chapter.updated}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="overflow-y-auto max-h-[70vh] scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chương
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tiêu đề
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cập nhật
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {chapters.map((chapter, index) => (
                  <tr key={index} className="hover:bg-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{chapter.number}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{chapter.updated}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">
                        Đọc
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex space-x-1">
              <button className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Trước
              </button>
              <span className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                1
              </span>
              <span className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500">
                ...
              </span>
              <button className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Tiếp
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Trang 1 / 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChapter;