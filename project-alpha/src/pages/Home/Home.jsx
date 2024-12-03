import React, { useState } from "react";

import {
  ArrowRight,
  ArrowUp,
  BicepsFlexed,
  Building2,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  HandCoins,
  Monitor,
  UserRoundPlus,
} from "lucide-react";
import Homecard from "../../components/Homecard";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="h-full flex flex-wrap flex-col relative overflow-hidden">
        {/* header */}
        <div className="w-full bg-yellow-50">
          <div className="max-w-[1920px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between font-bold px-8 lg:px-16 py-32 lg:py-64 gap-0 lg:gap-8 ">
            <div className="flex flex-col items-start text-left">
              <p className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                Do you have a Trainer ?
              </p>
              <p className="text-3xl lg:text-4xl mb-8">
                Let's started from here
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-blue-800 text-white text-2xl font-semibold border-none rounded-xl px-40 py-4 cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out">
                  <p>Start</p>
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div>
              <p className="bg-blue-800 text-blue-800 rounded px-56 sm:px-64 py-28 sm:py-32 mb-8 lg:mb-0">
                .
              </p>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full bg-blue-800 ">
          <div className="max-w-[1920px] mx-auto text-white text-center px-8 lg:px-16 py-16">
            <p className="text-3xl sm:text-4xl font-bold mb-8">
              Find the right trainer for you
            </p>
            <p className="text-xl mb-12">
              Personal trainer will ensure you for performing exercises
              correctly and efficiently
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto text-xl gap-16 font-bold">
              <div className="flex flex-col items-center gap-4 hover:text-cyan-300 transition duration-200 ease-in-out">
                <Dumbbell size={48} />
                <p>Exercise</p>
              </div>
              <div className="flex flex-col items-center gap-4 hover:text-cyan-300 transition duration-200 ease-in-out">
                <BicepsFlexed size={48} />
                <p>Effective</p>
              </div>
              <div className="flex flex-col items-center gap-4 hover:text-cyan-300 transition duration-200 ease-in-out">
                <CalendarClock size={48} />
                <p>Planning</p>
              </div>
              <div className="flex flex-col items-center gap-4 hover:text-cyan-300 transition duration-200 ease-in-out">
                <Monitor size={48} />
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
        {/* choose trainer */}
        <div className="w-full bg-yellow-50">
          <div className="max-w-[1920px] mx-auto flex-cols text-center px-8 lg:px-32 py-32">
            <p className="text-3xl sm:text-4xl font-bold mb-16">
              Trainers for you are here
            </p>
            <div className="flex items-center justify-center gap-16">
              <ChevronLeft className="cursor-pointer" />

              <div className="grid grid-cols-3 gap-8">
                <Homecard />
                <Homecard className="" />
                <Homecard className="" />
              </div>
              <ChevronRight className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* become a trainer */}
        <div className="bg-blue-800 text-white">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 lg:py-32 gap-0 lg:gap-8">
            <div className="border-cyan-300 border-2 sm:border-4 p-8 rounded-xl">
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 mb-4 hover:text-cyan-300 transition duration-200">
                <UserRoundPlus size={36} />
                <p>Find new customer</p>
              </div>
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 mb-4 hover:text-cyan-300 transition duration-200">
                <Building2 size={36} />
                <p>Grow your business</p>
              </div>
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 hover:text-cyan-300 transition duration-200">
                <HandCoins size={36} />
                <p>Earn income securely</p>
              </div>
            </div>
            <div className="flex flex-col items-start text-left lg:text-right">
              <p className="text-right lg:text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4 font-bold">
                Are you a Trainer ?
              </p>
              <p className="text-xl mb-8">
                Sign up to start training online with Project Alpha
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-white text-black text-2xl font-semibold border-none rounded-xl px-20 sm:px-28 lg:px-24 py-4 cursor-pointer hover:bg-cyan-300 transition duration-200 ease-in-out">
                  <p>Become a trainer</p>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* scroll to top button */}
          <div className="absolute right-8 bottom-[2.25%]">
            <button
              onClick={scrollToTop}
              className="bg-white text-black border-black border-2 px-4 py-4 rounded-xl hover:bg-cyan-300 transition duration-200 ease-in-out"
            >
              <ArrowUp />
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="w-full bg-blue-950">
          <div className="max-w-[1920px] mx-auto text-white px-8 pt-8 pb-8">
            <p>@PROJECT_ALPHA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
