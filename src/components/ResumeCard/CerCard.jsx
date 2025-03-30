import React from 'react'
import { BadgeCheck } from 'lucide-react'

function CerCard({title,duration,description}) {
  return (
    <div className='h-[108px] w-[1024px] mt-[16px] '>
      <div className='flex '>
        <div className='font-montserrat font-semibold'>{duration}</div>
        <div className='ml-[16px]'>
          <div className='font-montserrat font-semibold'>{title}</div>
          <div className='mt-[9px] font-montserrat font-normal'>{description}</div>
          <div className='flex mt-[9px]'><BadgeCheck fill='#38A32A' stroke='white'/><div className='ml-[5px] text-green font-montserrat font-medium'>Verified</div></div>
        </div>
      </div>
    </div>
  )
}

export default CerCard