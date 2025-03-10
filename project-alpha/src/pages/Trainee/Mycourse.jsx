import React, { useEffect, useState } from "react";
import TrainerCard from "../../components/Card/TrainerCard";
import EventCard from "../../components/Card/EventCard";
import axios from "axios";
import { config } from "../../config";
import Modal from "../../components/Modal/Modal";

export default function Mycourse() {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [recentData, setRecentData] = useState({
    id: "",
    title: "",
    trainer: "",
    trainee: "",
    startedTime: "",
    endTime: "",
    user: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/meeting/myMeeting", config.headers());
      const resUser = await axios.get("/api/user/profile", config.headers());
      setRecentData(res.data.filter((val) => val.status === "continue"));
      setData(res.data.filter((val) => val.status === "continue" || val.status === "finish"));
      setUser(resUser.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
      <div className="flex justify-center mt-[74px]">
        <div className="min-h-screen md:w-[85%]">
          <div className="text-[36px] font-semibold">Welcome, Trainee</div>
          <div className="my-[32px]">
            <div className="text-[24px] my-[32px]">Upcoming course</div>
            <EventCard
              key={recentData[0]?._id}
              id={recentData[0]?._id}
              title={recentData[0]?.title}
              trainer={recentData[0]?.createdBy}
              trainee={recentData[0]?.trainee}
              startedTime={recentData[0]?.startedAt}
              endTime={recentData[0]?.endAt}
              status={recentData[0]?.status}
              user={user}
            />
          </div>
          <div className="mb-[32px]">
            <div className="my-[32px] text-[24px]">My trainer</div>
            <div className="grid grid-cols-4 gap-16 mx-16">
              <TrainerCard />
              <TrainerCard />
              <TrainerCard />
              <TrainerCard />
            </div>
          </div>
          <div className="mb-[32px]">
            <div className="text-[24px] my-[32px]">My events</div>
            <div className="grid gap-[32px]">
              {data
                ? data.map((val) => (
                    <EventCard
                      key={val._id}
                      id={val._id}
                      title={val.title}
                      trainer={val.createdBy}
                      trainee={val.trainee}
                      startedTime={val.startedAt}
                      endTime={val.endAt}
                      status={val.status}
                      user={user}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
  );
}
