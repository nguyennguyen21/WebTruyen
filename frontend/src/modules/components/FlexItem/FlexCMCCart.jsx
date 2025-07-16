import React, { useEffect, useState } from "react";
import ComicCartItem from "../Cart/ComicCartItem";
import { getTopManga } from "../../services/mangService";

const formatDate = (dateString) => {
  if (!dateString) return "Chưa cập nhật";
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? "Chưa cập nhật" : date.toLocaleDateString("vi-VN");
};

const FlexCMCItem = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const data = await getTopManga(3000);
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

  return (
    <div className="container mx-auto px-4 py-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Đang tải dữ liệu...</p>
        ) : comics.length > 0 ? (
          comics.map((comic, index) => (
            <ComicCartItem
              key={comic.id || `comic-${index}`}
              title={comic.title || "Không có tiêu đề"}
              chapter={`Chap ${comic.chapter || 0}`}
              time={formatDate(comic.updatedAt || comic.createdAt)}
              imageSrc={comic.coverImage || ""}  // <-- SỬA TẠI ĐÂY
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Không có truyện nào.</p>
        )}
      </div>
    </div>
  );
};

export default FlexCMCItem;