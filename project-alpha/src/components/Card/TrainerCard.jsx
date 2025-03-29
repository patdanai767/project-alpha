import { CalendarDays, Clock, Target } from "lucide-react";
import React from "react";

export default function TrainerCard({thumbnail,title}) {
  return (
    <div className="border h-[408px] w-[232px] rounded-lg border-black p-[16px]">
      <div className="w-[200px] h-[200px] bg-lime rounded-xl ">
        <img src={thumbnail} className="h-full w-full object-cover rounded-xl"/>
      </div>
      <div className="text-[20px] font-semibold mt-[16px]">
        <p>{title}</p>
        <div className="flex items-center gap-1">
          <Target className="w-[20px] h-[20px]" />
          <p className="font-thin">Weight training</p>
        </div>
      </div>
      <div className="text-[16px] font-thin">
        <div className="mt-1 flex items-center gap-1">
          <CalendarDays className="w-[16px] h-[16px]" />
          <p>Mon - Fri</p>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-[16px] h-[16px]"/>
          <p>16:00 - 19:00</p>
        </div>
      </div>
      <div className="text-[20px] text-green font-semibold mt-2">
        3 Days Left
      </div>
    </div>
  );
}
