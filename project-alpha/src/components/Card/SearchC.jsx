import React, { useEffect, useState } from "react";
import HeartButton from "../Button/HeartButton";
//import Star from '../../assets/Starbutton.jsx'
import VerifySym from "../../assets/VerifySymbol.svg";
import PeopleLogo from "../../assets/PeopleLogo.svg";
import DurationLogo from "../../assets/durationLogo.svg";
import GraduationCap from "../../assets/GraduationCap.svg";
import { Clock, Calendar, Star, Target, X } from "lucide-react";

const Searchcard = ({
  title,
  description,
  price,
  duration,
  thumbnail,
  category,
}) => {
  const [isOpen1, setIsOpen1] = useState(false); // State สำหรับการเปิด/ปิด messagebox
  const [message, setMessage] = useState(""); // เก็บข้อความ

  const toggleMessage = () => {
    setIsOpen1(!isOpen1);
  }; // ฟังก์ชันสำหรับเปิด/ปิด messagebox

  const handleSend = () => {
    if (message.trim() === "") {
      alert("Please enter a message!"); // กันส่งข้อความว่าง
      return;
    }

    console.log("Message sent:", message); // หรือส่งไป backend
    setMessage(""); // เคลียร์ช่องข้อความหลังส่ง
  };

  return (
    <div className="py-4 ">
      <div>
        <div className="lg:border-[2px] border-black border-b-[2px] h-[400px] lg:w-[1024px] w-[100vw] lg:rounded-xl pt-[30px] pb-[30px] lg:pr-[35px] lg:pl-[35px] pr-[17px] pl-[17px] flex justify-between ">
          <div className="flex flex-col md:justify-between">
            <div className="md:h-[200px] md:w-[200px] h-[150px] w-[150px] bg-lime rounded-xl">
              <img src={thumbnail} className="rounded-xl object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
            </div>
            <div>
              <div className="mb-[10px] flex">
                <Calendar className="w-[16px] h-[16px] mt-[4px]" />{" "}
                <div className="ml-[8px] font-montserrat font-semibold">
                  Mon - Fri
                </div>{" "}
              </div>
              <div className="flex">
                <Clock className="w-[16px] h-[16px] mt-[4px]" />{" "}
                <div className="ml-[8px] font-montserrat font-semibold">
                  16 : 00 - 19:00
                </div>{" "}
              </div>
            </div>
          </div>

          <div>
            <div className="text-xl font-montserrat font-bold">{title}</div>
            <div className="flex mt-[3px]">
              <Target className="h-[16px] w-[16px] mt-[0px]" />
              <div className="mt-[-3px] ml-[4px] font-montserrat font-medium">
                {category}
              </div>
            </div>
            <div className="h-[140px] lg:w-[400px] w-[40vw] mt-[3px] break-words line-clamp-9 ">
              {description}
            </div>
            <div className="absolute ml-[-150px] mt-[25px]">
              <a
                href="/coursedetail"
                className="md:hidden border-[2px] border-green bg-lime w-[75vw] h-[56px] rounded-[12px] text-green text-xl font-montserrat font-semibold grid place-items-center mb-[8px] hover:bg-yellow-200 cursor-pointer"
              >
                View Course
              </a>
              <div
                onClick={toggleMessage}
                className="md:hidden border-[2px] border-lightblue bg-white w-[75vw] h-[56px] rounded-[12px] text-lightblue text-xl font-montserrat font-semibold grid place-items-center hover:bg-gray-300 cursor-pointer"
              >
                Send message
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            <div className="">
              <div className="flex justify-between ">
                <div className="flex">
                  {" "}
                  <Star className="h-[20px] w-[20px] mt-[4px]" />{" "}
                  <div className="text-xl ml-[3px] font-semibold font-montserrat">
                    4.8
                  </div>{" "}
                </div>
                <HeartButton />
              </div>
              <div className="text-gray-600 mt-[-5px] ">252 review</div>
              <div className="text-xl font-semibold font-montserrat">
                {price}
              </div>
              <div className="text-gray-600 mt-[-5px]">30-min/course</div>
            </div>

            <div>
              <a
                href="/coursedetail"
                className="hidden md:border-[2px] md:border-green md:bg-lime lg:w-[250px] md:w-[24vw] md:h-[56px] md:rounded-[12px] md:text-green md:text-xl md:font-montserrat md:font-semibold md:grid md:place-items-center md:mb-[8px] md:hover:bg-yellow-200 md:cursor-pointer"
              >
                View Course
              </a>
              <div
                onClick={toggleMessage}
                className="hidden md:border-[2px] md:border-lightblue md:bg-white lg:w-[250px] md:w-[24vw]  md:h-[56px] md:rounded-[12px] md:text-lightblue md:text-xl md:font-montserrat md:font-semibold md:grid md:place-items-center md:hover:bg-gray-300 md:cursor-pointer"
              >
                Send message
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen1 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMessage}
        ></div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="bg-white w-[400px] h-[500px] border-2 border-black rounded-[12px] p-[16px]">
            <div className="flex justify-end">
              <X
                className="h-[20px] w-[20px] cursor-pointer"
                onClick={toggleMessage}
              />
            </div>
            <div className="flex justify-center">
              <div className="h-[100px] w-[100px] bg-lime rounded-[12px]"></div>
            </div>
            <div className="text-[20px] font-semibold font-montserrat text-center mt-[10px]">
              send message to
            </div>
            <div className="text-[20px] font-semibold font-montserrat text-center">
              TrainerA
            </div>
            <textarea
              className="w-[368px] h-[193px] border-[2px] rounded-[12px] border-black mt-[16px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <div
              className="w-[368px] h-[50px] border-[2px] rounded-[12px] border-black bg-lightblue grid place-items-center mt-[10px] hover:bg-blue cursor-pointer"
              onClick={handleSend}
            >
              <div className="text-[20px] font-montserrat font-semibold text-white ]">
                Send message
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchcard;
