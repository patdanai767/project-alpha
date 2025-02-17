import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  CalendarPlus,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

function Dashboard() {
  return (
    <motion.div className="w-full h-screen bg-sky flex flex-col">
      <div className="flex flex-grow ">
        <div className=" w-1/4 border-r border-blue py-[16px] overflow-auto">
          <div className="p-[32px]">
            <div className="grid gap-4">
              <Link to="/dashboard/myevents" className="hover:text-white hover:border-none hover:bg-lightblue transition h-16 cursor-pointer border-black border-2 p-4 rounded-xl flex justify-between items-center text-black text-[20px]">
                <p>My events</p>
                <Calendar />
              </Link>
              <Link to="/dashboard/addevents" className="hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 flex justify-between items-center text-black text-[20px]">
                <p>Add events</p>
                <CalendarPlus />
              </Link>
              <Link to="/dashboard/overview" className="hover:text-white hover:border-none hover:bg-lightblue transition cursor-pointer border-black border-2 p-4 rounded-xl h-16 flex justify-between items-center text-black text-[20px]">
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
