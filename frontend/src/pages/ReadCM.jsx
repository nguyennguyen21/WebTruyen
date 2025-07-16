import { useState } from 'react';

const ReadComic = () => {
  // Dữ liệu chương
  const chapterTitles = {
    1: "Khởi đầu",
    2: "Cuộc gặp gỡ",
    3: "Bí mật bị phơi bày",
    4: "Trận chiến đầu tiên",
    5: "Kết thúc mở"
  };

  const chapterImages = {
    1: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a58c1dcc-7084-4703-be2e-3c790977a01f.png ",
    2: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/31110575-e309-474e-bc98-333513648726.png ",
    3: "https://placehold.co/800x1200 ",
    4: "https://placehold.co/800x1200 ",
    5: "https://placehold.co/800x1200 "
  };

  const totalChapters = Object.keys(chapterTitles).length;

  // State quản lý chương hiện tại
  const [chapter, setChapter] = useState(1);

  // Hàm cập nhật chương
  const loadChapter = (newChapter) => {
    if (newChapter < 1 || newChapter > totalChapters) return;
    setChapter(newChapter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md">
        <h1 className="text-xl text-center sm:text-2xl font-bold">Truyện Tranh Online</h1>
        <div className="chapter-title text-center mt-2 text-sm sm:text-base">
          Chương {chapter}: {chapterTitles[chapter]}
        </div>
      </header>

      {/* Nội dung chính */}
      <main className="flex-1 p-4 md:p-6 ">
        {/* Điều hướng chương */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow">
          <button
            onClick={() => loadChapter(chapter - 1)}
            disabled={chapter === 1}
            className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors ${
              chapter === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Chương Trước
          </button>

          <select
            value={chapter}
            onChange={(e) => loadChapter(parseInt(e.target.value))}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
          >
            {Object.entries(chapterTitles).map(([key, title]) => (
              <option key={key} value={key}>
                Chương {key}: {title}
              </option>
            ))}
          </select>

          <button
            onClick={() => loadChapter(chapter + 1)}
            disabled={chapter === totalChapters}
            className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors ${
              chapter === totalChapters ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Chương Sau
          </button>
        </div>

        {/* Hiển thị hình ảnh truyện */}
        <div className="bg-white rounded-lg shadow overflow-hidden max-w-3xl mx-auto">
          <img
            src={chapterImages[chapter]}
            alt={`Chương ${chapter}: ${chapterTitles[chapter]}`}
            className="comic-page w-full h-auto object-contain"
          />
        </div>
        
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow">
          <button
            onClick={() => loadChapter(chapter - 1)}
            disabled={chapter === 1}
            className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors ${
              chapter === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Chương Trước
          </button>

          <select
            value={chapter}
            onChange={(e) => loadChapter(parseInt(e.target.value))}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
          >
            {Object.entries(chapterTitles).map(([key, title]) => (
              <option key={key} value={key}>
                Chương {key}: {title}
              </option>
            ))}
          </select>

          <button
            onClick={() => loadChapter(chapter + 1)}
            disabled={chapter === totalChapters}
            className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors ${
              chapter === totalChapters ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Chương Sau
          </button>
        </div>

        
      </main>

        
     
    </div>
  );
};

export default ReadComic;