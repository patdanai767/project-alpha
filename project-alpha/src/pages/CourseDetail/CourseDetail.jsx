import React from 'react'
import HeartButton from '../../components/HeartButton'
import {
  BadgeCheck,
  Target,
  ShoppingBag,
  MessageSquare,
  GraduationCap,
  Briefcase,
  ScrollText,
  Star,
} from "lucide-react";

function CourseDetail() {
  return (
    <div className='flex justify-center mt-[82px]'>
      <div className='h-[1610px] w-[1024px]'>
        <div className='grid gap-[40px]'>

          <div className='flex w-[1024px] justify-between'>
            <div className='h-[200px] w-[200px] rounded-[12px] bg-lime'></div>
            <div className='w-[773px] h-[181px] flex flex-col justify-between'> 
              <div className='flex justify-between'>
                <div className='text-[30px] font-montserrat font-bold flex'>Trainer A<BadgeCheck className='mt-[8px] ml-[10px] h-[30px] w-[30px]'/></div>
                <div className='mr-[5px]'><HeartButton /></div>
              </div> 
              <div> 
                <div className='flex'><BadgeCheck className='h-[20px] w-[20px] mt-[5px]'/> <div className='ml-[8px] font-montserrat font-semibold text-[20px] text-blue'>Verified</div> </div> 
                <div className='font-montserrat font-medium text-[20px] text-blue'>Trainer A has been verified with certificate</div> 
              </div>
              <div>
                <div className='flex'> <div className='mt-[5px]'><Target className='h-[20px] w-[20px]'/></div> <div className='text-[20px] font-montserrat font-semibold ml-[8px]'>Activity</div> </div>
                <div className='text-[20px] font-montserrat font-medium'>Weight Training</div>
              </div>
            </div>
          </div>

          <div className='w-[1024px] h-[93px] flex justify-between border-b-[2px] border-lightblue'>
            <div className='mt-[-12px]'> 
              <div className='text-[30px] font-montserrat font-bold'>THB 750</div> 
              <div className='text-[20px] font-medium font-montserrat'>30-min course</div>
            </div>
            <div className='flex'>
              <div className='h-[56px] w-[181px] rounded-[12px] border-[2px] bg-lime border-green flex items-center justify-center mr-[10px]'> <div><ShoppingBag className='h-[20px] w-[20px] stroke-green'/></div> <div className='font-montserrat font-semibold text-[20px] ml-[10px]'>Bye course</div> </div>
              <div className='h-[56px] w-[212px] rounded-[12px] border-[2px] bg-lightblue border-blue flex items-center justify-center '> <div><MessageSquare className='h-[20px] w-[20px] stroke-white'/></div> <div className='font-montserrat font-semibold text-[20px] ml-[10px] text-white'>Send Message</div> </div>
            </div>
          </div>

          <div className='w-[1024px] '>
            <div className='text-[24px] font-montserrat font-bold'>Aboutme</div>
            <div className='break-words'>dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww dwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
              dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwddddddddddddddddddddddddddddddddddddddddd
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </div>
            <div className='w-[1024px] h-auto border-b-[2px] border-lightblue mt-[32px]'></div>
          </div>


          <div>
            <div className='flex justify-between'>
              <div className='text-[24px] font-bold font-montserrat'>Resume</div>
              <div className='flex'>
                <div className='mr-[16px] w-[137px] h-[36px] rounded-[12px] bg-green flex justify-center items-center'> <div className='font-montserrat font-semibold text-[16px] text-white mr-[6px]'>Education</div> <div><GraduationCap stroke='white' className='h-[18px] w-[18px]'/></div> </div>
                <div className='mr-[16px] w-[193px] h-[36px] rounded-[12px] border-[2px] border-green flex justify-center items-center'> <div className='font-montserrat font-semibold text-[16px] text-green mr-[6px]'>Work experience</div> <div><Briefcase stroke='green' className='h-[18px] w-[18px]'/></div> </div>
                <div className='w-[163px] h-[36px] rounded-[12px] border-[2px] border-green flex justify-center items-center'> <div className='font-montserrat font-semibold text-[16px] text-green mr-[6px]'>Certification</div> <div><ScrollText stroke='green' className='h-[18px] w-[18px]'/></div> </div> 
              </div>
            </div>
            <div>dwadwadwdawddwad</div>
            <div>dwadwadwdawddwad</div>
            <div>dwadwadwdawddwad</div>
            <div>dwadwadwdawddwad</div>
            <div className='w-[1024px] h-auto border-b-[2px] border-lightblue mt-[32px]'></div>
          </div>

          <div>
            <div className='font-montserrat font-bold text-[24px]'>Review</div>  
            <div className='flex'>
              <Star className='h-[48px] w-[48px]'/> 
              <div className='text-[48px] font-bold font-montserrat mt-[-10px] ml-[5px]'>5</div> 
              <div className='text-[16px] font-montserrat font-medium ml-[20px] mt-[30px]'>from 111 review</div> 
            </div>
            <div>
            <div className='mt-[32px] h-[40px] w-[203px] rounded-[12px] border-[2px] bg-lime border-green grid place-items-center'> <div className='font-montserrat font-semibold text-[20px]'>Show all reviews</div> </div>
            </div>
            
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default CourseDetail