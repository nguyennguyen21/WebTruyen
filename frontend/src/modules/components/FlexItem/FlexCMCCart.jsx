import React, { useEffect, useState } from "react";
import ComicCartItem from "../Cart/ComicCartItem";
import PaginationSquare from "../piganation/piganationsquare"; // Đảm bảo đúng đường dẫn
import { getTopManga } from "../../services/mangService";
import { useLocation, useNavigate } from "react-router-dom"; // Thêm thư viện này

const formatDate = (dateString) => {
  if (!dateString) return "Chưa cập nhật";
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? "Chưa cập nhật" : date.toLocaleDateString("vi-VN");
};

const FlexCMCItem = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  const comicsPerPage = 15;

  const location = useLocation();
  const navigate = useNavigate();

  // Lấy page từ URL
  const searchParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // Đồng bộ currentPage với URL
  useEffect(() => {
    const newSearchParams = new URLSearchParams(location.search);
    if (currentPage !== parseInt(newSearchParams.get("page"))) {
      newSearchParams.set("page", currentPage);
      navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true });
    }
  }, [currentPage, location, navigate]);

  // Fetch dữ liệu
  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const data = await getTopManga(3000); // giả sử hàm này trả về toàn bộ dữ liệu
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

  // Tính toán danh sách truyện theo trang
  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComics = comics.slice(indexOfFirstComic, indexOfLastComic);

  // Tổng số trang
  const totalPages = Math.ceil(comics.length / comicsPerPage);

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Grid hiển thị truyện */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
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