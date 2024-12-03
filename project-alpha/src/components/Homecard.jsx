import { Target } from "lucide-react";
import React from "react";

const Homecard = () => {
  return (
    <div className=" text-white cursor-pointer hover:scale-105 hover:drop-shadow-lg transition duration-200 ease-in-out">
      <div className="bg-[url('./src/assets/profile-pic.jpg')] rounded-xl bg-cover bg-center w-72 h-96 flex items-end">
        <div className="flex flex-col items-start p-4 w-full bg-black backdrop-blur-sm bg-opacity-80 rounded-b-xl hover:bg-blue-800 hover:bg-opacity-80 transition duration-200 ease-in-out">
          <p className="flex text-4xl font-bold mb-2 w-full truncate">
            Shin Chan
          </p>
          <div className="flex items-center gap-2 text-xl w-full">
            <Target />
            <p className="text-xl truncate">Weight training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
