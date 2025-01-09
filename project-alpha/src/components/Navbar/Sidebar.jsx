import React,{useState}from 'react'
import DropLogo from '../../assets/Starbutton'

function Sidebar() {
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
  const toggleGain = () => {
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const togglePerform = () => {
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
  };
  const toggleDiet = () => {
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(!isOpen5);
  };
  return (
      <div class="w-[100vw] max-w-[250px] h-auto bg-gray-300 py-4 text-center ">
        <div className='text-3xl font-serif font-extrabold'>Fliter</div>
        <botton 
        onClick={toggleGender} 
        className='border-solid border-black border-2 w-44 min-h-9 text-black px-6 py-2 rounded-full mt-4 inline-flex justify-between hover:bg-gray-400 cursor-pointer'
        >
          Gender
          <img src={DropLogo} width="14" />
        </botton>
        {isOpen1 && (
          <div className='bg-gray-200 w-56 relative left-4 border-2 rounded-lg'>
          <div className='cursor-pointer hover:bg-gray-300'>Male</div>
          <div className='cursor-pointer hover:bg-gray-300'>Female</div>
        </div>
      )}

      <botton
        onClick={togglePrice}
        className="border-solid border-black border-2 w-44 min-h-9 text-black px-6 py-2 rounded-full mt-2 inline-flex justify-between hover:bg-gray-400 cursor-pointer"
      >
        Starting Price
        <img src={DropLogo} width="14" />
      </botton>
      {isOpen2 && (
        <div className="bg-gray-200 w-56 relative left-4 border-2 rounded-lg">
          <div className="cursor-pointer hover:bg-gray-300">
            1000 Baht/Course
          </div>
          <div className="cursor-pointer hover:bg-gray-300">
            2000 Baht/Course
          </div>
          <div className="cursor-pointer hover:bg-gray-300">
            3000 Baht/Course
          </div>
          <div className="cursor-pointer hover:bg-gray-300">
            4000 Baht/Course
          </div>
        </div>
      )}

      <div className="bg-slate-50 h-[2px] w-[235px] mt-[25px] inline-flex"></div>

      <div className="text-3xl font-serif font-extrabold  mt-[16px] ">
        Catagory
      </div>
      <div
        className="rounded-full border-black border-2 w-5 h-5  text-black mt-4 ml-16 hover:border-gray-600 cursor-pointer"
        onClick={toggleGain}
      >
        <div className="ml-6 -mt-1 whitespace-nowrap">Gain muscle </div>
        {isOpen3 && (
          <div className="rounded-full w-3 h-3 bg-black -mt-[18px] ml-[2px] hover:bg-gray-600"></div>
        )}
      </div>
      <div
        className="rounded-full border-black border-2 w-5 h-5  text-black mt-4 ml-16 hover:border-gray-600 cursor-pointer"
        onClick={togglePerform}
      >
        <div className="ml-6 -mt-1 whitespace-nowrap">performance </div>
        {isOpen4 && (
          <div className="rounded-full w-3 h-3 bg-black -mt-[18px] ml-[2px] hover:bg-gray-600"></div>
        )}
      </div>
      <div
        className="rounded-full border-black border-2 w-5 h-5  text-black mt-4 ml-16 hover:border-gray-600 cursor-pointer"
        onClick={toggleDiet}
      >
        <div className="ml-6 -mt-1 whitespace-nowrap"> Diet</div>
        {isOpen5 && (
          <div className="rounded-full w-3 h-3 bg-black -mt-[18px] ml-[2px] hover:bg-gray-600"></div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
