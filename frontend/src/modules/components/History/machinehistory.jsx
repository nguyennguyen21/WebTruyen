import React from 'react';

const MachineHistory = () => {
  return (
    <div>
    {/* Synced History Table */}
      <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Truyện từ tài khoản</h2>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center">
              <i className="fas fa-cog mr-2"></i> Cài đặt đồng bộ
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên truyện</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chương</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời gian</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiến độ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img src=" https://placehold.co/100/d1d5db/ffffff?text=TD" alt="Toàn chức cao thủ" className="h-10 w-10 rounded" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Toàn chức cao thủ</div>
                        <div className="text-sm text-gray-500">ebook</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Chương 215</div>
                    <div className="text-sm text-gray-500">Đã hoàn thành</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">2 ngày trước</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 mr-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">100%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Mở</button>
                    <button className="text-red-600 hover:text-red-900">Xóa</button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img src=" https://placehold.co/100/d1d5db/ffffff?text=TN" alt="Tiên nghịch" className="h-10 w-10 rounded" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Tiên nghịch</div>
                        <div className="text-sm text-gray-500">blogtuenhien.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Chương 125</div>
                    <div className="text-sm text-gray-500">Đang đọc</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">5 phút trước</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 mr-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">65%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Mở</button>
                    <button className="text-red-600 hover:text-red-900">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
  );
};

export default MachineHistory;