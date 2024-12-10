import React, { useEffect, useState } from "react";

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
import { trainersData } from "../../assets/assets";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const next = () => {
    setIsNext(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % trainersData.length);
      setIsNext(false);
    }, 300);
  };

  useEffect(() => {
    const duration = setInterval(next, 3000);

    return () => clearInterval(duration);
  }, []);

  return (
    <>
      <div className="h-full flex flex-wrap flex-col relative overflow-hidden font-montserrat">
        {/* header */}
        <div className="w-full bg-sky">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-evenly px-8 lg:px-16 py-36 lg:py-64 gap-0 lg:gap-8">
            <div className="border-blue border-2 sm:border-4 px-40 sm:px-56 py-20 sm:py-28 rounded-xl"></div>
            <div className="flex flex-col items-start text-left lg:text-right">
              <p className="text-blue font-bold text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4">
                Do you have a Trainer ?
              </p>
              <p className="text-lightblue font-semibold text-left text-2xl sm:text-3xl lg:text-4xl mb-8">
                Let's started from here
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-blue text-lime text-2xl font-semibold border-none rounded-xl px-20 sm:px-28 lg:px-36 py-4 cursor-pointer hover:bg-green transition duration-200 ease-in-out">
                  <p className="mb-1">Start</p>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full bg-lightblue">
          <div className="max-w-[1920px] mx-auto text-sky text-center px-8 lg:px-16 py-36">
            <p className="text-lime text-3xl sm:text-4xl font-bold mb-8">
              Find the right trainer for you
            </p>
            <p className="text-xl sm:text-2xl font-semibold mb-8">
              Personal trainer will ensure you for performing exercises
              correctly and efficiently
            </p>
            <div className="grid grid-cols-2 md:flex items-center justify-center text-xl lg:text-2xl font-bold">
              <div className="group flex flex-col items-center mx-16 my-8">
                <Dumbbell
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Exercise
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <BicepsFlexed
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Effective
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <CalendarClock
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Planning
                </p>
              </div>
              <div className="group flex flex-col items-center mx-16 my-8">
                <Monitor
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* choose trainer */}
        <div className="w-full bg-sky">
          <div className="max-w-[1920px] mx-auto text-center px-8 lg:px-32 py-40">
            <p className="text-blue text-3xl sm:text-4xl font-bold mb-8">
              Trainers for you are here
            </p>
            <p className="text-green text-xl sm:text-2xl font-semibold mb-16">
              choose me ! we are waiting for you
            </p>
            <div className="flex items-center justify-center gap-8">
              <div
                className={`flex cursor-pointer translate transition duration-300 ease-in-out ${
                  isNext ? "opacity-0 scale-90" : "opacity-100"
                }`}
              >
                <Homecard
                  key={trainersData[index].id}
                  name={trainersData[index].name}
                  image={trainersData[index].image}
                  category={trainersData[index].category}
                />
              </div>
            </div>
          </div>
        </div>
        {/* become a trainer */}
        <div className="w-full bg-blue text-sky">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-16 py-36 gap-0 lg:gap-8">
            <div className=" border-lime border-2 sm:border-4 p-8 rounded-xl">
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 mb-4 hover:text-lime hover:scale-105 transition duration-200">
                <UserRoundPlus size={36} />
                <p>Find new customer</p>
              </div>
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 mb-4 hover:text-lime hover:scale-105 transition duration-200">
                <Building2 size={36} />
                <p>Grow your business</p>
              </div>
              <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl gap-8 hover:text-lime hover:scale-105 transition duration-200">
                <HandCoins size={36} />
                <p>Earn income securely</p>
              </div>
            </div>
            <div className="flex flex-col items-start text-left lg:text-right">
              <p className="text-lime text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4 font-bold">
                Are you a Trainer ?
              </p>
              <p className="text-xl text-left sm:text-2xl font-semibold mb-8">
                Sign up to start training online with Project Alpha
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-sky text-blue text-2xl font-semibold border-none rounded-xl px-12 sm:px-24 py-4 cursor-pointer hover:bg-lime transition duration-200 ease-in-out">
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
              className="bg-sky text-blue border-blue border-2 px-4 py-4 rounded-xl hover:bg-lime transition duration-200 ease-in-out"
            >
              <ArrowUp />
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="w-full bg-green">
          <div className="max-w-[1920px] mx-auto text-sky px-8 pt-8 pb-8">
            <p>@PROJECT_ALPHA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
