import { Target } from "lucide-react";
import React from "react";

const Homecard = ({ name, image, category }) => {
  return (
    <div className="group text-sky cursor-pointer hover:scale-105 hover:drop-shadow-lg transition duration-200 ease-in-out border-2 border-black rounded-[14px]">
      <div className="w-60 lg:w-80 h-full flex flex-col">
        <img
          src={image}
          className="w-60 lg:w-80 h-60 lg:h-80 rounded-t-xl object-cover"
        />
        <div className="flex flex-col items-start px-3 py-2 w-full overflow-hidden border-t-2 border-black bg-blue/80 rounded-b-xl group-hover:bg-green transition duration-200 ease-in-out">
          <p className="text-3xl lg:text-4xl text-left font-bold pb-2 w-full truncate whitespace-nowrap">
            {name}
          </p>
          <div className="flex items-center gap-2 text-xl w-full">
            <Target className="size-5" />
            <p className="text-lg lg:text-xl truncate">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
