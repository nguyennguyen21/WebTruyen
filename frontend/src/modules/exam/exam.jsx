import { useState,useEffect } from "react";
import React from "react";
const CreateExamFormWrittingthesis = () => {
  const [examName, setExamName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!examName.trim()) newErrors.examName = "Vui lòng nhập tên đề thi";
    const durationNum = parseInt(duration);
    if (
      isNaN(durationNum) ||
      durationNum < 1 ||
      durationNum > 360
    ) {
      newErrors.duration = "Vui lòng nhập thời gian hợp lệ (1–360 phút)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Đề thi đã được tạo thành công!");
    // Gửi dữ liệu lên server ở đây nếu cần
  };

  const updatePreview = () => {
    if (!examName && !duration) {
      return (
        <div className="text-gray-500 italic text-center py-4">
          Thông tin đề thi sẽ hiển thị ở đây
        </div>
      );
    }

    return (
      <div className="space-y-3">
        <div className="text-xl font-semibold text-indigo-600">
          {examName || "[Chưa có tên]"}
        </div>

        {duration && (
          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Thời gian: {duration} phút</span>
          </div>
        )}

        {description && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm font-medium text-gray-600 mb-2">
              Hướng dẫn:
            </div>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {description}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-4 flex items-center">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM17.25 8.25h1.5v1.5h-1.5z"
              />
            </svg>
          </div>
          <h1 className="text-white text-xl font-semibold">Tạo Đề Thi Mới</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Exam Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên đề thi
            </label>
            <input
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              placeholder="Nhập tên đề thi"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.examName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.examName && (
              <div className="text-xs text-red-500 mt-1">{errors.examName}</div>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian làm bài (phút)
            </label>
            <input
              type="number"
              min="1"
              max="360"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Nhập thời gian làm bài"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.duration ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.duration && (
              <div className="text-xs text-red-500 mt-1">{errors.duration}</div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yêu cầu/Hướng dẫn
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập các yêu cầu hoặc hướng dẫn cần thiết"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Tạo Đề Thi
            </button>
          </div>
        </form>

        {/* Preview Section */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Xem Trước
          </h2>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            {updatePreview()}
          </div>
        </div>
      </div>
    </div>
  );
}

const CreateExamFormWrittingLetter = () => {
  const [examName, setExamName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!examName.trim()) newErrors.examName = "Vui lòng nhập tên đề thi";
    const durationNum = parseInt(duration);
    if (
      isNaN(durationNum) ||
      durationNum < 1 ||
      durationNum > 360
    ) {
      newErrors.duration = "Vui lòng nhập thời gian hợp lệ (1–360 phút)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Đề thi đã được tạo thành công!");
    // Gửi dữ liệu lên server ở đây nếu cần
  };

  const updatePreview = () => {
    if (!examName && !duration) {
      return (
        <div className="text-gray-500 italic text-center py-4">
          Thông tin đề thi sẽ hiển thị ở đây
        </div>
      );
    }

    return (
      <div className="space-y-3">
        <div className="text-xl font-semibold text-indigo-600">
          {examName || "[Chưa có tên]"}
        </div>

        {duration && (
          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Thời gian: {duration} phút</span>
          </div>
        )}

        {description && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm font-medium text-gray-600 mb-2">
              Hướng dẫn:
            </div>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {description}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f7e9d7]">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-4 flex items-center">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM17.25 8.25h1.5v1.5h-1.5z"
              />
            </svg>
          </div>
          <h1 className="text-white text-xl font-semibold">Tạo Đề Thi Mới</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Exam Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên đề thi
            </label>
            <input
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              placeholder="Nhập tên đề thi"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.examName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.examName && (
              <div className="text-xs text-red-500 mt-1">{errors.examName}</div>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thời gian làm bài (phút)
            </label>
            <input
              type="number"
              min="1"
              max="360"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Nhập thời gian làm bài"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
                errors.duration ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.duration && (
              <div className="text-xs text-red-500 mt-1">{errors.duration}</div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yêu cầu/Hướng dẫn
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Nhập các yêu cầu hoặc hướng dẫn cần thiết"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Tạo Đề Thi
            </button>
          </div>
        </form>

        {/* Preview Section */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Xem Trước
          </h2>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            {updatePreview()}
          </div>
        </div>
      </div>
    </div>
  );
}



const ExamPage = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [part1Text, setPart1Text] = useState('');
  const [part2Text, setPart2Text] = useState('');
  const [saveTimer1, setSaveTimer1] = useState(120);
  const [saveTimer2, setSaveTimer2] = useState(120);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Word count
  const countWords = (text) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  };

  // Auto-save logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSaveTimer1((prev) => {
        if (prev <= 0) {
          console.log('Auto-saving Part 1...');
          return 120;
        }
        return prev - 1;
      });

      setSaveTimer2((prev) => {
        if (prev <= 0) {
          console.log('Auto-saving Part 2...');
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Submit exam
  const handleSubmit = () => {
    if (!part1Text || !part2Text) {
      const confirmSubmit = window.confirm(
        'Bạn chưa hoàn thành cả hai phần bài thi. Bạn có chắc chắn muốn nộp bài không?'
      );
      if (!confirmSubmit) return;
    }

    alert('Bài thi của bạn đã được nộp thành công!');
    // Disable inputs and change button state
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').classList.remove('bg-blue-600', 'hover:bg-blue-700');
    document.getElementById('submit-btn').classList.add('bg-gray-400', 'cursor-not-allowed');
    document.getElementById('submit-btn').textContent = 'Đã nộp bài';
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">HỆ THỐNG THI WRITING TRỰC TUYẾN</h1>
      </div>

      {/* Exam Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-shadow hover:shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">ĐỀ THI WRITING TIẾNG ANH - KỲ THI THỬ</h2>
            <p className="text-gray-600"><span className="font-medium">Thời gian:</span> 60 phút</p>
            <p className="text-gray-600"><span className="font-medium">Mã đề:</span> WT-2023-001</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center bg-blue-50 px-4 py-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className={`text-lg font-bold ${timeLeft <= 300 ? 'animate-pulse text-red-500' : ''}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Hướng dẫn làm bài:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Bài thi gồm 2 phần: Phần 1 (40 phút) và Phần 2 (20 phút)</li>
            <li>Thí sinh viết bài trực tiếp vào khung bên dưới</li>
            <li>Hệ thống sẽ tự động lưu bài làm mỗi 2 phút</li>
            <li>Khi hết giờ, bài làm sẽ tự động được nộp</li>
            <li>Không được mở tab khác trong quá trình làm bài</li>
          </ul>
        </div>
      </div>

      {/* Part 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">PHẦN 1: VIẾT LUẬN (40 phút)</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2"><strong>Đề bài:</strong> Some people believe that the government should spend money on building theaters and museums. Others think that it is more important to spend money on hospitals and schools. Discuss both views and give your opinion.</p>
          <p className="text-gray-700"><strong>Yêu cầu:</strong> Viết bài luận khoảng 250 từ, trình bày rõ quan điểm cá nhân.</p>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bài làm Phần 1:</label>
        <textarea
          id="part1-answer"
          rows="10"
          value={part1Text}
          onChange={(e) => setPart1Text(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nhập bài làm của bạn tại đây..."
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">Tự động lưu sau: {formatTime(saveTimer1)}</span>
          <span className="text-xs text-gray-500">Số từ: {countWords(part1Text)}</span>
        </div>

        {/* Part 2 */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">PHẦN 2: VIẾT THƯ (20 phút)</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2"><strong>Đề bài:</strong> You recently attended a conference and would like to give some feedback to the organizers. Write a letter to the conference organizer.</p>
          <p className="text-gray-700"><strong>Yêu cầu:</strong> Viết thư khoảng 150 từ, bao gồm các nội dung: cảm ơn, nhận xét về nội dung, góp ý cải thiện.</p>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bài làm Phần 2:</label>
        <textarea
          id="part2-answer"
          rows="8"
          value={part2Text}
          onChange={(e) => setPart2Text(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nhập bài làm của bạn tại đây..."
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">Tự động lưu sau: {formatTime(saveTimer2)}</span>
          <span className="text-xs text-gray-500">Số từ: {countWords(part2Text)}</span>
        </div>
      </div>

      {/* Submit Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 sm:mb-0">
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Vui lòng kiểm tra kỹ bài làm trước khi nộp</span>
          </div>
        </div>
        <button
          id="submit-btn"
          onClick={handleSubmit}
          className="btn-submit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Nộp bài thi
        </button>
      </div>
    </div>
  );
};

const CreateMultipleChoice = () => {
  const [questions, setQuestions] = React.useState([
    {
      id: Date.now(),
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ]);

  const [quizTitle, setQuizTitle] = React.useState('');
  const [quizTime, setQuizTime] = React.useState(30);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestionText = (id, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, text: value } : q
      )
    );
  };

  const updateOption = (id, index, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              options: q.options.map((opt, i) => (i === index ? value : opt)),
            }
          : q
      )
    );
  };

  const updateCorrectAnswer = (id, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, correctAnswer: parseInt(value) } : q
      )
    );
  };

  const saveQuiz = () => {
    if (!quizTitle.trim()) {
      alert('Vui lòng nhập tiêu đề bài thi');
      return;
    }

    const quizData = {
      title: quizTitle,
      timeLimit: parseInt(quizTime),
      questions: questions.filter((q) => q.text && q.options.some((opt) => opt)),
    };

    if (quizData.questions.length === 0) {
      alert('Vui lòng nhập nội dung câu hỏi và đáp án');
      return;
    }

    const jsonString = JSON.stringify(quizData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${quizData.title.replace(/\s+/g, '_')}_questions.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const createQuiz = () => {
    const quizData = {
      title: quizTitle,
      timeLimit: parseInt(quizTime),
      questions: questions.filter((q) => q.text && q.options.some((opt) => opt)),
    };

    if (!quizData.title || quizData.questions.length === 0) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    alert(
      `Bài thi đã được tạo thành công!\nTiêu đề: ${quizData.title}\nThời gian: ${quizData.timeLimit} phút\nSố câu hỏi: ${quizData.questions.length}`
    );
    console.log(quizData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-800">TẠO BÀI TRẮC NGHIỆM</h1>
        <p className="text-xl text-gray-600">Thiết kế bài kiểm tra trắc nghiệm chuyên nghiệp</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="mb-6">
          <label htmlFor="quiz-title" className="block text-lg font-medium text-gray-700 mb-2">
            Tiêu đề bài thi
          </label>
          <input
            type="text"
            id="quiz-title"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition"
            placeholder="Nhập tiêu đề bài thi..."
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </div>

        <div className="mb-6 flex items-end space-x-4">
          <div className="flex-1">
            <label htmlFor="question-count" className="block text-lg font-medium text-gray-700 mb-2">
              Số lượng câu hỏi
            </label>
            <input
              type="number"
              id="question-count"
              min="1"
              defaultValue="1"
              className="w-32 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition"
              onBlur={(e) => {
                const count = parseInt(e.target.value);
                if (count > 0) {
                  setQuestions(Array.from({ length: count }, (_, i) => ({
                    id: Date.now() + i,
                    text: '',
                    options: ['', '', '', ''],
                    correctAnswer: 0,
                  })));
                }
              }}
            />
          </div>
          <button
            onClick={() => {
              const count = parseInt(document.getElementById('question-count').value);
              if (count > 0) {
                if (questions.length > 0 && !confirm(`Bạn có muốn xóa ${questions.length} câu hỏi hiện tại?`)) return;
                setQuestions(
                  Array.from({ length: count }, (_, i) => ({
                    id: Date.now() + i,
                    text: '',
                    options: ['', '', '', ''],
                    correctAnswer: 0,
                  }))
                );
              }
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full transition"
          >
            Tạo Câu Hỏi
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="quiz-time" className="block text-lg font-medium text-gray-700 mb-2">
            Thời gian làm bài (phút)
          </label>
          <input
            type="number"
            id="quiz-time"
            min="1"
            value={quizTime}
            onChange={(e) => setQuizTime(e.target.value)}
            className="w-32 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div id="questions-container" className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="question-card bg-white rounded-xl shadow-lg p-6 relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => removeQuestion(q.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Câu hỏi {questions.findIndex((qq) => qq.id === q.id) + 1}
              </label>
              <textarea
                rows="3"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition"
                placeholder="Nhập nội dung câu hỏi..."
                value={q.text}
                onChange={(e) => updateQuestionText(q.id, e.target.value)}
              />
            </div>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <div key={i} className="answer-item flex items-center bg-gray-50 rounded-lg p-4">
                  <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none transition"
                    placeholder={`Nhập đáp án ${String.fromCharCode(65 + i)}...`}
                    value={opt}
                    onChange={(e) => updateOption(q.id, i, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">Đáp án đúng</label>
              <div className="flex space-x-4">
                {q.options.map((_, i) => (
                  <label key={i} className="flex items-center">
                    <input
                      type="radio"
                      name={`correct-answer-${q.id}`}
                      value={i}
                      checked={q.correctAnswer === i}
                      onChange={(e) => updateCorrectAnswer(q.id, e.target.value)}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2">{String.fromCharCode(65 + i)}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={addQuestion}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Thêm Câu Hỏi
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-12 mb-16">
        <button
          onClick={createQuiz}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
        >
          Tạo Bài Thi
        </button>
        <button
          onClick={saveQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
        >
          Lưu Dữ Liệu
        </button>
      </div>
    </div>
  );
};



const quizData = [
  {
    question: "C# là ngôn ngữ lập trình thuộc loại nào?",
    options: ["Ngôn ngữ máy", "Hợp ngữ", "Ngôn ngữ bậc cao", "Ngôn ngữ markup"],
    answer: 2,
  },
  {
    question: "Thuật toán nào sau đây sắp xếp một mảng?",
    options: ["DFS", "BFS", "Quick Sort", "Dijkstra"],
    answer: 2,
  },
  {
    question: "HTML là viết tắt của gì?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "Home Tool Markup Language"],
    answer: 0,
  },
  {
    question: "Trong CSS, đơn vị 'em' liên quan đến gì?",
    options: ["Kích thước màn hình", "Kích thước phần tử cha", "Font size của phần tử hiện tại", "Font size của phần tử html"],
    answer: 2,
  },
  {
    question: "Trong JavaScript, từ khóa 'let' khác với 'var' ở điểm nào?",
    options: ["Phạm vi hoạt động", "Kiểu dữ liệu", "Không thể thay đổi giá trị", "Tất cả đều sai"],
    answer: 0,
  }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 phút
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishQuiz();
        } else if (prev <= 60) {
          document.getElementById("time-left").classList.add("text-red-600", "font-bold");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateTimerDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const selectOption = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);
    setSelectedOption(index);
  };

  const goToNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(userAnswers[currentQuestion + 1]);
    } else {
      finishQuiz();
    }
  };

  const goToPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(userAnswers[currentQuestion - 1]);
    }
  };

  const finishQuiz = () => {
    let totalScore = 0;
    userAnswers.forEach((ans, i) => {
      if (ans === quizData[i].answer) totalScore++;
    });
    setScore(totalScore);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(quizData.length).fill(null));
    setTimeLeft(10 * 60);
    setShowResult(false);
    setSelectedOption(null);
  };

  const question = quizData[currentQuestion];

  if (showResult) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hoàn thành bài thi!</h2>
          <p className="text-gray-600 mb-6">Bạn đã hoàn thành bài thi trắc nghiệm</p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Số câu đúng:</span>
              <span className="font-bold text-blue-600">{score}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Điểm số:</span>
              <span className="font-bold text-blue-600">{score}/{quizData.length}</span>
            </div>
          </div>
          <button
            onClick={restartQuiz}
            className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Làm lại bài thi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
         
          <h1 className="text-3xl font-bold text-gray-800">Thi Trắc Nghiệm Trực Tuyến</h1>
          <p className="text-gray-600 mt-2">Kiểm tra kiến thức của bạn</p>
        </div>

        {/* Quiz Container */}
        <div className="quiz-container bg-white rounded-xl p-6 md:p-8 mb-8 shadow-lg">
          {/* Timer & Progress Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div id="time-left" className="timer bg-blue-100 text-blue-800 rounded-lg px-4 py-2">
              {updateTimerDisplay()}
            </div>
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(currentQuestion / (quizData.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-gray-600 min-w-[100px]">
              Câu <span>{currentQuestion + 1}</span>/<span>{quizData.length}</span>
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h2>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-item bg-white border border-gray-200 rounded-lg p-4 text-left hover:bg-gray-50 ${
                  selectedOption === index ? "bg-blue-500 text-white border-blue-500" : ""
                }`}
                onClick={() => selectOption(index)}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentQuestion === 0}
              onClick={goToPrev}
            >
              Câu trước
            </button>
            <button
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={goToNext}
            >
              {currentQuestion === quizData.length - 1 ? "Nộp bài" : "Câu tiếp"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export{ CreateExamFormWrittingLetter, CreateExamFormWrittingthesis, ExamPage, CreateMultipleChoice, QuizApp }; 