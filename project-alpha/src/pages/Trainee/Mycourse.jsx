import React from "react";
import TrainerCard from "../../components/Card/TrainerCard";
import EventCard from "../../components/Card/EventCard";

export default function Mycourse() {
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
