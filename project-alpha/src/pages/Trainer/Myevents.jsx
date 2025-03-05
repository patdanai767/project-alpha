import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
  ChevronLeft,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";

export default function Myevents() {

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
          <EventCardTrainer />
        </div>
        </div>
        <div className="mb-[32px]">
          
          <div className="flex items-center gap-4 mb-8">
            <ChevronLeft onClick={handleBack} className="flex cursor-pointer size-6"/>
            <div className="flex font-semibold text-[24px] my-0 md:my-4">My events</div>
          </div>
          
          <div className="grid gap-[32px]">
            <EventCardTrainer />
            <EventCardTrainer />
            <EventCardTrainer />
            <EventCardTrainer />
          </div>
        </div>
      </div>
    </div>
  );
}
