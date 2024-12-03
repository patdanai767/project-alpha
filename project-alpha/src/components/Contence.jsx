import React, { useState } from "react";

function Contence() {
  return (
    <div className="ml-[300px] mt-[40px]">
      <div className="border-[3px] border-gray-400 h-[400px] w-[1000px] hover:border-black rounded-md">
        <div className="border-gray-400 h-[200px] w-[200px] border-[3px] ml-7 mt-7 rounded-md"></div>

        <div className="border-black border-2 bg-blue-400 h-[50px] w-[280px] ml-[680px] mt-4 rounded-lg hover:bg-blue-500 cursor-pointer">
          <div className="flex justify-center mt-[8px] font-semibold text-xl text-black">
            Buy Course
          </div>
        </div>

        <div className="border-gray-500 border-2 bg-white h-[50px] w-[280px] ml-[680px] mt-4 rounded-lg hover:bg-gray-300 cursor-pointer">
          <div className="flex justify-center mt-[8px] font-semibold text-xl text-black">
            Send massage
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contence;
