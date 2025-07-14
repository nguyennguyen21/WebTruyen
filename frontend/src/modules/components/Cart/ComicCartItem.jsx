// src/components/ComicCartItem.jsx
import React from "react";

const ComicCartItem = ({ title, chapter, time, imageSrc }) => {
  return (
    <div className="truyen-card bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1">
      <img
        src={imageSrc}
        alt={`Bìa truyện ${title}`}
        className="truyen-image w-full h-70  object-cover"
        onError={(e) =>
          (e.target.src =
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5379deb4-ba5c-4b2f-86bd-4075eb1d49e1.png ")
        }
      />
      <div className="truyen-info p-3">
        <h3 className="truyen-title font-bold mb-2 line-clamp-2 h-10  overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="truyen-meta flex justify-between text-xs text-gray-500 ">
          <span className="chapter-count font-medium text-gray-700">{chapter}</span>
          <span className="update-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ComicCartItem;