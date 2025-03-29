import { Outlet } from "react-router-dom";
import SubNavbar from "../components/SubNavbar";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TNlayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
  }, []);
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
