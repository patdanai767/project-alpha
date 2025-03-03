import { motion } from "framer-motion";
import { Bell, Pencil, X } from "lucide-react";

export default function EventCardTrainer() {
  return (
    <div className="p-3 flex border border-black rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
        <div className="flex w-full justify-between">
          {/* text */}
          <div className="flex md:flex-row">
            <img className="size-[100px] md:size-[50px] object-cover bg-lime mr-4 rounded-lg border-none" />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="font-semibold text-[24px] md:text-[20px]">Trainer B</div>
                <div>Meeting 1</div>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <div className="block md:hidden">Thu, 23 Jan</div>
                <div className="block md:hidden">17:00 - 18:00</div>
              </div>
            </div>
          </div>
          {/* icons */}
          <div className="flex flex-col gap-3">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="block md:hidden items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-3 border-gray text-gray"
            >
              <Bell className="w-[20px] h-[20px]" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="block md:hidden items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-2 text-white bg-lightblue"
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
              className="block md:hidden items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-red"
            >
              <X className="w-[20px] h-[20px]" />
            </motion.div>
          </div>
        </div>
        <div className="flex w-full"><div className="hidden md:block w-full">Thu, 23 Jan</div>
          <div className="hidden md:block w-full">17:00 - 18:00</div></div>

        <div className="flex gap-3 justify-end">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-3 border-gray text-gray"
          >
            <Bell className="w-[20px] h-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-1 px-2 text-white bg-lightblue"
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
            className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-red"
          >
            <X className="w-[20px] h-[20px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
