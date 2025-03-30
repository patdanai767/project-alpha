import React, { useEffect } from "react";
import { Coins } from "lucide-react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import { config } from "../../config";

export default function Token() {
  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
  }, []);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleBuy = async (token) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showConfirmButton: "Buy",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            title: "Thank you!",
            icon: "success",
            timer: 2000,
          }).then(async () => {
            const payload = {
              coin: token,
              status: "add",
            };
            await axios.post(`${API_BASE_URL}/coins`, payload, config.headers());
            window.location.reload();
          });
        }
      });
    } catch (error) {
      throw new Error("Something is gone wrong : ", error);
    }
  };

  return (
    <div className="h-full flex flex-wrap flex-col relative overflow-hidden">
      <div className="w-full bg-sky z-0">
        <div className="flex mt-16 mb-16 md:mb-48 max-w-[1920px] mx-auto">
          <div className="flex flex-col justify-center mx-auto md:mx-16 lg:mx-32 xl:mx-52">
            <div className="flex justify-center md:justify-start text-3xl sm:text-4xl md:text-5xl text-blue font-bold">
              Buy token
            </div>
            <div className="mt-0 md:mt-16 flex flex-col-reverse md:flex-row text-[16px] sm:text-[20px]">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-auto mx-16 md:mx-0 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(10)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">10 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">35 THB</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(35)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">35 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">99 THB</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(100)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">100 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">199 THB</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(300)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">300 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">499 THB</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(700)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">700 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">999 THB</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row md:flex-col justify-between items-center cursor-pointer bg-lime px-4 md:px-16 py-4 rounded-xl font-semibold justify-items-center border-black border-[3px] gap-2"
                  onClick={() => handleBuy(1500)}
                >
                  <div className="flex flex-row md:flex-col items-center gap-4 text-center font-semibold">
                    <Coins color="green" className="size-6 sm:size-9 md:size-12" />
                    <div className="text-wrap md:text-nowrap">1500 Tokens</div>
                  </div>
                  <div className="text-wrap md:text-nowrap">1,999 THB</div>
                </motion.div>
              </div>
              <div className="ml-32 mr-32 md:ml-16 md:mr-0 mb-16 md:mb-0">
                <img
                  className="w-[400px] md:block hidden"
                  src="/token-pic.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-green">
          <div className="max-w-[1920px] mx-auto text-sky px-8 pt-8 pb-8">
            <p>@TrainerNext</p>
          </div>
        </div>
      </div>
    </div>
  );
}
