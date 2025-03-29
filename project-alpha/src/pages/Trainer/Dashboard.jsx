import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
  Star,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";
import ReviewBox from "../../components/Box/ReviewBox";
import Pagination from "../../components/Pagination/Pagination";
import { reviews } from "../../constants/Reviews";
import axios from "axios";
import { config } from "../../config";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);
  const [user, setUser] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/meeting/myMeeting", config.headers());
      const resUser = await axios.get("/api/user/profile", config.headers());
      setUser(resUser.data);
      setFilterData(res.data.filter((val) => val.status === "continue"));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <motion.div className="w-full h-full md:h-screen bg-sky flex flex-col">
      <div className="flex flex-grow ">
        <div className="w-full border-transparent md:border-r md:border-blue py-[16px] overflow-auto">
          <div className="p-[32px]">
            <div className="block md:hidden">
              <div className="text-3xl font-semibold">Welcome, Trainee</div>
              <div className="my-[32px]">
                <div className="text-xl my-[32px]">Upcoming course</div>
                {filterData ? (
                  <EventCardTrainer
                    key={filterData[0]?._id}
                    id={filterData[0]?._id}
                    title={filterData[0]?.title}
                    trainer={filterData[0]?.createdBy}
                    trainee={filterData[0]?.trainee}
                    startedTime={filterData[0]?.startedAt}
                    endTime={filterData[0]?.endAt}
                    user={user}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mb-[32px] block md:hidden">
              {/* my events */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex font-semibold text-[24px] my-0 md:my-4">
                  My events
                </div>
              </div>

              <div className="grid gap-[32px]">
                {filterData
                  ? filterData.map((val) => (
                      <EventCardTrainer
                        key={val._id}
                        id={val._id}
                        title={val.title}
                        trainer={val.createdBy}
                        trainee={val.trainee}
                        startedTime={val.startedAt}
                        endTime={val.endAt}
                        user={user}
                      />
                    ))
                  : ""}
              </div>
            </div>
            <div className="mb-[32px] block md:hidden">
              {/* overviews */}
              <div className="flex items-center gap-4">
                <div className="font-semibold text-[24px] my-[32px]">
                  Overview
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
                  <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                    Trainee Numbers
                  </p>
                  <p className="text-[24px] font-bold">127</p>
                </div>
                <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
                  <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                    Training hours
                  </p>
                  <p className="text-[24px] font-bold">127</p>
                </div>
                <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
                  <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                    Received tokens
                  </p>
                  <p className="text-[24px] font-bold">127</p>
                </div>
                <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
                  <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                    Rating Numbers
                  </p>
                  <p className="text-[24px] font-bold">127</p>
                </div>
              </div>
            </div>

            {/* reviews */}
            <div className="block md:hidden">
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
                  <ReviewBox
                    key={index}
                    point={item.point}
                    description={item.description}
                  />
                ))}
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            <div className="flex flex-col gap-8 mx-32 lg:mx-64">
              <div className="hidden md:block">
                <div className="text-3xl font-semibold">Welcome, Trainee</div>
                <div className="text-xl my-[32px]">Upcoming course</div>
                {filterData ? (
                  <EventCardTrainer
                    key={filterData[0]?._id}
                    id={filterData[0]?._id}
                    title={filterData[0]?.title}
                    trainer={filterData[0]?.createdBy}
                    trainee={filterData[0]?.trainee}
                    startedTime={filterData[0]?.startedAt}
                    endTime={filterData[0]?.endAt}
                    user={user}
                  />
                ) : (
                  ""
                )}
              </div>
              <Link
                to="/dashboard/myevents"
                className="hidden md:flex hover:text-white hover:border-none hover:bg-lightblue transition h-16 cursor-pointer border-black border-2 p-4 rounded-xl justify-between items-center text-black text-[20px]"
              >
                <p>My events</p>
                <Calendar />
              </Link>
              <Link
                to="/dashboard/addevents"
                className="hidden md:flex hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 justify-between items-center text-black text-[20px]"
              >
                <p>Add events</p>
                <CalendarPlus />
              </Link>
              <Link
                to="/dashboard/overview"
                className="hidden md:flex hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 justify-between items-center text-black text-[20px]"
              >
                <p>Overview</p>
                <ChartNoAxesColumnIncreasing />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
