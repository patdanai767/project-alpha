import { Target } from "lucide-react";
import React from "react";

const Homecard = ({ name, image, category }) => {
  return (
    <div className="group text-sky cursor-pointer hover:scale-110 hover:drop-shadow-lg transition duration-200 ease-in-out">
      <div className="w-60 md:w-80 h-full flex flex-col">
        <img
          src={image}
          alt={name}
          className="w-60 md:w-80 h-60 md:h-80 rounded-t-xl"
        />
        <div className="flex flex-col items-start px-3 py-2 w-full overflow-hidden bg-blue/80 rounded-b-xl group-hover:bg-green transition duration-200 ease-in-out">
          <p className="text-3xl md:text-4xl text-left font-bold pb-2 w-full truncate whitespace-nowrap">
            {name}
          </p>
          <div className="flex items-center gap-2 text-xl w-full">
            <Target />
            <p className="text-xl truncate">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
