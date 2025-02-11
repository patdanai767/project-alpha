import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Navbar/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  const [selectTypeRole, setSelectTypeRole] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get("/api/course").then((res) => {});
    } catch (err) {
      console.log({ message: err });
    }
  };

  const handleSelectTrainee = () => {
    setSelectTypeRole(true);
  };

  const handleSelectTrainer = () => {
    setSelectTypeRole(false);
  };

  return (
    <div class='flex items-center justify-center min-h-screen bg-blue '>
    <div class="max-w-lg mx-auto  bg-white dark:bg-gray-900 rounded-2xl shadow-md px-20 py-7 flex flex-col items-center sm:max-xl "> 
      
      <h1 class="text-4xl font-bold text-center text-blue-900 dark:text-gray-200 mb-4">Create new Account</h1>

      <h2 className=" text-blue-900 mb-8 font-bold">Already Registered? Login</h2>
      <form action="#" class="w-full flex flex-col gap-4">
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white ">UserName</label>
          <input type="username" class=" w-full rounded-3xl bg-slate-200 outline-blue px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">FullName</label>
          <input type="fullname" class=" w-full rounded-3xl bg-slate-200 outline-blue px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">Email</label>
          <input type="email" class="mb-3 w-full rounded-3xl bg-slate-200 outline-blue px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">Password</label>
          <input type="password" class="mb-3 w-full rounded-3xl bg-slate-200 outline-blue px-5 py-3" placeholder="" />
             
        <button type="password" class="mb-3 w-full rounded-3xl bg-blue  px-5 py-3 font-semibold text-white">Login</button>
      </form>

      <div>
        <p className=" text-blue-900 mb-8 font-bold">Already Registered?
          <a href="/Login" class="no-underline hover:underline ...  text-lightblue" > Login</a></p>
        </div>

      
      <form action="#" class="w-full flex flex-col gap-3">
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white ">UserName</label>
          <input type="username" class=" w-80  ml-[0.5vh] rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">FullName</label>
          <input type="fullname" class=" w-80  ml-[0.5vh] rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">Email</label>
          <input type="email" class="mb-3 w-80  ml-[0.5vh] rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <div >
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white ">Password</label>
        <div className="flex  item-center justify-between">
          <input 
          id="hs-toggle-password" 
          type={show ? "text":"password"} 
          class="mb-3 w-80  ml-[0.5vh] rounded-3xl bg-slate-200 outline-blue-900 py-3 ps-4 border "
          placeholder="" 
          />
          <button 
          type="button"
          data-hs-toggle-password='{"target": "#hs-toggle-password"}'
          >
          <p onClick={handleClick} className="ml-[-7vh]  cursor-pointer  text-gray-400 hover:text-[black] duration-300"><LuEye></LuEye></p>
          </button>
        </div>
        </div>
        
        
        <button type="create" class="mb-3 w-[40vh]  ml-[4vh] rounded-3xl bg-blue  px-5 py-3 font-semibold text-white">Create</button>
      
        
      </form>
     </div>
     </div>
    
)
}

export default Register;
