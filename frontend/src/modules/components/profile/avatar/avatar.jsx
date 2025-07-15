import { useState } from "react";

const Avatar = () => {
  const [status, setStatus] = useState("online"); // 'online', 'offline', 'busy'

  const toggleStatus = () => {
    setStatus((prev) => {
      if (prev === "online") return "offline";
      if (prev === "offline") return "busy";
      if (prev === "busy") return "online";
    });
  };

  const getStatusClasses = () => {
    switch (status) {
      case "online":
        return {
          dot: "bg-green-500 border-green-500 online-pulse",
          text: "text-green-600",
          imgBorder: "border-green-500",
          statusText: "Đang hoạt động",
        };
      case "offline":
        return {
          dot: "bg-gray-400 border-gray-300",
          text: "text-gray-500",
          imgBorder: "grayscale border-gray-300",
          statusText: "Ngoại tuyến",
        };
      case "busy":
        return {
          dot: "bg-yellow-500 border-yellow-500",
          text: "text-yellow-600",
          imgBorder: "border-yellow-500",
          statusText: "Đang bận",
        };
      default:
        return {};
    }
  };

  const { dot, text, imgBorder, statusText } = getStatusClasses();

  return (
    <div className="space-y-8 max-w-md w-full">
      <h1 className="text-3xl font-bold text-center text-gray-800">Avatar Trạng Thái</h1>

      {/* Avatar */}
      <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f574e3fd-5ce5-4de5-9a65-f5fa938cbd96.png "
            alt="Chân dung người trẻ tuổi với nụ cười thân thiện"
            className={`w-20 h-20 rounded-full object-cover border-2 ${imgBorder}`}
          />
          <span
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${dot}`}
          ></span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Nguyễn Văn A</h3>
          <p className={`text-sm ${text}`}>{statusText}</p>
          <p className="text-xs text-gray-500">Thành viên từ 2022</p>
        </div>
      </div>

      {/* Offline Avatar - static */}
      <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d13acb1d-5ec5-436e-bacd-c20b26aad4ee.png "
            alt="Chân dung phụ nữ trung niên với kính"
            className="w-20 h-20 rounded-full object-cover grayscale border-2 border-gray-300"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Trần Thị B</h3>
          <p className="text-sm text-gray-500">Ngoại tuyến</p>
          <p className="text-xs text-gray-500">Thành viên từ 2021</p>
        </div>
      </div>

      {/* Busy Avatar - static */}
      <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c584b2f-fa32-4c27-9c4c-090531ba2d69.png "
            alt="Chân dung nam thanh niên nghiêm túc"
            className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Lê Văn C</h3>
          <p className="text-sm text-yellow-600">Đang bận</p>
          <p className="text-xs text-gray-500">Thành viên từ 2023</p>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="bg-white p-6 rounded-xl shadow-md text-center">
        <button
          onClick={toggleStatus}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Toggle Trạng Thái
        </button>
        <p className="text-sm text-gray-500 mt-2">Nhấn để thay đổi trạng thái avatar đầu tiên</p>
      </div>
    </div>
  );
};


export default Avatar