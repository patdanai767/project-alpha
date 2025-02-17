import { Link } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";

export default function Overviewevents() {
  return (
    <div className="flex justify-center">
      <div className=" w-1/4 border-r border-blue py-[16px] overflow-auto">
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
        <div className="text-[36px] font-semibold">Welcome, Trainee</div>
        <div className="my-[32px]">
          <div className="text-[24px] my-[32px]">Upcoming course</div>
          <EventCardTrainer />
        </div>
        <div className="mb-[32px]">
          <div className="text-[24px] my-[32px]">Overview</div>
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
          <div className="text-[24px] my-[32px]">My review</div>
        </div>
      </div>
    </div>
  );
}
