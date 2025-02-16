import React, { useEffect, useState } from "react";
import {
  Bell,
  Heart,
  LogIn,
  Menu,
  MessageSquare,
  Square,
  User,
  X,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import DropdownProfile from "../Modal/DropdownProfile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { token } = useAuth();
  const authAction = useAuth();

  useEffect(() => {
    if (!token) {
      setIsMenuOpen(false);
      setIsProfileOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLogout = () => {
    try {
      authAction.logoutAction();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="bg-blue text-sky font-montserrat w-full flex items-center justify-between p-7 sm:p-6">
      <div className="flex items-center gap-8">
        <a
          href="/"
          className="text-lg font-bold cursor-pointer hover:text-lime transition duration-200 ease-in-out"
        >
          PROJECT ALPHA
        </a>
        <div className="hidden sm:flex gap-8 cursor-pointer">
          <a
            href="/search"
            className="cursor-pointer hover:text-lime transition duration-200 ease-in-out"
          >
            Choose trainers
          </a>
        </div>
      </div>
      <div>
        {token ? (
          <div className="sm:flex gap-8 items-center hidden">
            <motion.a
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/messenger"
            >
              <MessageSquare size={20} />
            </motion.a>
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={20} />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={20} />
            </motion.div>
            <div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleProfileMenu}
              >
                <Square size={28} color="yellow" />
              </motion.div>
              <DropdownProfile
                arr={"login"}
                setIsDropdownOpen={setIsProfileOpen}
                isDropdownOpen={isProfileOpen}
              />
            </div>
          </div>
        ) : (
          <a
            href="/login"
            className="hidden sm:flex items-center gap-2 border-2 rounded-xl cursor-pointer px-4 py-1 hover:text-lime hover:border-lime transition duration-200 ease-in-out"
          >
            <LogIn />
            <div className="font-semibold ">Login</div>
          </a>
        )}

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
      {token ? (
        <div
          className={`fixed top-0 right-0 w-60 h-screen p-7 bg-sky text-blue text-xl font-semibold z-50 transform transition-transform duration-200 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b-2 border-blue pb-7">
            <a href="/login" className="flex items-center gap-2 cursor-pointer">
              <User className="bg-lime rounded-sm p-1" />
              <p>Profile</p>
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
              Account
            </a>
            <a
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lime
          "
              href="/messenger"
            >
              Messages
            </a>
            <a
              href="/dashboard"
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lime
            "
            >
              Dashboard
            </a>
            <a
              className="w-full h-full mt-4 mb-4 p-2 rounded-xl cursor-pointer hover:bg-lime
          "
              href="/calendar"
            >
              Calendar
            </a>
          </div>
          <div className="flex border-t-2 border-blue pt-7">
            <a
              className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-lime
          "
              onClick={toggleLogout}
            >
              Log out
            </a>
          </div>
        </div>
      ) : (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
