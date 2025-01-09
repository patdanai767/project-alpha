import React,{useState}from 'react'
import {
  ChevronDown,
  Search,
} from "lucide-react";

function FilterBar() {
   // State สำหรับการเปิด/ปิด dropdown
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    // ฟังก์ชันสำหรับเปิด/ปิด dropdown
    const toggleGender = () => {
      setIsOpen1(!isOpen1);
    };
    const togglePrice = () => {
      setIsOpen2(!isOpen2);
    };
    const toggleDuration = () => {
      setIsOpen3(!isOpen3);
    };
    const toggleActivity = () => {
      setIsOpen4(!isOpen4);
    };
    const toggleDiet = () => {
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(!isOpen5);
    };
  return (
    <div className='mt-[-50px]'>
      <div className="text-5xl text-blue font-montserrat font-semibold">Choose Trainer</div>
        <div className="font-medium">catagory : Female,more than THB1,000, more than 60-min, Weight Training</div>

        <div className="flex justify-between mt-[5px] ">

          <div className='flex-col'>
            <div onClick={toggleGender} className={`border-[2px] rounded-[12px] w-[244px] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen1 ? 'bg-lime border-black relative z-20 ' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen1 ? 'text-black' : 'text-blue'}`}>Gender<ChevronDown color={isOpen1 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen1 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleGender}></div>     
                )}
            {isOpen1 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>Male</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>Female</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={togglePrice} className={` border-[2px] rounded-[12px] w-[244px] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen2 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen2 ? 'text-black' : 'text-blue'}`}>Price<ChevronDown color={isOpen2 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen2 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={togglePrice}></div>     
                )}
            {isOpen2 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>less than THB 1,000</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>more than THB 1,000</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={toggleDuration} className={` border-[2px] rounded-[12px] w-[244px] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen3 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen3 ? 'text-black' : 'text-blue'}`}>Duration<ChevronDown color={isOpen3 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen3 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleDuration}></div>     
                )}
            {isOpen3 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>30-min</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>60-min</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={toggleActivity} className={` border-[2px] rounded-[12px] w-[244px] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen4 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen4 ? 'text-black' : 'text-blue'}`}>Activity<ChevronDown color={isOpen4 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen4 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleActivity}></div>     
                )}
            {isOpen4 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>Dancing</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'>Weight Training</div>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="border-[2px] border-blue rounded-[12px] w-[1024px] h-[36px] mt-[10px] flex justify-between"><div className="mx-[10px] grid place-items-center text-blue font-medium">
          Search by name or keyword</div><Search color="blue" className="mt-[4px] mx-[10px]"/>
        </div>
    </div>
  )
}

export default FilterBar