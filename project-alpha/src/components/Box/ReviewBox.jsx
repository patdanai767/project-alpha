import { Star } from "lucide-react";
import React from "react";

export default function ReviewBox({ point, description }) {
  return (
    <div className="mt-10">
      <div className="flex gap-4 items-center">
        <div className="w-[60px] h-[60px] bg-lime rounded-xl">
          <img
            src=""
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-xl"
          />
        </div>
        <div>
          <p className="font-bold">User 1</p>
          <p>November 14, 2024</p>
        </div>
      </div>
      <div className="flex gap-1 my-2">
        <Star fill="#DDF344" />
        <Star fill="#DDF344" />
        <Star fill="#DDF344" />
        <Star fill="#DDF344" />
        <Star fill="#DDF344" />
      </div>
      <div>{description}</div>
    </div>
  );
}
