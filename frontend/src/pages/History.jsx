import React from 'react';
import MachineHistory from "../modules/components/History/machinehistory";
import HistoryCMAccount from "../modules/components/History/Historybyaccount";

const History = () => {
  // Giả sử bạn dùng token trong localStorage để xác định đã đăng nhập
  const isAuthenticated = !!localStorage.getItem('token'); 

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Lịch sử đọc truyện</h1>

          {/* Search + Buttons */}
          <div className="flex flex-wrap items-center mt-4 gap-4">
            <div className="relative w-full sm:w-64 md:w-80">
              <input
                type="text"
                placeholder="Tìm kiếm trong lịch sử..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
                <i className="fas fa-sync-alt mr-2"></i> Đồng bộ
              </button>
              <div>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex items-center">
                  <span className="mr-2">Bộ lọc</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex flex-wrap gap-6">
            <button className="pb-3 border-b-2 border-blue-500 text-blue-600 font-medium">Tất cả</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium">Đang đọc</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium">Đã hoàn thành</button>
            <button className="pb-3 text-gray-500 hover:text-gray-700 font-medium">Theo tháng</button>
          </nav>
        </div>

        {/* Conditional Rendering */}
        {isAuthenticated ?  <MachineHistory /> :<HistoryCMAccount />  }
        
      </div>
    </div>
  );
};

export default History;