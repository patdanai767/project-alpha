import React from 'react'

export default function MessageCard() {
  return (
    <div className='border-b border-blue flex gap-[16px] items-center cursor-pointer'>
        <div>Profile</div>
        <div className='flex-1 gap-[8px] mb-[8px]'>
            <div className='justify-between flex'>
                <div className='text-[20px] font-semibold'>Trainer A</div>
                <div>22 Dec</div>
            </div>
            <div>Hello, user...</div>
        </div>
    </div>
  )
}
