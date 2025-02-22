import React, { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  ArrowUp,
  BicepsFlexed,
  Building2,
  CalendarClock,
  Dumbbell,
  HandCoins,
  Monitor,
  Repeat,
  UserRoundPlus,
} from "lucide-react";
import Homecard from "../../components/Card/Homecard";
import { trainersData } from "../../constants/assets";
import {
  animate,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    const duration = setInterval(next, 3000);
    return () => clearInterval(duration);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { scrollY } = useScroll();

  // background motion
  const textTransform = useTransform(scrollY, [0, 350], [0, 250]);
  const imgTransform = useTransform(scrollY, [0, 350], [0, 228]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const descInView = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const chooseInView = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const becomeTrainerInView = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  console.log(trainersData);

  const next = () => {
    setIsNext(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % trainersData.length);
      setIsNext(false);
    }, 300);
  };

  return (
    <>
      <div className="h-full flex flex-wrap flex-col relative overflow-hidden font-montserrat">
        {/* header */}
        <div className="w-full bg-sky z-0">
          <motion.div
            className="max-w-[1920px] mx-auto flex flex-col sm:flex-row-reverse items-center justify-center px-8 lg:px-16 py-16 gap-0 lg:gap-8 z-10"
            initial="initial"
            animate="animate"
            variants={fadeInAnimation}
          >
            <motion.div className="flex justify-center">
              <img src="/bg-homepage.png" alt="bg-home" className="w-[700px]" />
            </motion.div>
            <motion.div className="flex flex-col items-start text-left lg:text-right">
              <p className="text-blue font-bold text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4">
                Do you have a Trainer ?
              </p>
              <p className="text-lightblue font-semibold text-left text-2xl sm:text-3xl lg:text-4xl mb-8">
                Let's started from here
              </p>
              <div>
                <button className="flex mx-auto items-center gap-4 bg-blue text-lime text-2xl font-semibold border-none rounded-xl px-20 sm:px-28 lg:px-36 py-4 cursor-pointer hover:bg-blue/20 hover:text-blue transition duration-200 ease-in-out">
                  <p className="mb-1">Start</p>
                  <ArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* description */}
        <div className="w-full bg-lightblue">
          <div className="max-w-[1920px] mx-auto text-sky text-center px-8 lg:px-16 py-36">
            <motion.div
              variants={descInView}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-lime text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                Find the right trainer for you
              </p>
              <p className="text-xl sm:text-2xl font-semibold mb-8">
                Personal trainer will ensure you for performing exercises
                correctly and efficiently
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:flex items-center justify-center text-xl lg:text-2xl font-bold">
              <motion.div
                className="group flex flex-col items-center mx-16 my-8"
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Dumbbell
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Exercise
                </p>
              </motion.div>
              <motion.div
                className="group flex flex-col items-center mx-16 my-8"
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <BicepsFlexed
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Effective
                </p>
              </motion.div>
              <motion.div
                className="group flex flex-col items-center mx-16 my-8"
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <CalendarClock
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Planning
                </p>
              </motion.div>
              <motion.div
                className="group flex flex-col items-center mx-16 my-8"
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Monitor
                  size={48}
                  className=" group-hover:text-lime group-hover:scale-110 transition duration-200 ease-in-out mb-4"
                />
                <p className=" group-hover:text-lime transition duration-200 ease-in-out">
                  Online
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* choose trainer */}
        <div className="w-full bg-sky">
          <div className="max-w-[1920px] mx-auto text-center px-8 lg:px-32 py-40">
            <motion.div
              variants={chooseInView}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-blue text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                Trainers for you are here
              </p>
              <p className="text-green text-xl sm:text-2xl font-semibold mb-16">
                choose me ! we are waiting for you
              </p>
            </motion.div>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                className="flex cursor-pointer translate transition duration-300 ease-in-out"
                key={trainersData[index].id}
                initial={{ opacity: 0, rotateY: -90, x: -100 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 90, x: 100 }}
                transition={{ duration: 0.05, ease: "easeOut" }}
              >
                <Homecard
                  name={trainersData[index].name}
                  image={trainersData[index].image}
                  category={trainersData[index].category}
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* become a trainer */}
        <div className="w-full bg-blue text-sky">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-16 py-36 gap-0 lg:gap-8">
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <img
                src="/bg-homeTrainer.png"
                alt="bg-trainer"
                className="w-[700px]"
              />
            </motion.div>
            <div>
              <motion.div
                className="flex flex-col items-start text-left lg:text-right"
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <p className="cursor-pointer text-lime text-left text-4xl sm:text-5xl lg:text-6xl mt-8 lg:mt-0 mb-4 font-bold">
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
              </motion.div>
              <div className="flex flex-col justify-center mb-16">
                <motion.div
                  className="flex items-center text-2xl sm:text-3xl gap-8 mt-8 hover:text-lime hover:scale-105 transition duration-200"
                  variants={becomeTrainerInView}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <UserRoundPlus size={36} />
                  <p className="cursor-pointer">Find new customer</p>
                </motion.div>
                <motion.div
                  className="flex items-center text-2xl sm:text-3xl gap-8 mt-8 hover:text-lime hover:scale-105 transition duration-200"
                  variants={becomeTrainerInView}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Building2 size={36} />
                  <p className="cursor-pointer">Grow your business</p>
                </motion.div>
                <motion.div
                  className="flex items-center text-2xl sm:text-3xl gap-8 mt-8 hover:text-lime hover:scale-105 transition duration-200"
                  variants={becomeTrainerInView}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <HandCoins size={36} />
                  <p className="cursor-pointer">Earn income securely</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* scroll to top button */}
          <div className="absolute right-8 bottom-[1.65%]">
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
