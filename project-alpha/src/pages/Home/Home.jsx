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
import Homecard from "../../components/Card/Homecard";
import {trainersData} from "../../constants/assets"

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(trainersData)

  const [index, setIndex] = useState(0);

  console.log(index)

  const next = () => {
    setIndex((prev) => (prev + 1) % trainersData.length);
  };
  const previous = () => {
    setIndex((prev) => (prev - 1 + trainersData.length) % trainersData.length);
  };

  return (
    <>
      <div className="h-full flex flex-wrap flex-col relative overflow-hidden">
        {/* header */}
        <div className="w-full bg-yellow-50">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-evenly px-8 lg:px-16 py-16 lg:py-64 gap-0 lg:gap-8 font-bold">
            <div className="border-blue-800 border-2 sm:border-4 px-40 sm:px-56 py-20 sm:py-28 rounded-xl"></div>
            <div className="flex flex-col items-start text-left lg:text-right">
              <p className="text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4">
                Do you have a Trainer ?
              </p>
              <p className="text-left text-2xl sm:text-3xl lg:text-4xl mb-8">
                Let's started from here
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-blue-800 text-white text-2xl font-semibold border-none rounded-xl px-20 sm:px-28 lg:px-36 py-4 cursor-pointer hover:bg-blue-500 transition duration-200 ease-in-out">
                  <p className="mb-1">Start</p>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full bg-blue-800 ">
          <div className="max-w-[1920px] mx-auto text-white text-center px-8 lg:px-16 py-16">
            <p className="text-3xl sm:text-4xl font-bold mb-8">
              Find the right trainer for you
            </p>
            <p className="text-xl mb-8">
              Personal trainer will ensure you for performing exercises
              correctly and efficiently
            </p>
            <div className="grid grid-cols-2 md:flex items-center justify-center text-xl font-bold">
              <div className="group flex flex-col items-center mx-16 my-8">
                <Dumbbell
                  size={48}
                  className=" group-hover:text-cyan-300 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-cyan-300 transition duration-200 ease-in-out">
                  Exercise
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <BicepsFlexed
                  size={48}
                  className=" group-hover:text-cyan-300 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-cyan-300 transition duration-200 ease-in-out">
                  Effective
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <CalendarClock
                  size={48}
                  className=" group-hover:text-cyan-300 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-cyan-300 transition duration-200 ease-in-out">
                  Planning
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <Monitor
                  size={48}
                  className=" group-hover:text-cyan-300 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-cyan-300 transition duration-200 ease-in-out">
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* choose trainer */}
        <div className="w-full bg-yellow-50">
          <div className="max-w-[1920px] mx-auto text-center px-8 lg:px-32 py-32">
            <p className="text-3xl sm:text-4xl font-bold mb-16">
              Trainers for you are here
            </p>
            <div className="flex items-center justify-center gap-8">
              <div onClick={previous} className="flex cursor-pointer">
                <ChevronLeft />
              </div>
              <div className="flex cursor-pointer gap-8">
                {trainersData.slice(index,(index+3)).map((val) => 
                <Homecard
                  key={val.id}
                  name={val.name}
                  image={val.image}
                  category={val.category}
                />
                )}
              </div>
              <div onClick={next} className="flex cursor-pointer">
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
        {/* become a trainer */}
        <div className="w-full bg-blue-800 text-white">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-16 py-16 lg:py-32 gap-0 lg:gap-8">
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
              <p className="text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4 font-bold">
                Are you a Trainer ?
              </p>
              <p className="text-xl mb-8">
                Sign up to start training online with Project Alpha
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-white text-black text-2xl font-semibold border-none rounded-xl px-12 sm:px-24 py-4 cursor-pointer hover:bg-cyan-300 transition duration-200 ease-in-out">
                  <p className="mb-1">Become a trainer</p>
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
