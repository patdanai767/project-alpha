import React, { useState } from "react";
import { LogIn, Menu, User, X } from "lucide-react";

const SubNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[70px] bg-transparent w-full mx-auto">
      <div className=" flex items-center gap-[32px] w-full h-[70px] bottom-2 text-blue border-b border-blue">
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <a
            href="/"
            className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out ml-7 gap-10 "
          >
            Home
          </a>
          <a
            href="/search"
            className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out gap-10"
          >
            Account
          </a>
          <p className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out gap-10">
            Messages
          </p>
          <p className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out gap-10">
            Dashboard
          </p>
          <p className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out gap-10">
            Profile
          </p>
          <p className="font-semibold cursor-pointer hover:underline transition duration-200 ease-in-out gap-10">
            Calendar
          </p>
        </div>
      </div>
      <div>
        <div
          onClick={toggleMenu}
          className="flex sm:hidden cursor-pointer hover:text-lime hover:border-lime transition duration-200 ease-in-out"
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
        className={`fixed top-0 right-0 w-60 h-screen p-7 bg-sky text-blue text-xl font-semibold z-50 transform transition-transform duration-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-blue pb-7">
          <a href="/login" className="flex items-center gap-2 cursor-pointer">
            <User className="bg-lime rounded-sm p-1" />
            <p>Login</p>
          </a>
          <div
            onClick={toggleMenu}
            className="flex items-center cursor-pointer"
          >
            <X
              className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-lime
            "
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <a
            href="/search"
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lime
            "
          >
            Choose trainers
          </a>
          <a
            className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lime
          "
          >
            Become a trainer
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
