// src/components/PaginationSquare.jsx
import React from "react";

const PaginationSquare = ({ totalPages = 1, onPageChange = (page) => {} }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      // Trang đầu
      pages.push(renderPageButton(1));

      let startPage = Math.max(2, currentPage - 1);
      const maxMiddlePages = 3;
      let endPage = Math.min(totalPages - 1, startPage + maxMiddlePages - 1);

      if (endPage - startPage < maxMiddlePages - 1) {
        endPage = Math.min(totalPages - 1, currentPage + 1);
        startPage = Math.max(2, endPage - maxMiddlePages + 1);
      }

      if (startPage > 2) {
        pages.push(<span key="ellipsis-start" className="px-2 hidden sm:inline-block">...</span>);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPageButton(i));
      }

      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis-end" className="px-2 hidden sm:inline-block">...</span>);
      }

      // Trang cuối
      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      onClick={() => handlePageClick(page)}
      disabled={currentPage === page}
      className={`h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-lg border border-black text-sm sm:text-base text-black hover:bg-gray-100 transition-all ${
        currentPage === page ? "bg-black text-white" : ""
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-2 overflow-x-auto sm:overflow-x-visible p-2 sm:p-0">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-8 px-2 sm:h-10 sm:px-4 rounded-lg border border-black text-sm sm:text-base text-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 sm:mr-1 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">Previous</span>
        <span className="inline sm:hidden">←</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">{renderPages()}</div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-8 px-2 sm:h-10 sm:px-4 rounded-lg border border-black text-sm sm:text-base text-black hover:bg-gray-100"
      >
        <span className="hidden sm:inline">Next</span>
        <span className="inline sm:hidden">→</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 sm:ml-1 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
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

export default PaginationSquare;