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
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`h-10 w-10 flex items-center justify-center rounded-lg border border-black text-black hover:bg-gray-100 transition-all ${
              currentPage === i ? "bg-black text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Trang đầu tiên
      pages.push(renderPageButton(1));

      let startPage, endPage;

      if (currentPage <= 3) {
        startPage = 2;
        endPage = 3;
        pages.push(renderPageButton(2), renderPageButton(3));
        pages.push(<span key="ellipsis" className="px-2">...</span>);
      } else if (currentPage >= totalPages - 2) {
        pages.push(<span key="ellipsis" className="px-2">...</span>);
        for (let i = totalPages - 2; i <= totalPages - 1; i++) {
          pages.push(renderPageButton(i));
        }
      } else {
        pages.push(<span key="ellipsis" className="px-2">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(renderPageButton(i));
        }
        pages.push(<span key="ellipsis2" className="px-2">...</span>);
      }

      // Trang cuối cùng
      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      onClick={() => handlePageClick(page)}
      disabled={currentPage === page}
      className={`h-10 w-10 flex items-center justify-center rounded-lg border border-black text-black hover:bg-gray-100 transition-all ${
        currentPage === page ? "bg-black text-white" : ""
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="flex items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center h-10 px-4 rounded-lg border border-black text-black disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">{renderPages()}</div>

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center h-10 px-4 rounded-lg border border-black text-black hover:bg-gray-100"
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
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