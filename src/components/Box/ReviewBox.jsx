import { Star } from "lucide-react";
import React from "react";

export default function ReviewBox({
  point,
  description,
  fullname,
  date,
  createdBy,
}) {
  const formatData = (mongoDate) => {
    if (!mongoDate) return;
    const date = new Date(mongoDate);
    const dateFormat = date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    });

    return `${dateFormat}`;
  };

  return (
    <div className="mt-10">
      <div className="flex gap-4 items-center">
        <div className="w-[60px] h-[60px] bg-lime rounded-xl">
          <img
            src={createdBy?.profileImage}
            className="w-[60px] h-[60px] object-cover rounded-xl"
          />
        </div>
        <div>
          <p className="font-bold">{fullname}</p>
          <p>{formatData(date)}</p>
        </div>
      </div>
      <div className="flex gap-1 my-2">
        {[...Array(point)].map((_,index) => (
          <Star key={index} fill="#DDF344" />
        ))}
      </div>
      <div>{description}</div>
    </div>
  );
}
