import { motion } from "framer-motion";

export default function MessageCard() {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        y: -25,
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
      whileHover={{
        scale: 1.03,
        backgroundColor: "rgba(112, 128, 144, .2)",
      }}
      className="flex gap-[16px] items-center px-[32px] cursor-pointer p-2"
    >
      <div className="h-[55px] w-[55px] bg-lime rounded-full">
        <img src="" alt="profile" />
      </div>
      <div className="flex-1 gap-[8px] mb-[8px]">
        <div className="justify-between flex">
          <div className="text-[20px] font-semibold">Trainer A</div>
          <div>22 Dec</div>
        </div>
        <div>Hello, user...</div>
      </div>
    </motion.div>
  );
}
