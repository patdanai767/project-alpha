import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
  ChevronLeft,
} from "lucide-react";
import EventCardTrainer from "../../components/Card/EventCardTrainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Addevents() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState({
    title: "",
    description: "",
    trainee: "",
    startedAt: "",
    endAt: "",
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    const payload = { ...data, startedAt: startDate, endAt: endDate };
    console.log(payload);
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
              className="text-white bg-lightblue  transition h-16 cursor-pointer p-4 rounded-xl flex justify-between items-center text-[20px]"
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
          <div className="flex items-center gap-4">
            <ChevronLeft
              onClick={handleBack}
              className="flex cursor-pointer size-6"
            />
            <div className="font-semibold text-[24px] my-[32px]">
              Add events
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-full">
              <p className="text-[20px] font-medium mb-1">Title</p>
              <input
                onChange={handleChange}
                placeholder="Meeting"
                type="text"
                name="title"
                className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full text-black placeholder-gray"
              />
            </div>
            <div className="w-full">
              <p className="text-[20px] font-medium mb-1">Trainee</p>
              <select
                name="trainee"
                onChange={handleChange}
                className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full"
              >
                
                <option>a</option>
                <option>b</option>
                <option>c</option>
                <option>d</option>
              </select>
            </div>
          </div>
          <div className="mt-[32px]">
            <p className="text-[20px] font-medium mb-1">Description</p>
            <textarea
              name="description"
              onChange={handleChange}
              className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full overflow-x-scroll"
            />
          </div>
          <div className="flex mt-[32px] gap-8">
            <div className="w-full">
              <p className="text-[20px] font-medium mb-1">Start</p>
              <DatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="text-center cursor-pointer p-[10px] rounded-xl border border-lightblue bg-transparent w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-[20px] font-medium mb-1">End</p>
              <DatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="text-center cursor-pointer p-[10px] rounded-xl border border-lightblue bg-transparent w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <div
              onClick={handleClick}
              className="p-2 border-2 h-[50px] w-[200px] grid place-items-center rounded-[12px] bg-blue text-white hover:cursor-pointer"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
