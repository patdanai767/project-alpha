import MessageCard from "../../components/Card/MessageCard";
import { Send } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Messenger() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full min-h-dvh bg-sky flex flex-col">
      <Navbar />
      <div className="flex flex-grow ">
        <div className=" w-1/4 border-r border-blue px-[32px] py-[16px] overflow-auto">
          <div className="flex justify-center text-xl font-semibold pb-[16px]">
            Messenger
          </div>
          <div className="grid grid-cols-1 gap-[16px]">
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="p-[32px] bg-lightblue text-white text-[20px]">
            Trainer A
          </div>
          <div className="px-[32px] flex-grow">Chat</div>
          <div className="bg-lightblue">
            <div className="flex p-[32px] gap-[8px] items-center">
              <input
                type="text"
                className="h-[50px] rounded-[12px] w-full px-4"
                placeholder="Text"
              />
              <div className="p-[13px] bg-sky rounded-[12px]">
                <Send color="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
