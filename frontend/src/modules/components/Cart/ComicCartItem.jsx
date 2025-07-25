import React from "react";

const DEFAULT_IMAGE =
  "https://via.placeholder.com/300x450?text=No+Image";

const ComicCartItem = ({ title, chapter, time, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-[300px] sm:max-w-[300px] md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg mx-auto">
      <img
        src={imageSrc || DEFAULT_IMAGE}
        alt={`Bìa truyện ${title}`}
        className="w-full h-auto aspect-[2/3] object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DEFAULT_IMAGE;
        }}
      />
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="font-bold mb-1 text-xs sm:text-sm md:text-base lg:text-lg truncate-2-lines">
          {title || "Không có tiêu đề"}
        </h3>
        <div className="flex justify-between text-xs sm:text-sm md:text-md text-gray-500">
          <span className="font-medium text-gray-700">{chapter}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ComicCartItem;