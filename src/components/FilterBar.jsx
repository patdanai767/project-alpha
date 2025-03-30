import React,{useState}from 'react'
import {
  ChevronDown,
  Search,
  Menu,
  X,
} from "lucide-react";
import axios from 'axios';
import { ImTextColor } from 'react-icons/im';

function FilterBar({ filters, setFilters }) {

  // State สำหรับการเปิด/ปิด dropdown
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  // ฟังก์ชันสำหรับเปิด/ปิด dropdown
  const toggleGender = () => {setIsOpen1(!isOpen1);};
  const togglePrice = () => {setIsOpen2(!isOpen2);};
  const toggleDuration = () => {setIsOpen3(!isOpen3);};
  const toggleActivity = () => {setIsOpen4(!isOpen4);};
  const toggleMenu = () => {setIsOpen5(!isOpen5);};  

  // State สำหรับค่าที่เลือก
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [selectedDuration, setSelectedDuration] = useState("Duration");
  const [selectedActivity, setSelectedActivity] = useState("Activity");

    // ฟังก์ชันสำหรับเลือกค่าจาก dropdown
  const selectGender = (value) => {
    setSelectedGender(value);
    updateFilter('gender', value);
    setIsOpen1(false); // ปิด dropdown หลังจากเลือก
  };
  const selectPrice = (value) => {
    setSelectedPrice(value);
    updateFilter('price', value === "ALL" ? "All" : value);
    setIsOpen2(false);
  };
  const selectDuration = (value) => {
    setSelectedDuration(value);
    updateFilter('duration', value === "ALL" ? "All" : value);
    setIsOpen3(false);
  };
  const selectActivity = (value) => {
    setSelectedActivity(value);
    updateFilter('activity', value === "ALL" ? "All" : value );
    setIsOpen4(false);
  };

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) =>{
    const value = e.target.value;
    setSearchText(value);
    updateFilter('title', value);
  }

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className='mt-[-50px] ml-[10px] lg:ml-0'>
      <div className="text-5xl text-blue font-montserrat font-semibold">Choose Trainer</div>
        <div className="font-medium">catagory : You can should a category from filter bar below.</div>

        <div className='lg:w-[1024px] w-[97vw]'>
        <div className="md:flex md:justify-between md:mt-[5px] hidden">

          <div className='flex-col'>
            <div onClick={toggleGender} className={`border-[2px] rounded-[12px] lg:w-[244px] w-[24vw] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen1 ? 'bg-lime border-black relative z-20 ' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen1 ? 'text-black' : 'text-blue'}`}>{selectedGender}<ChevronDown color={isOpen1 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen1 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleGender}></div>     
                )}
            {isOpen1 && (
              <div className='bg-white w-[244px] h-[165px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectGender("All") }>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectGender("Male")}>Male</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectGender("Female")}>Female</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectGender("LGBTQ+")}>LQBTQ+</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={togglePrice} className={` border-[2px] rounded-[12px] lg:w-[244px] w-[24vw] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen2 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen2 ? 'text-black' : 'text-blue'}`}>{selectedPrice}<ChevronDown color={isOpen2 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen2 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={togglePrice}></div>     
                )}
            {isOpen2 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectPrice("All")}>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectPrice("less than 1,000 token")}>less than THB 1,000</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectPrice("more than 1,000 token")}>more than THB 1,000</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={toggleDuration} className={` border-[2px] rounded-[12px] lg:w-[244px] w-[24vw] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen3 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen3 ? 'text-black' : 'text-blue'}`}>{selectedDuration}<ChevronDown color={isOpen3 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen3 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleDuration}></div>     
                )}
            {isOpen3 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectDuration("All")}>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectDuration("30-min")}>30-min</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectDuration("60-min")}>60-min</div>
                </div>
              </div>
            )}
          </div>

          <div className='flex-col'>
            <div onClick={toggleActivity} className={` border-[2px] rounded-[12px] lg:w-[244px] w-[24vw] h-[36px] grid place-items-center hover:bg-lime cursor-pointer ${isOpen4 ? 'bg-lime border-black relative z-20' : 'bg-white border-blue'}`}>
              <div className={`flex font-medium ${isOpen4 ? 'text-black' : 'text-blue'}`}>{selectedActivity}<ChevronDown color={isOpen4 ? 'black' : 'blue'} className="mt-[2px]"/></div>
            </div>
            {isOpen4 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleActivity}></div>     
                )}
            {isOpen4 && (
              <div className='bg-white w-[244px] h-[124px] border-2 border-black rounded-lg flex z-20 absolute'>
                <div className='flex flex-col justify-between'>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectActivity("All")}>All</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectActivity("Dancing")}>Dancing</div>
                  <div className='cursor-pointer hover:bg-gray-300 p-2 font-semibold rounded-lg w-[240px]'onClick={() => selectActivity("Weight Training")}>Weight Training</div>
                </div>
              </div>
            )}
          </div>

        </div>
        
        <div className='flex'>
          <div className="border-[2px] border-blue rounded-[12px] lg:w-[1024px]  md:w-[100vw] w-[90vw]  h-[36px] mt-[10px] flex justify-between items-center px-2">
            <input
              type="text"
              placeholder="Search by name or keyword"
              value={searchText}
              onChange={handleSearch}
              className="w-full text-blue font-medium outline-none bg-transparent placeholder:text-blue/50"
            />
            <Search color="blue" className="mx-2" />
          </div>

          <div className='md:hidden'>
            <Menu className='h-[37px] w-[37px] ml-[9px] mr-[20px] mt-[9px] border-2 border-gray-700 rounded-md hover:cursor-pointer hover:bg-gray-300' onClick={toggleMenu}/>
            {isOpen5 && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>     
                )}
            {isOpen5 && (
              <div className='bg-white w-[70vw] h-full border-2 border-black flex flex-col z-20 fixed right-0 bottom-[0px] '>
                <div className='flex justify-between'>
                  <X color="black"className='hover:cursor-pointer'onClick={toggleMenu}/>
                  <div className='text-[36px] font-montserrat font-semibold'>Filter</div>
                  <div></div>
                </div>

                <div className='text-[30px] font-medium font-montserrat mt-[10px]'>Gender</div>
                <div className='bg-white w-auto h-[124px]  '>
                <div className='flex flex-col justify-between'>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedGender === "All" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectGender("All")}> All </div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedGender === "Male" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectGender("Male")}>Male</div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedGender === "Female" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectGender("Female")}>Female</div>
                </div>
                <div className='border-[1px] border-gray-400 mt-[5px]'/>
              </div>

              <div className='text-[30px] font-medium font-montserrat mt-[10px]'>Price</div>
              <div className='bg-white w-auto h-[124px]  '>
                <div className='flex flex-col justify-between'>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedPrice === "All" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectPrice("All")}> All </div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedPrice === "less than THB 1,000" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectPrice("less than THB 1,000")}>less than THB 1,000</div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedPrice === "more than THB 1,000" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectPrice("more than THB 1,000")}>more than THB 1,000</div>
                </div>
                <div className='border-[1px] border-gray-400 mt-[5px]'/>
              </div>

              <div className='text-[30px] font-medium font-montserrat mt-[10px]'>Duration</div>
              <div className='bg-white w-auto h-[124px]  '>
                <div className='flex flex-col justify-between'>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedDuration === "All" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectDuration("All")}> All </div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedDuration === "30-min" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectDuration("30-min")}>30-min</div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedDuration === "60-min" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectDuration("60-min")}>60-min</div>
                </div>
                <div className='border-[1px] border-gray-400 mt-[5px]'/>
              </div>

              <div className='text-[30px] font-medium font-montserrat mt-[10px]'>Activity</div>
              <div className='bg-white w-auto h-[124px]  '>
                <div className='flex flex-col justify-between'>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedActivity === "All" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectActivity("All")}> All </div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedActivity === "Dancing" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectActivity("Dancing")}>Dancing</div>
                  <div className={`cursor-pointer  p-2 font-semibold rounded-lg w-auto ${selectedActivity === "Weight Training" ? "bg-green text-white hover:bg-lime" : "hover:bg-gray-300"}`}onClick={() => selectActivity("Weight Training")}>Weight Training</div>
                </div>
                <div className='border-[1px] border-gray-400 mt-[5px]'/>
              </div>

              </div>
            )}
          </div>

        </div>
        <img src="" alt="" />

      </div>
      
    </div>
  )

  function getOptions(key) {
    const options = {
      gender: ["Male", "Female"],
      price: ["less than THB 1,000", "more than THB 1,000"],
      duration: ["30-min", "60-min"],
      activity: ["Dancing", "Weight Training"],
    };
    return options[key] || [];
  }
}

export default FilterBar