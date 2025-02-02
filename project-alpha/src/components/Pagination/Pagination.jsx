import React, { useEffect } from "react";


const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]); // เมื่อ currentPage เปลี่ยน ให้เลื่อนกลับไปด้านบน

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 9) {
      // กรณีที่หน้าทั้งหมด <= 9
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // กรณีที่หน้าทั้งหมด > 9
      if (currentPage < 5) {
        // แสดงหน้าปัจจุบัน + 4 หน้า (ด้านขวา)
        pages.push(1, 2, 3, 4, 5, "...");
        pages.push(totalPages);
      } else if (currentPage > totalPages - 4) {
        // แสดงหน้าปัจจุบัน + 4 หน้า (ด้านซ้าย)
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= 5 && currentPage <= totalPages - 4) {
        // แสดงหน้าปัจจุบันและมี Ellipsis ซ้าย/ขวา
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {/* ปุ่ม Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        Previous
      </button>

      {/* หมายเลขหน้า */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* ปุ่ม Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;