import React from 'react'
import { BadgeCheck } from 'lucide-react'

function ResumeCard() {
  return (
    <div className='h-[108px] w-[1024px] mt-[16px] '>
      <div className='flex '>
        <div className='font-montserrat font-semibold'>2023-2024</div>
        <div className='ml-[16px]'>
          <div className='font-montserrat font-semibold'>KMITL</div>
          <div className='mt-[9px] font-montserrat font-normal'>IOT engineering</div>
          <div className='flex mt-[9px]'><BadgeCheck fill='#38A32A' stroke='white'/><div className='ml-[5px] text-green font-montserrat font-medium'>Verified</div></div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCard