import React, { useEffect, useState } from "react";
import {
  Activity,
  Bell,
  ChevronDown,
  Coins,
  Dumbbell,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  LogIn,
  Menu,
  MessageSquare,
  Plus,
  Smile,
  Square,
  User,
  X,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";
import DropdownProfile from "../Modal/DropdownProfile";
import axios from "axios";
import { config } from "../../config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState({});
  const { token } = useAuth();
  const authAction = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!token) {
      setIsMenuOpen(false);
      setIsProfileOpen(false);
    } else {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${API_BASE_URL}/user/profile`, config.headers());
          setUser(res.data);
        } catch (error) {
          throw new Error(error);
        }
      };
      fetchData();
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
          className="group flex items-center text-lg font-bold cursor-pointer hover:text-lime transition duration-200 ease-in-out"
        >
          <p className="mr-1 z-20">Trainer<span className="mr-[13.5px]"></span><span className="mr-[1.5px]">ext</span></p>
          <div className="relative">
            <Activity strokeWidth={3} className="absolute size-5 top-[-13px] right-[30px] z-10" />
            <Heart strokeWidth={2} className="absolute size-[34px] top-[-19px] right-[25.5px] text-lightblue z-0" />
          </div>
          

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
              className="cursor-pointer text-lime"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/token"
            >
              <div className="flex border-[3px] px-4 py-1 gap-3 rounded-xl items-center border-lime">
                <Coins size={20} />
                <div>{user.coin}</div>
                <div className="hidden md:block">Tokens</div>
                <Plus size={20} />
              </div>
            </motion.a>
            <motion.a
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/messenger"
            >
              <MessageSquare size={20} />
            </motion.a>
            <motion.a
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/favorite"
            >
              <Heart size={20} />
            </motion.a>
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={20} />
            </motion.div>
            <div>
              <motion.div
                className="cursor-pointer h-[40px] w-[40px] bg-lime rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleProfileMenu}
              >
                <img
                  src={user.profileImage}
                  className="h-[40px] w-[40px] object-cover rounded"
                />
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
        className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-25 z-40 transition ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      ></div>
      {/* sidebar menu */}
      {token ? (
        <div
          className={`fixed top-0 right-0 w-60 h-screen p-7 bg-sky text-blue text-xl font-semibold z-50 transform transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <a
                href="/login"
                className="flex items-center gap-2 cursor-pointer"
              >
                <User className="bg-lime rounded-sm p-1" />
                <p>Profile</p>
              </a>
              <div
                onClick={toggleMenu}
                className="flex items-center cursor-pointer"
              >
                <X className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-lightblue/20" />
              </div>
            </div>
            <div className="border-b-2 border-blue pb-7">
              <a
                href="/token"
                className="mt-5 px-2 py-2 flex justify-between gap-2 text-green rounded-lg border-2 border-green hover:bg-lime cursor-pointer"
              >
                <div className="flex gap-2">
                  <Coins className="" />
                  <div>{user.coin}</div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <Plus className="w-full h-full rounded-xl hover:bg-lime" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="/search"
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
            "
            >
              Search
            </a>
            <a
              href="/account"
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
            "
            >
              Account
            </a>
            {user.role === "trainer" ? (
              <a
                className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20"
                href="/profile"
              >
                Profile
              </a>
            ) : (
              ""
            )}
            <a
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
          "
              href="/messenger"
            >
              Messages
            </a>
            <a
              href={user.role === "trainer" ? `/dashboard` : `/mycourse`}
              className="w-full h-full mt-4 mb-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
            "
            >
              My course
            </a>
          </div>
          <div className="flex border-t-2 border-blue pt-7">
            <a
              className="w-full h-full text-red p-2 rounded-xl cursor-pointer hover:bg-red/20
          "
              onClick={toggleLogout}
            >
              Log out
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`fixed top-0 right-0 w-60 h-screen p-7 bg-sky text-blue text-xl font-semibold z-50 transform transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
                className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
            "
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <a
              href="/search"
              className="w-full h-full mt-4 p-2 rounded-xl cursor-pointer hover:bg-lightblue/20
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
