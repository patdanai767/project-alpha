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
    setCourse(res.data)
  }

  const filteredCourses = courses.filter((course) => {
    const matchesGender =
      filters.gender === "All" || 
      (filters.gender === "Male" && course.createdBy.sex === "Male") ||
      (filters.gender === "Female" && course.createdBy.sex === "Female") ||
      (filters.gender === "LGBTQ+" && course.createdBy.sex === "lgbtq+".toLowerCase()) 
    const matchesPrice =
      filters.price === "All" ||
      (filters.price === "less than THB 1,000" && course.price < 1000) ||
      (filters.price === "more than THB 1,000" && course.price >= 1000);
    const matchesDuration =
      filters.duration === "All" ||
      (filters.duration === "30-min" && course.duration === 30) ||
      (filters.duration === "60-min" && course.duration === 60);
    const matchesActivity =
      filters.activity === "All" || 
      (filters.activity === "Dancing" && course.category?.title === "Dancing") ||
      (filters.activity === "Weight Training" && course.category?.title === "Weight training");
    const matchesTitle =
      filters.title === "" || course.title.toLowerCase().includes(filters.title.toLowerCase());
    const matchesStatus =
      course.status !== "draft--"

    
    return matchesGender && matchesPrice && matchesDuration && matchesActivity && matchesTitle && matchesStatus ;
  });
  

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  // คำนวณข้อมูลที่ต้องแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
  

  return (
    <div className="flex lg:justify-center mt-[82px] min-h-screen">
      <div className="flex-col">
      <FilterBar
          filters={filters}
          setFilters={setFilters}
        />

        <div className="mt-[15px]">
          {currentItems.map((val,index) => (
            <Searchcard
            key = {val._id}
              id = {val._id}
              title={val.title}
              description={val.description}
              price={val.price}
              duration={val.duration}
              thumbnail={val.createdBy.profileImage}
              category={val.category?.title}
              status={val.status}
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
