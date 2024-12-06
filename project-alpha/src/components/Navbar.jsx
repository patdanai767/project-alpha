import React, { useState } from "react";
import { LogIn, Menu, User, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-800 text-white w-full flex items-center justify-between p-7 sm:p-6">
      <div className="flex items-center gap-8">
        <p className="text-lg font-bold cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
          PROJECT ALPHA
        </p>
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <a
            href="/search"
            className="cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out"
          >
            Choose trainers
          </a>
          <p className="cursor-pointer hover:text-cyan-300 transition duration-200 ease-in-out">
            Become a trainer
          </p>
        </div>
      </div>
      <div>
        <a
          href="/login"
          className="hidden sm:flex items-center gap-2 border-2 rounded-xl cursor-pointer px-4 py-1 hover:text-cyan-300 hover:border-cyan-300 transition duration-200 ease-in-out"
        >
          <LogIn />
          <div className="font-semibold ">Login</div>
        </a>
        <div
          onClick={toggleMenu}
          className="flex sm:hidden cursor-pointer hover:text-cyan-300 hover:border-cyan-300 transition duration-200 ease-in-out"
        >
          <Menu />
        </div>
      </div>

      {/* sidebar overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-25 z-40 transition ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      {/* sidebar menu */}
      <div
        className={`fixed top-0 right-0 w-60 h-screen p-7 bg-yellow-50 text-black text-xl font-semibold z-50 transform transition-transform duration-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-blue-800 pb-7">
          <a href="/login" className="flex items-center gap-2 cursor-pointer">
            <User className="bg-blue-200 rounded-sm p-1" />
            <p>Login</p>
          </a>
          <div
            onClick={toggleMenu}
            className="flex items-center cursor-pointer"
          >
            <X className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-blue-200" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <a
            href="/search"
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-blue-200"
          >
            Choose trainers
          </a>
          <a className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-blue-200">
            Become a trainer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
