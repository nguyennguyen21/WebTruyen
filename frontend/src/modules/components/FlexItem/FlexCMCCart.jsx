import React, { useEffect, useState } from "react";
import ComicCartItem from "../Cart/ComicCartItem";
import PaginationSquare from "../piganation/piganationsquare"; // Đảm bảo đúng đường dẫn
import { getTopManga } from "../../services/mangService";

const formatDate = (dateString) => {
  if (!dateString) return "Chưa cập nhật";
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? "Chưa cập nhật" : date.toLocaleDateString("vi-VN");
};

const FlexCMCItem = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Phân trang
  const comicsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const data = await getTopManga(30); // Giả sử hàm này trả về toàn bộ dữ liệu
        setComics(data || []);
      } catch (error) {
        console.error("Lỗi khi tải truyện:", error);
        setComics([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMangaList();
  }, []);

  // Lấy danh sách truyện theo trang hiện tại
  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComics = comics.slice(indexOfFirstComic, indexOfLastComic);

  // Tổng số trang
  const totalPages = Math.ceil(comics.length / comicsPerPage);

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu khi chuyển trang
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Grid hiển thị truyện */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : currentComics.length > 0 ? (
          currentComics.map((comic, index) => (
            <ComicCartItem
              key={comic.id || `comic-${index}`}
              title={comic.title || "Không có tiêu đề"}
              chapter={`Chap ${comic.chapter || 0}`}
              time={formatDate(comic.updatedAt || comic.createdAt)}
              imageSrc={comic.coverImage || ""}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Không có truyện nào.</p>
        )}
      </div>

      {/* Component phân trang */}
      <div className="flex justify-center mt-8">
        <PaginationSquare
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FlexCMCItem;