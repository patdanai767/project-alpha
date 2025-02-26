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
            await axios.post("/api/coins", payload, config.headers());
            window.location.reload();
          });
        }
      });
    } catch (error) {
      throw new Error("Something is gone wrong : ", error);
    }
  };

  return (
    <div>
      <div className="h-[76vh] flex justify-center mt-[74px]">
        <div className="md:w-[60%]">
          <div className="text-[48px] text-blue font-bold">Buy token</div>
          <div className="mt-24 flex gap-4">
            <div className="grid md:grid-cols-3 w-[50%] gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(10)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>10 Tokens</div>
                  <div>35 THB</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(35)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>35 Tokens</div>
                  <div>99 THB</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(100)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>100 Tokens</div>
                  <div>199 THB</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(300)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>300 Tokens</div>
                  <div>499 THB</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(700)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>700 Tokens</div>
                  <div>999 THB</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer bg-lime rounded-xl py-8 px-6 justify-items-center border-black border-[3px]"
                onClick={() => handleBuy(1500)}
              >
                <Coins color="green" height={48} width={48} />
                <div className="text-[20px] grid gap-2 text-center font-semibold mt-4">
                  <div>1500 Tokens</div>
                  <div>1,999 THB</div>
                </div>
              </motion.div>
            </div>
            <div className="w-[40%]">
              <img className="" src="/token-pic.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-green">
        <div className="max-w-[1920px] mx-auto text-sky px-8 pt-8 pb-8">
          <p>@PROJECT_ALPHA</p>
        </div>
      </div>
    </div>
  );
}
