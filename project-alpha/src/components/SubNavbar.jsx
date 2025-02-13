import React, { useState } from "react";
import { motion } from "framer-motion";

const SubNavbar = () => {
  return (
    <div className=" flex items-center gap-[32px] w-full sm:h-[70px] h-[0px] bottom-2 text-blue border-b border-blue">
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
          href="/dashboard"
          className="font-semibold cursor-pointer gap-10"
        >
          Dashboard
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.8,
          }}
          href="profile"
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
        >
          Calendar
        </motion.a>
      </div>
    </div>
  );
};

export default SubNavbar;
