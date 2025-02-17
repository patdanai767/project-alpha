import { motion } from "framer-motion";
import { Bell, Pencil, X } from "lucide-react";

export default function EventCardTrainer() {
  return (
    <div className="p-3 flex border border-black rounded-lg">
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
        <div className="flex gap-3">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-2 text-white bg-lightblue"
          >
            <Pencil className="w-[20px] h-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-red"
          >
            <X className="w-[20px] h-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-3 border-slate-500 text-slate-500"
          >
            <Bell className="w-[20px] h-[20px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
