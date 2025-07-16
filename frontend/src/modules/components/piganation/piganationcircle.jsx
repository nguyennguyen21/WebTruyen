// src/components/PiganationCircle.jsx
import React, { useState } from "react";

const PiganationCircle = ({ totalPages = 15, onPageChange = (page) => {} }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`h-12 w-12 flex items-center justify-center rounded-full border-2 border-black text-black hover:border-opacity-50 transition-all ${
            currentPage === i ? "bg-black text-white" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 w-10 rounded-full border border-black text-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      {renderPages()}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 w-10 rounded-full border border-black text-black hover:bg-gray-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default PiganationCircle;