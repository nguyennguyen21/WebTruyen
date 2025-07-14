const HistoryCMAccount = () =>{
    return(
        <div>
         {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative group">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/600x400/6b7280/ffffff?text=Truy%E1%BB%87n+1')" }}></div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-gray-800 truncate">Tiên nghịch</h3>
              <span className="text-xs text-gray-500">5 phút trước</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Chương 125</p>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Đã đọc 65%</span>
                <span>Từ máy tính</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center">
                <i className="fas fa-book-open mr-2"></i> Tiếp tục
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 transition">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="text-white">
              <h3 className="font-bold text-xl">Tiên nghịch</h3>
              <p className="text-sm mt-1 line-clamp-3">
                Câu chuyện về Lý Tiểu Hổ từ một kẻ vô danh trở thành đại cao thủ tiên giới...
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative group">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url(' https://placehold.co/600x400/6b7280/ffffff?text=Truy%E1%BB%87n+2')" }}></div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-gray-800 truncate">Ma thổi đèn</h3>
              <span className="text-xs text-gray-500">3 giờ trước</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Chương 42</p>

            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Đã đọc 32%</span>
                <span>Từ điện thoại</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "32%" }}></div>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center">
                <i className="fas fa-book-open mr-2"></i> Tiếp tục
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 transition">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="text-white">
              <h3 className="font-bold text-xl">Ma thổi đèn</h3>
              <p className="text-sm mt-1 line-clamp-3">
                Cuộc phiêu lưu của một nhóm thợ săn kho báu vào những ngôi mộ cổ đầy bí ẩn...
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative group">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url(' https://placehold.co/600x400/6b7280/ffffff?text=Truy%E1%BB%87n+3')" }}></div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-gray-800 truncate">Toàn chức cao thủ</h3>
              <span className="text-xs text-gray-500">2 ngày trước</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">Chương 215</p>

            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Đã đọc 100%</span>
                <span>Từ máy tính</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center">
                <i className="fas fa-eye mr-2"></i> Xem lại
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 transition">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="text-white">
              <h3 className="font-bold text-xl">Toàn chức cao thủ</h3>
              <p className="text-sm mt-1 line-clamp-3">
                Hành trình của Diệp Tu trở thành cao thủ số một game Glory sau khi bị đội game loại bỏ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default HistoryCMAccount