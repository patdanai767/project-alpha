import React from "react";
import HeartButton from '../HeartButton.jsx'
import Star from '../../assets/Starbutton.jsx'
import VerifySym from '../../assets/VerifySymbol.svg'
import PeopleLogo from '../../assets/PeopleLogo.svg'
import DurationLogo from '../../assets/durationLogo.svg'
import GraduationCap from '../../assets/GraduationCap.svg'
import {
} from "lucide-react";

const Searchcard = ({title,description,price,duration,thumbnail,category}) => {
  return (
    <div className=' md:px-[40px] py-[40px]'>
    <div className='relative md:border-[3px] border-gray-400 md:h-[400px] md:max-w-[1000px] min-w-[450px] h-[500px] md:w-[93vw] hover:border-black rounded-md '>
      
    <div className='absolute border-gray-100 h-[200px] w-[200px] border-[3px] md:ml-5 ml-2 mt-5 rounded-md'><img src={thumbnail} className="rounded-md md:h-[194px] md:w-[194px] h-[150px] w-[150px]" /></div>
   
      <div className=" rerative absolute z-10 border-2 border-none  w-[260px] h-[80px] lg:right-[80px] lg:top-0 md:right-[-40px] md:top-[180px] ml-[155px] top-[85px]">
        <div className='absolute left-[35px] top-[27px]'><Star/></div>
        <div className='absolute lg:text-3xl text-2xl font-bold md:left-[17px] lg:top-[20px] left-[19px] top-[23px]'>5</div>
        <div className='absolute text-gray-500 text-sm font-semibold left-[18px] top-[53px]'>review</div>

        <div className='absolute lg:text-3xl font-semibold text-2xl lg:top-[20px] top-[23px] lg:left-[100px] left-[90px]'>{price}</div>
        <div className='absolute top-[53px] lg:left-[104px] left-[94px] text-gray-500 font-semibold text-sm'>30-day/course</div>
      </div>

      <div className='absolute right-[35px] top-[25px] '>
          <HeartButton/>
        </div>
      <div className='absolute right-[24px] top-[53px] text-sm text-gray-500 font-semibold'>favorite</div>

      <div className='absolute flex justify-center items-center border-black border-2 bg-lightblue lg:w-[280px] md:w-[190px] h-[50px]  lg:right-5  md:right-5 md:top-[265px] top-[400px] w-[93vw] max-w-[700px] ml-2
      rounded-lg hover:bg-green cursor-pointer'>
        <div className='font-semibold text-xl text-black'>Buy Course</div>
      </div>

      <div className='absolute border-gray-500 border-2 bg-white  lg:w-[280px] md:w-[190px] h-[50px] lg:right-5  md:right-5 md:top-[325px] top-[460px] w-[93vw] max-w-[700px] ml-2
      rounded-lg hover:bg-gray-300 cursor-pointer'>
        <div className='flex justify-center mt-[8px] font-semibold text-xl text-black'>Send massage</div>
      </div>

      <div className='absolute text-3xl font-semibold md:left-[230px] md:top-[20px] left-[170px] top-[20px] flex'>
        {title}
        <div className='mt-[12px] ml-[10px]'><img src={VerifySym} width={18} /></div>
      </div>

      <div className="absolute border-none border-2 w-[33vw] max-w-[300px] h-[30px] md:left-[230px] left-[172px] top-[60px]">
      <div className='md:flex'>
          <div className='bg-lightblue rounded-md h-[20px] w-[100px] flex items-center justify-center font-semibold text-black'>Professional</div>
          <div className='bg-pink-300 rounded-md h-[20px] w-[100px] flex items-center justify-center font-semibold text-black md:left-[10px] mt-1 md:mt-0'>Super Trainer</div>
        </div>
      </div>

      <div className='absolute border-none border-2 md:w-[300px] w-[165px] h-[60px] md:left-[230px] md:top-[90px] top-[170px] left-2'>
        
        <div className='flex'><img src={PeopleLogo} width={20} /><div className='ml-[9px] text-gray-600 font-semibold mt-[5px] break-words'>●561 active client ●311111 courses</div></div>
        <div className='flex'><img src={GraduationCap} width={19} className="ml-[1px]"/><div className='ml-[9px] text-gray-600 font-semibold '>{category}</div></div>
      </div>
      
      <div className='absolute border-none border-2 md:w-[33vw] md:max-w-[400px] w-[60vw] max-w-[1000px] h-[225px] md:left-[230px] md:top-[150px] left-[180px] top-[175px]'>
        <div className='break-words line-clamp-9'>{description}</div>
      </div>

      <div className='absolute mt-[340px] md:left-6 left-2'><img src={DurationLogo} width={30} /></div>
      <div className='absolute mt-[345px] md:left-[60px] left-11 font-semibold text-gray-700'>{duration}</div>
    
    </div>
    </div>
  );
};

export default Searchcard;
