import React, {useState} from 'react'
import HeartButton from '../Button/HeartButton.jsx'
import Star from '../../assets/Starbutton.jsx'
import VerifySym from '../../assets/VerifySymbol.svg'
import PeopleLogo from '../../assets/PeopleLogo.svg'
import DurationLogo from '../../assets/durationLogo.svg'
import GraduationCap from '../../assets/GraduationCap.svg'
import Profile from "../../assets/shiro.jpg"

function Contence() {
  return (
    <div className='ml-[150px] mt-[40px] '>
      <div className='border-[3px] border-gray-400 h-[400px] w-[1000px] hover:border-black rounded-md'>

        <div className='absolute border-gray-400 h-[200px] w-[200px] border-[3px] ml-5 mt-5 rounded-md'><img src={Profile}/></div>

        <div className='absolute ml-[910px] mt-[25px] '>
          <HeartButton/>
        </div>
        <div className='absolute ml-[905px] mt-[55px] text-sm text-gray-500 font-semibold'>favorite</div>

        <div className='absolute text-3xl font-semibold ml-[720px] mt-[20px]'>THB 1,000</div>
        <div className='absolute ml-[737px] mt-[55px] text-gray-500 font-semibold text-sm'>30-day/course</div>

        <div className='absolute ml-[630px] mt-[23px]'><Star/></div>
        <div className='absolute text-3xl font-bold ml-[612px] mt-[22px]'>5</div>
        <div className='absolute text-gray-500 text-sm font-semibold ml-[616px] mt-[55px]'>review</div>

        <div className='absolute border-black border-2 bg-blue-400 h-[50px] w-[280px] ml-[680px] mt-[265px] rounded-lg hover:bg-blue-500 cursor-pointer'>
          <div className='flex justify-center mt-[8px] font-semibold text-xl text-black'>Buy Course</div>
        </div>

        <div className='absolute border-gray-500 border-2 bg-white h-[50px] w-[280px] ml-[680px] mt-[325px] rounded-lg hover:bg-gray-300 cursor-pointer'>
          <div className='flex justify-center mt-[8px] font-semibold text-xl text-black'>Send massage</div>
        </div>

        <div className='absolute text-3xl font-semibold ml-[230px] mt-[20px] flex'>
          Roronoa Zoro 
          <div className='mt-[12px] ml-[10px]'><img src={VerifySym} width={18} /></div>
        </div>

        <div className='absolute border-gray-100 border-2 w-[300px] h-[80px] ml-[230px] mt-[60px]'>
          <div className='flex'>
            <div className='bg-blue-300 rounded-md h-[20px] w-[100px] flex items-center justify-center font-semibold text-black'>Professional</div>
            <div className='bg-pink-300 rounded-md h-[20px] w-[100px] flex items-center justify-center font-semibold text-black ml-[10px]'>Super Trainer</div>
          </div>
          <div className='flex'><img src={PeopleLogo} width={20} /><div className='ml-[10px] text-gray-600 font-semibold mt-[5px]'>56 active client • 8421 courses</div></div>
          <div className='flex ml-[1px]'><img src={GraduationCap} width={20} /><div className='ml-[9px] text-gray-600 font-semibold '>Weight training</div></div>
        </div>
        
        <div className='absolute border-gray-100 border-2 w-[400px] h-[225px] ml-[230px] mt-[150px]'>
          <div className='absolute '>Hello my Name is Roronoa Zoro a man will become a strongest swordsman in the world. and my friend Lufy he is a man will be come king of the pirate</div>
        </div>

        <div className='absolute mt-[340px] ml-6 '><img src={DurationLogo} width={30} /></div>
        <div className='absolute mt-[345px] ml-[60px] font-semibold text-gray-700'>7/12/2024</div>
        

      </div>
    </div>
    
    
    
  )
}

export default Contence;
