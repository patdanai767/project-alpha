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
  const [filters, setFilters] = useState({
    gender: "All",
    price: "All",
    duration: "All",
    activity: "All",
    title: "",
  });

  useEffect(() => {
    reData()
  },[])

  const reData = async () => {
    const res = await axios.get("/api/course")
    console.log("API Response:", res.data);
    setCourse(res.data)
  }

  const filteredCourses = courses.filter((course) => {
    const matchesGender =
      filters.gender === "All" || course.gender === filters.gender;
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "less than THB 1,000" && course.price < 1000) ||
      (filters.price === "more than THB 1,000" && course.price >= 1000);
    const matchesDuration =
      filters.duration === "All" ||
      (filters.duration === "30-min" && course.duration === 30) ||
      (filters.duration === "60-min" && course.duration === 60);
    const matchesActivity =
      filters.activity === "All" || course.activity === filters.activity;
    const matchesTitle =
      filters.title === "" || course.title.toLowerCase().includes(filters.title.toLowerCase());
    
    return matchesGender && matchesPrice && matchesDuration && matchesActivity && matchesTitle;
  });
  

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
  

  console.log(courses);
  return (
    <div className="flex lg:justify-center mt-[82px]">
      <div className="flex-col">
      <FilterBar
          filters={filters}
          setFilters={setFilters}
        />

        <div className="mt-[15px]">
          {currentItems.map((val) => (
            <Searchcard
            key = {val.id}
              id = {val._id}
              title={val.title}
              description={val.description}
              price={val.price}
              duration={val.duration}
              thumbnail={val.thumbnail}
              //category={val.category.title}
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