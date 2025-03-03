import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
  ChevronLeft,
  Star,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";
import ReviewBox from "../../components/Box/ReviewBox";
import { useState } from "react";
import { reviews } from "../../constants/Reviews";
import Pagination from "../../components/Pagination/Pagination";

export default function Overviewevents() {
  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const itemsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center">
      <div className="hidden md:block w-1/4 border-r border-blue py-[16px] overflow-auto">
        <div className="p-[32px]">
          <div className="grid gap-4">
            <Link
              to="/dashboard/myevents"
              className="hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 flex justify-between items-center text-black text-[20px]"
            >
              <p>My events</p>
              <Calendar />
            </Link>
            <Link
              to="/dashboard/addevents"
              className="hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 flex justify-between items-center text-black text-[20px]"
            >
              <p>Add events</p>
              <CalendarPlus />
            </Link>
            <Link
              to="/dashboard/overview"
              className="text-white bg-lightblue transition h-16 cursor-pointer p-4 rounded-xl flex justify-between items-center text-[20px]"
            >
              <p>Overview</p>
              <ChartNoAxesColumnIncreasing />
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-3/4 m-16">
      <div className="hidden md:block">
        <div className="text-[36px] font-semibold">Welcome, Trainee</div>
        <div className="my-[32px]">
          <div className="text-[24px] my-[32px]">Upcoming course</div>
          <EventCardTrainer />
          </div>
        </div>
        <div className="mb-[32px]">
        <div className="flex items-center gap-4"><ChevronLeft onClick={handleBack} className="flex cursor-pointer"/>
          <div className="text-[24px] my-[32px]">Overview</div></div>
          <div className="grid grid-cols-4 gap-4">
            <div className="border border-black rounded-xl h-32 p-4 grid justify-between">
              <p className="text-[20px]">Number of trainees</p>
              <p className="text-[24px] font-bold">127</p>
            </div>
            <div className="border border-black rounded-xl h-32 p-4 grid justify-between">
              <p className="text-[20px]">Number of trainees</p>
              <p className="text-[24px] font-bold">127</p>
            </div>
            <div className="border border-black rounded-xl h-32 p-4 grid justify-between">
              <p className="text-[20px]">Number of trainees</p>
              <p className="text-[24px] font-bold">127</p>
            </div>
            <div className="border border-black rounded-xl h-32 p-4 grid justify-between">
              <p className="text-[20px]">Number of trainees</p>
              <p className="text-[24px] font-bold">127</p>
            </div>
          </div>
        </div>
        <div className="my-[32px]">
          <div className="text-[24px] mt-[32px]">My review</div>
          <div className="flex gap-1 mb-[32px]">
            <div className="flex items-center gap-1">
              <Star fill="#DDF344" className="w-[36px] h-[36px]" />
              <p className="text-[36px] font-bold">4.7</p>
            </div>
            <p className="content-end mb-1">from 74 review</p>
          </div>
          {currentItems.map((item, index) => (
            <ReviewBox key={index} point={item.point} description={item.description} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
