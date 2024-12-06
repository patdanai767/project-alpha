import React from "react";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white w-full flex items-center justify-between p-6">
      <div className="flex items-center gap-8">
        <a href="/" className="text-lg font-bold cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
          PROJECT ALPHA
        </a>
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <a href="/search" className="cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
            Choose trainers
          </a>
          <p className="cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
            Become a trainer
          </p>
          <p className="cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
            Message
          </p>
        </div>
      </div>
      <a href="/login" className="flex items-center gap-2 border-2 rounded-xl cursor-pointer px-4 py-1 hover:text-cyan-300 hover:border-cyan-300 transition duration-200 ease-in-out">
        <LogIn />
        <div className="font-semibold ">Login</div>
      </a>
    </div>
  );
};

export default Navbar;
