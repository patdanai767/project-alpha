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
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import { config } from "../../config";

export default function Overviewevents() {
  const [currentPage, setCurrentPage] = useState(1); //หน้าปัจจุบัน
  const [filterData, setFilterData] = useState();
  const [user, setUser] = useState();
  const [myCourse, setMyCourse] = useState();
  const [reviews, setReviews] = useState([]);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resEvent = await axios.get(
        `${API_BASE_URL}/meeting/myMeeting`,
        config.headers()
      );
      const resCourse = await axios.get(
        `${API_BASE_URL}/course/myCourse`,
        config.headers()
      );
      const resUser = await axios.get(`${API_BASE_URL}/user/profile`, config.headers());
      setMyCourse(resCourse.data);
      setUser(resUser.data);
      setReviews(resCourse.data.rating);
      setFilterData(resEvent.data.filter((val) => val.status === "continue"));
    } catch (error) {
      throw new Error(error);
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const average = (array) => {
    if (array) {
      var total = 0;
      for (var i = 0; i < array.length; i++) {
        total += array[i].point;
      }
      return total / array.length;
    }
  };

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
        <div className="mb-[32px]">
          <div className="flex items-center gap-4">
            <ChevronLeft
              onClick={handleBack}
              className="flex cursor-pointer size-6"
            />
            <div className="font-semibold text-[24px] my-[32px]">Overview</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
              <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                Trainee Numbers
              </p>
              <p className="text-[24px] font-bold">{myCourse ? myCourse?.trainees.length: 0}</p>
            </div>
            <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
              <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                Training hours
              </p>
              <p className="text-[24px] font-bold">{myCourse ? (myCourse?.trainees.length * myCourse?.duration): 0}</p>
            </div>
            <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
              <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                Received tokens
              </p>
              <p className="text-[24px] font-bold">{myCourse ? (myCourse?.trainees.length * myCourse?.price): 0}</p>
            </div>
            <div className="border-2 border-gray rounded-xl h-32 p-4 grid justify-between">
              <p className="font-semibold text-[20px] md:text-[16px] lg:text-[20px]">
                Rating Numbers
              </p>
              <p className="text-[24px] font-bold">{average(reviews) ? `${average(reviews)}` : "0"}</p>
            </div>
          </div>
        </div>
        <div className="my-[32px]">
          <div className="text-[24px] mt-[32px]">My review</div>
          <div className="flex gap-1 mb-[32px]">
            <div className="flex items-center gap-1">
              <Star fill="#DDF344" className="w-[36px] h-[36px]" />
              <p className="text-[36px] font-bold">
                {average(reviews) ? `${average(reviews)}` : "0"}
              </p>
            </div>
            <p className="content-end mb-1 ml-1">
              from {reviews?.length} review
            </p>
          </div>
          {currentItems.map((item, index) => (
            <ReviewBox
              key={index}
              date={item.createdAt}
              fullname={item.createdBy.fullname}
              point={item.point}
              description={item.description}
              createdBy={item.createdBy}
            />
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
