import React, { useEffect, useState, } from "react";
import {
  Star,
} from "lucide-react";
import axios from 'axios';
import { config } from '../../config';

function Review({point,description,profileImage,username,date}) {
  
 const formatData = (mongoDate) => {
  if (!mongoDate) return;
  const date = new Date(mongoDate);
  const dateFormat = date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
  return dateFormat;
};

  return (
    <div className='sm:w-[496px] w-[90vw] h-auto mt-[32px]'>
      <div className='flex'>
        <div className='h-[60px] w-[60px] bg-green rounded-[12px]'><img src={profileImage} alt="profileImage" className="rounded-[12px] object-cover" /></div>
        <div className='ml-[16px]'>
          <div className='font-montserrat font-semibold text-[20px]'>{username}</div>
          <div className='font-montserrat font-normal text-[16px]'>{formatData(date)}</div>
        </div>
      </div>

      <div className='flex mt-[10px]'>
      {[...Array(point)].map((_, index) => (
        <Star fill='yellow' key = {index}/>
      ))}
      </div>

      <div className='mt-[10px]'>
        <div className='font-montserrat font-normal text-[16px] break-words'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Review