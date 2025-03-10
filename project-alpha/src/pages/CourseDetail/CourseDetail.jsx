import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeartButton from "../../components/Button/HeartButton";
import Review from "../../components/Review/Review";
import { trainers } from "../../constants/TrainerData";
import EdCard from "../../components/ResumeCard/EducationCard";
import WorkCard from "../../components/ResumeCard/WorkCard";
import CerCard from "../../components/ResumeCard/CerCard";
import {
  BadgeCheck,
  Target,
  ShoppingBag,
  MessageSquare,
  GraduationCap,
  Briefcase,
  ScrollText,
  Star,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import axios from "axios";

function CourseDetail() {
  const { id } = useParams(); // ดึง id จาก URL
  const [coursesData, setCourseDetail] = useState({});
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    reData_();
    // console.log(coursesData.price);
  }, []);

  const reData_ = async () => {
    const res = await axios.get(`/api/course/${id}`);
    const cers = await axios.get("/api/certifies");
    console.log("API Response:", res.data);
    console.log("API Response:", cers.data);
    setCourseDetail(res.data);
    setCertificate(cers.data);
  };

  // หา course ตาม id
  //const trainer = coursesDetail.find((Trainer) => Trainer._id === id);

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleResume = () => {
    setIsOpen1(!isOpen1);
  };
  const [selectedResume, setSelectedResume] = useState("Education");
  // ฟังก์ชันสำหรับเลือกค่าจาก dropdown
  const selectResume = (value) => {
    setSelectedResume(value);
    setIsOpen1(false); // ปิด dropdown หลังจากเลือก
  };

  console.log();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleEducation = () => {
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleWork = () => {
    setIsOpen3(!isOpen3);
    setIsOpen2(false);
    setIsOpen4(false);
  };
  const toggleCer = () => {
    setIsOpen4(!isOpen4);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  //---------------------------------------------------------------------
  const [isOpen5, setIsOpen5] = useState(false); // State สำหรับการเปิด/ปิด messagebox
  const [message, setMessage] = useState(""); // เก็บข้อความ

  const toggleMessage = () => {
    setIsOpen5(!isOpen5);
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
    <div>
      <div className="flex lg:justify-center mt-[82px] ml-[10px] lg:ml-0">
        <div className="h-auto lg:w-[1024px] w-[100vw] mb-[50px]">
          <div className="grid gap-[40px]">
            <div className="flex lg:w-[1024px] w-[100vw] sm:justify-between flex-col sm:flex-row">
              <div className="lg:h-[200px] lg:w-[200px] w-[150px] h-[150px] rounded-[12px] bg-lime">
                <img
                  src={coursesData.thumbnail}
                  alt="thumbnail"
                  className="lg:h-[200px] lg:w-[200px] w-[150px] h-[150px] rounded-[12px] object-cover"
                />
              </div>
              <div className="lg:w-[773px] sm:w-[70vw] sm:h-[181px] h-auto flex flex-col justify-between pr-5 lg:pr-0 ">
                <div className="flex justify-between">
                  <div className="lg:text-[30px] text-[24px] font-montserrat font-bold flex">
                    {coursesData.title}
                    <BadgeCheck className="lg:mt-[8px] mt-[5px] ml-[10px] lg:h-[30px] lg:w-[30px] h-[24px] w-[24px]" />
                  </div>
                  <div className="mr-[5px]">
                    <HeartButton />
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <BadgeCheck className="h-[20px] w-[20px] lg:mt-[5px] mt-[2px]" />{" "}
                    <div className="ml-[8px] font-montserrat font-semibold lg:text-[20px] text-[16px] text-blue">
                      Verified
                    </div>{" "}
                  </div>
                  <div className="font-montserrat font-medium lg:text-[20px] text-[16px] text-blue">
                    Trainer A has been verified with certificate
                  </div>
                </div>
                <div>
                  <div className="flex">
                    {" "}
                    <div className="lg:mt-[5px] mt-[2px]">
                      <Target className="h-[20px] w-[20px]" />
                    </div>{" "}
                    <div className="lg:text-[20px] text-[16px] font-montserrat font-semibold ml-[8px]">
                      Activity
                    </div>{" "}
                  </div>
                  <div className="lg:text-[20px] text-[16px] font-montserrat font-medium">
                    dwawad
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="lg:w-[1024px] w-[100vw] sm:h-[93px] h-auto flex sm:flex-row flex-col justify-between">
                <div className="mt-[-12px]">
                  <div className="text-[30px] font-montserrat font-bold">
                    {coursesData.price}
                  </div>
                  <div className="text-[20px] font-medium font-montserrat">
                    30-min course
                  </div>
                </div>
                <div className="flex pr-5 lg:pr-0">
                  <div className="h-[56px] sm:w-[181px] w-[300px] rounded-[12px] border-[2px] bg-lime border-green flex items-center justify-center mr-[10px] cursor-pointer hover:bg-yellow-200">
                    {" "}
                    <div>
                      <ShoppingBag className="h-[20px] w-[20px] stroke-black" />
                    </div>{" "}
                    <div className="font-montserrat font-semibold text-[20px] ml-[10px]">
                      Bye course
                    </div>{" "}
                  </div>
                  <div
                    onClick={toggleMessage}
                    className="h-[56px] sm:w-[212px] w-[300px] rounded-[12px] border-[2px] bg-lightblue border-blue flex items-center justify-center cursor-pointer hover:bg-blue "
                  >
                    {" "}
                    <div>
                      <MessageSquare className="h-[20px] w-[20px] stroke-white" />
                    </div>{" "}
                    <div className="font-montserrat font-semibold text-[20px] ml-[10px] text-white">
                      Send Message
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="w-[1024px] h-auto border-b-[2px] border-lightblue mt-[32px] sm:mt-[0px]"></div>
            </div>

            <div className="lg:w-[1024px] w-[95vw]">
              <div className="text-[24px] font-montserrat font-bold">
                Aboutme
              </div>
              <div className="break-words">{coursesData.description}</div>
              <div className="w-[1024px] h-auto border-b-[2px] border-lightblue mt-[32px]"></div>
            </div>

            <div className="w-[100vw] lg:w-[1024px]">
              <div className="flex justify-between">
                <div className="text-[24px] font-bold font-montserrat pr-[10px]">
                  Resume
                </div>
                <div className="md:flex lg:mr-0 md:mr-5 hidden">
                  <div
                    className={`mr-[16px] lg:w-[137px] w-[18vw] h-[36px] rounded-[12px] border-[2px]  flex justify-center items-center cursor-pointer ${
                      isOpen2
                        ? "bg-green border-green text-white"
                        : "bg-white border-green text-green"
                    }`}
                    onClick={toggleEducation}
                  >
                    <div className="font-montserrat font-semibold text-[16px]  mr-[6px]">
                      Education
                    </div>
                    <div>
                      <GraduationCap
                        className={`h-[18px] w-[18px] ${
                          isOpen2 ? "stroke-white" : "stroke-green"
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`mr-[16px] lg:w-[193px] w-[22vw] h-[36px] rounded-[12px] border-[2px]  flex justify-center items-center cursor-pointer ${
                      isOpen3
                        ? "bg-green border-green text-white"
                        : "bg-white border-green text-green"
                    }`}
                    onClick={toggleWork}
                  >
                    <div className="font-montserrat font-semibold text-[16px]  mr-[6px]">
                      Work experience
                    </div>
                    <div>
                      <Briefcase
                        className={`h-[18px] w-[18px] ${
                          isOpen3 ? "stroke-white" : "stroke-green"
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:w-[163px] w-[22vw] h-[36px] rounded-[12px] border-[2px]  flex justify-center items-center cursor-pointer ${
                      isOpen4
                        ? "bg-green border-green text-white"
                        : "bg-white border-green text-green"
                    }`}
                    onClick={toggleCer}
                  >
                    <div className="font-montserrat font-semibold text-[16px]  mr-[6px]">
                      Certification
                    </div>
                    <div>
                      <ScrollText
                        className={`h-[18px] w-[18px] ${
                          isOpen4 ? "stroke-white" : "stroke-green"
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:hidden">
                  <div
                    onClick={toggleResume}
                    className={`md:hidden mr-7 border-[2px] rounded-[12px] sm:w-[200px] w-[160px] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${
                      isOpen1
                        ? "bg-green border-green hover:border-lime relative z-20 "
                        : "bg-white border-green"
                    }`}
                  >
                    <div
                      className={`flex font-medium  ${
                        isOpen1 ? "text-white" : "text-green"
                      }`}
                    >
                      {selectedResume}
                      <ChevronDown
                        className="mt-[2px] "
                        color={isOpen1 ? "white" : "green"}
                      />
                    </div>
                  </div>
                  {isOpen1 && (
                    <div
                      className="fixed inset-0 bg-black bg-opacity-50 z-10"
                      onClick={toggleResume}
                    ></div>
                  )}
                  {isOpen1 && (
                    <div className="bg-white sm:w-[200px] w-[160px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute">
                      <div className="flex flex-col justify-between">
                        <div
                          className="cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[200px]"
                          onClick={() => selectResume("Education")}
                        >
                          Education
                        </div>
                        <div
                          className="cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[200px]"
                          onClick={() => selectResume("Work experience")}
                        >
                          Work experience
                        </div>
                        <div
                          className="cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[200px]"
                          onClick={() => selectResume("Cetification")}
                        >
                          Cetification
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {isOpen2 && (
                <div>
                  <EdCard />
                  <EdCard />
                  <EdCard />
                </div>
              )}
              {isOpen3 && (
                <div>
                  <WorkCard />
                  <WorkCard />
                  <WorkCard />
                </div>
              )}
              {isOpen4 && (
                <div>
                  <CerCard />
                  <CerCard />
                  <CerCard />
                </div>
              )}

              <div className="w-[1024px] h-auto border-b-[2px] border-lightblue mt-[32px]"></div>
            </div>

            <div>
              <div className="font-montserrat font-bold text-[24px]">
                Review
              </div>
              <div className="flex">
                <Star className="h-[48px] w-[48px]" />
                <div className="text-[48px] font-bold font-montserrat mt-[-10px] ml-[5px]">
                  5
                </div>
                <div className="text-[16px] font-montserrat font-medium ml-[20px] mt-[30px]">
                  from 111 review
                </div>
              </div>
              <div className="lg:grid-cols-2 grid-cols-1 grid">
                <Review />
                <Review />
                <Review />
                <Review />
              </div>
              <div>
                <div className="mt-[32px] h-[40px] w-[203px] rounded-[12px] border-[2px] bg-lime border-green grid place-items-center cursor-pointer">
                  {" "}
                  <div className="font-montserrat font-semibold text-[20px]">
                    Show all reviews
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen5 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMessage}
        ></div>
      )}

      {isOpen5 && (
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
}

export default CourseDetail;
