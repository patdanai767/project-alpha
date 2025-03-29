import React,{useState,useEffect} from "react";
import TrainerCard from "../../components/Card/TrainerCard";
import EventCard from "../../components/Card/EventCard";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";


export default function Mycourse() {
  const authAction = useAuth();
  const token = authAction?.token;
  const [course,setCourse] = useState([])

  useEffect(() => {
    fetchTrainer()
  },[])

  const fetchTrainer = async () => {
    const getProfile = await axios.get("/api/user/profile",{headers:{Authorization: `Bearer ${token}`}})
    const res = await axios.get("/api/course")
    const checkTrainees = res.data.filter(course => course.trainees.includes(getProfile.data._id))
    console.log("API Response:", checkTrainees);
    setCourse(checkTrainees)
  }

  return (
    <div className="flex justify-center mt-[74px]">
      <div className="min-h-screen md:w-[85%]">
        <div className="text-[36px] font-semibold">Welcome, Trainee</div>
        <div className="my-[32px]">
          <div className="text-[24px] my-[32px]">Upcoming course</div>
          <EventCard />
        </div>
        <div className="mb-[32px]">
          <div className="my-[32px] text-[24px]">My trainer</div>
          <div className="grid grid-cols-4 col-span-4 gap-16 mx-16 place-items-center">
            
          {course.map((val) => (
              <TrainerCard 
                key = {val._id}
                title={val.title}
                thumbnail={val.thumbnail}
              />
            ))}
            
          </div>
        </div>
        <div className="mb-[32px]">
          <div className="text-[24px] my-[32px]">My events</div>
          <div className="grid gap-[32px]">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
