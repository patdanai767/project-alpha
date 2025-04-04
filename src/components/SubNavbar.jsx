import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { config } from "../config";

const SubNavbar = () => {
  const [user, setUser] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/user/profile`, config.headers());
      setUser(res.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className=" flex items-center gap-[32px] w-full sm:h-[70px] h-[0px] bottom-2 text-blue border-b border-blue">
      {user.role === "admin" || user.role === "trainer" ? (
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/"
            className="font-semibold cursor-pointer ml-7 gap-10 "
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/account"
            className="font-semibold cursor-pointer gap-10"
          >
            Account
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/messenger"
            className="font-semibold cursor-pointer gap-10"
          >
            Messages
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/profile"
            className="font-semibold cursor-pointer gap-10"
          >
            Profile
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            className="font-semibold cursor-pointer gap-10"
            href="/dashboard"
          >
            My Course
          </motion.a>
        </div>
      ) : (
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/"
            className="font-semibold cursor-pointer ml-7 gap-10 "
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/account"
            className="font-semibold cursor-pointer gap-10"
          >
            Account
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/messenger"
            className="font-semibold cursor-pointer gap-10"
          >
            Messages
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
            }}
            href="/mycourse"
            className="font-semibold cursor-pointer gap-10"
          >
            My Course
          </motion.a>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
