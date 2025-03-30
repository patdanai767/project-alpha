import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeartButton from "../Button/HeartButton";
import VerifySym from "../../assets/VerifySymbol.svg";
import PeopleLogo from "../../assets/PeopleLogo.svg";
import DurationLogo from "../../assets/durationLogo.svg";
import GraduationCap from "../../assets/GraduationCap.svg";
import { Clock, Calendar, Star, Target, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const Searchcard = ({
  id,
  title,
  description,
  price,
  duration,
  thumbnail,
  category,
  status,
  isLike,
  date,
  time,
}) => {
  const authAction = useAuth();
  const token = authAction?.token;
  const [point, setPoint] = useState();
  const [reviewer, setReviewer] = useState();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    calpoint();
  }, []);
  const calpoint = async () => {
    const courseRes = await axios.get(`${API_BASE_URL}/course/${id}`);
    const fetchRating = courseRes.data.rating;
    const fetchpoint = fetchRating.map((a) => a?.point ?? 0);
    const sumPoint = fetchpoint.reduce((total, num) => total + num, 0);
    const AvgPoint = fetchpoint.length > 0 ? sumPoint / fetchpoint.length : 0;
    setPoint(AvgPoint);
    setReviewer(fetchpoint.length);
  };
  //-------------------------------------------------------------------------
  const [isOpen1, setIsOpen1] = useState(false); // State สำหรับการเปิด/ปิด messagebox
  const [message, setMessage] = useState(""); // เก็บข้อความ

  const toggleMessage = () => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/login");
    }
    setIsOpen1(!isOpen1);
  }; // ฟังก์ชันสำหรับเปิด/ปิด messagebox
  const sendMessage = async () => {
    const courseRes = await axios.get(`${API_BASE_URL}/course/${id}`);
    const trainerId = courseRes.data.createdBy?._id;
    const payload = {
      content: message,
      sentToId: trainerId,
      mediaURL: "",
    };
    if (message.trim() === "") {
      Swal.fire({
        title: "Message can't be empty",
        icon: "error",
        showConfirmButton: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }

    await axios
      .post(`${API_BASE_URL}/conversation/sentMessage`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ใส่ token สำหรับ auth
        },
      })
      .then(() => {
        Swal.fire({
          title: "Message sent successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          setMessage("");
          navigate(`/messenger/${trainerId}`);
        });
      });
  };
  //-----------------------------------------------------------------------------------
  const navigate = useNavigate();
  return (
    <div className="py-4">
      <div>
        <div className="lg:border-[2px] border-black border-b-[2px] h-auto lg:h-[400px] lg:w-[1024px] w-[100vw] lg:rounded-xl pt-[30px] pb-[30px] lg:pr-[35px] lg:pl-[35px] pr-[17px] pl-[17px] flex justify-between ">
          <div className="flex flex-col md:justify-between">
            <div className="md:h-[200px] md:w-[200px] h-[150px] w-[150px] bg-lime rounded-xl">
              <img
                src={thumbnail}
                className="rounded-xl md:h-[200px] md:w-[200px] h-[150px] w-[150px] object-cover"
              />
            </div>
            <div>
              <div className="mb-[10px] flex">
                <Calendar className="w-[16px] h-[16px] mt-[4px]" />{" "}
                <div className="ml-[8px] font-montserrat font-semibold">
                  {date}
                </div>{" "}
              </div>
              <div className="flex">
                <Clock className="w-[16px] h-[16px] mt-[4px]" />{" "}
                <div className="ml-[8px] font-montserrat font-semibold">
                  {time}
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="">
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
            <div className=" ml-[-150px] mt-[25px]">
              <div
                onClick={() => navigate(`/coursedetail/${id}`)}
                className="md:hidden border-[2px] border-green bg-lime w-[75vw] h-[56px] rounded-[12px] text-green text-xl font-montserrat font-semibold grid place-items-center mb-[8px] hover:bg-yellow-200 cursor-pointer"
              >
                View Course
              </div>
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
                    {point}
                  </div>{" "}
                </div>
                <HeartButton courseId={id} isLike={isLike} />
              </div>
              <div className="text-gray-600 mt-[-5px] ">{reviewer} review</div>
              <div className="text-xl font-semibold font-montserrat">
                {price}
              </div>
              <div className="text-gray-600 mt-[-5px]">
                {duration}-min/course
              </div>
            </div>

            <div>
              <div
                onClick={() => navigate(`/coursedetail/${id}`)}
                className="hidden md:border-[2px] md:border-green md:bg-lime lg:w-[250px] md:w-[24vw] md:h-[56px] md:rounded-[12px] md:text-green md:text-xl md:font-montserrat md:font-semibold md:grid md:place-items-center md:mb-[8px] md:hover:bg-yellow-200 md:cursor-pointer"
              >
                View Course full
              </div>
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
              <img
                className="w-[100px] h-[100px] object-cover bg-lime rounded-md"
                src={thumbnail}
              />
            </div>
            <div className="text-[20px] font-semibold font-montserrat text-center mt-[10px]">
              Send message to
            </div>
            <div className="text-[20px] font-semibold font-montserrat text-center">
              {title}
            </div>
            <textarea
              className="p-2 w-[368px] h-[193px] border-[2px] rounded-[12px] border-black mt-[16px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <div
              className="w-[368px] h-[50px] border-[2px] rounded-[12px] border-black bg-lightblue grid place-items-center mt-[10px] hover:bg-blue cursor-pointer"
              onClick={sendMessage}
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
