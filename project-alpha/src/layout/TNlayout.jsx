import { Outlet } from "react-router-dom";
import SubNavbar from "../components/SubNavbar";
import { motion } from "framer-motion";

export default function TNlayout() {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1,
      }}
      initial={{
        x: -25,
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeIn",
      }}
      className="bg-sky h-full"
    >
      <SubNavbar />
      <Outlet />
    </motion.div>
  );
}
