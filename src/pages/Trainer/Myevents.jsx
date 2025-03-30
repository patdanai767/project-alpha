import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
  ChevronLeft,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../config";

export default function Myevents() {
  const [user, setUser] = useState();
  const [filterData, setFilterData] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/meeting/myMeeting`, config.headers());
      const resUser = await axios.get(`${API_BASE_URL}/user/profile`, config.headers());
      setUser(resUser.data);
      setFilterData(res.data.filter((val) => val.status === "continue"));
    } catch (error) {
      throw new Error(error);
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center">
      <div className="hidden md:block w-1/4 border-r border-blue py-[16px] overflow-auto">
        <div className="p-[32px]">
          <div className="grid gap-4">
            <Link
              to="/dashboard/myevents"
              className="text-white bg-lightblue transition h-16 cursor-pointer p-4 rounded-xl flex justify-between items-center text-[20px]"
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
              className="hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 flex justify-between items-center text-black text-[20px]"
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
          <div className="flex items-center gap-4 mb-8">
            <ChevronLeft
              onClick={handleBack}
              className="flex cursor-pointer size-6"
            />
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
      </div>
    </div>
  );
}
