import React from 'react'
import {
  Star,
} from "lucide-react";

function Review() {
  return (
    <div className='sm:w-[496px] w-[90vw] h-auto mt-[32px]'>
      <div className='flex'>
        <div className='h-[60px] w-[60px] bg-green rounded-[12px]'></div>
        <div className='ml-[16px]'>
          <div className='font-montserrat font-semibold text-[20px]'>User1</div>
          <div className='font-montserrat font-normal text-[16px]'>November 14, 2024</div>
        </div>
      </div>

      <div className='flex mt-[10px]'>
        <Star fill='yellow'/><Star fill='yellow'/><Star fill='yellow'/><Star fill='yellow'/><Star fill='yellow'/>
      </div>

      <div className='mt-[10px]'>
        <div className='font-montserrat font-normal text-[16px] break-words'>
          dawdadawdawdawdwadawdwadwaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
      </div>
    </div>
  )
}

export default Review