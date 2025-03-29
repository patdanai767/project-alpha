import { useEffect, useState } from "react";
import Searchcard from "../../components/Card/SearchC";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import { config } from "../../config";

export default function Favorite() {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourse] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    reData();
  }, []);

  const reData = async () => {
    const res = await axios.get("/api/course/myFavorite", config.headers());
    setCourse(res.data);
  };

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="flex lg:justify-center mt-[82px] min-h-screen">
      <div className="flex-col">
        <div className="text-[30px] font-bold">
          You have {courses.length} Favorite Trainers
        </div>

        <div className="mt-[15px]">
          {currentItems.map((val, index) => (
            <Searchcard
              key={index}
              id={val._id}
              title={val.title}
              description={val.description}
              price={val.price}
              duration={val.duration}
              thumbnail={val.createdBy.profileImage}
              category={val.category?.title}
              isLike={true}
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
