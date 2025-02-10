import React, { useState } from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import SearchCard from "../../components/Card/KeepSearchC";
import Searchcard from "../../components/Card/SearchC";
import FilterBar from "../../components/FilterBar";
import { trainers } from "../../constants/TrainerData";
import Pagination from "../../components/Pagination/Pagination";

function Search_() {
  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const itemsPerPage = 3; // จำนวนข้อมูลต่อหน้า

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(trainers.length / itemsPerPage);

  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = trainers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex lg:justify-center mt-[82px] min-h-screen">
      <div className="flex-col">
        <FilterBar />

        <div className="mt-[15px]">
          {currentItems.map((val) => (
            <Searchcard
              key={val.id}
              title={val.title}
              description={val.description}
              price={val.price}
              duration={val.duration}
              thumbnail={val.thumbnail}
              category={val.category}
            />
          ))}
        </div>

        {/* ปุ่ม Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Search_;
