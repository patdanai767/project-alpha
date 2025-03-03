import React from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function EventCard() {
  return (
    <div className="p-3 flex border mx-14 border-black rounded-lg">
      <div className="flex items-center w-full justify-between">
        <div className="flex">
          <img className="w-[50px] h-[50px] object-cover bg-lime mr-4 rounded-lg border-none" />
          <div>
            <div className="font-semibold text-[20px]">Trainer B</div>
            <div>Meeting 1</div>
          </div>
        </div>
        <div>Thu, 23 Jan</div>
        <div>17:00 - 18:00</div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="items-center gap-1 flex cursor-pointer rounded-lg border p-1 px-6 border-slate-500 text-slate-500"
        >
          <div>Cancel reminder</div> <Bell className="w-[20px] h-[20px]"/>
        </motion.div>
      </div>
    </div>
  );
}
