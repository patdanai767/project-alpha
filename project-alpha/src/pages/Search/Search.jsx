import React, { useEffect, useState } from "react";
import Searchcard from "../../components/Card/SearchC";
import FilterBar from "../../components/FilterBar";
import { trainers } from "../../constants/TrainerData";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";

function Search_() {
  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const [courses, setCourse] = useState([])
  const itemsPerPage = 3; // จำนวนข้อมูลต่อหน้า

  useEffect(() => {
    reData()
  },[])

  const reData = async () => {
    const res = await axios.get("/api/course")
    console.log("API Response:", res.data);
    setCourse(res.data)
  }
  

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
  

  console.log(courses);
  return (
    <div className="flex lg:justify-center mt-[82px]">
      <div className="flex-col">
        <FilterBar />

        <div className="mt-[15px]">
          {currentItems.map((val) => (
            <Searchcard
              id = {val._id}
              title={val.title}
              description={val.description}
              price={val.price}
              duration={val.duration}
              thumbnail={val.thumbnail}
              category={val.category.title}
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