import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div class='flex items-center justify-center min-h-screen from-purple-900 via-indigo-800 to-indigo-500 bg-gradient-to-br'>
    <div class="max-w-lg mx-auto  bg-white dark:bg-gray-900 rounded-3xl shadow-md px-20 py-7 flex flex-col items-center"> 
      
      <h1 class="text-4xl font-bold text-center text-blue-900 dark:text-gray-200 mb-4">Create new Account</h1>
      <h2 className=" text-blue-900 mb-8 font-bold">Already Registered? Login</h2>
      <form action="#" class="w-full flex flex-col gap-4">
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white ">UserName</label>
          <input type="username" class=" w-full rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">FullName</label>
          <input type="fullname" class=" w-full rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">Email</label>
          <input type="email" class="mb-3 w-full rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
        <label className="block mb-2 text-sm font-medium text-blue-900  dark:text-white">Password</label>
          <input type="password" class="mb-3 w-full rounded-3xl bg-slate-200 outline-blue-900 px-5 py-3" placeholder="" />
             
        <button type="password" class="mb-3 w-full rounded-3xl bg-blue-900  px-5 py-3 font-semibold text-white">Login</button>
      
     
      </form>
     </div>
     </div>
    
)
}

export default Register




