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
    <div className="bg-sky">
      <Navbar />
      <div className="md:grid grid-cols-2">
        {selectTypeRole ? (
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-md w-[550px] my-[100px]">
              <div className="my-10 mx-10 grid gap-7">
                <div>
                  <div className="font-semibold text-3xl">
                    <div></div>
                    Register For <span className="text-green/80">
                      Trainee
                    </span>{" "}
                  </div>
                  <div className="text-slate-300">
                    Please enter your details
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div
                    onClick={handleSelectTrainee}
                    className="flex justify-center border p-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    Trainee account
                  </div>
                  <div
                    onClick={handleSelectTrainer}
                    className="flex justify-center border p-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    Trainer account
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="border-t border-black">
                    <div className="font-semibold mt-[28px] mb-2">Fullname</div>
                    <input
                      className="border p-2 w-full border-slate-300 rounded"
                      placeholder="Enter your fullname"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Username</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Password</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="font-semibold">Sex</div>
                    <form className="flex gap-6">
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">Male</div>
                      </div>
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">Female</div>
                      </div>
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">LGBTQ+</div>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-4">
                    <input type="radio" />
                    <div>
                      I accept the terms of use and{" "}
                      <a href="#" className="text-lightblue/70 underline">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <div className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded">
                    Register
                  </div>
                </div>
                <div className="grid justify-center gap-1">
                  <div className="flex justify-center">
                    Do you already have an account?
                    <a
                      className="text-lightblue/70 underline ml-4"
                      href="/login"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-md w-[550px] my-[100px]">
              <div className="my-10 mx-10 grid gap-7">
                <div>
                  <div className="font-semibold text-3xl">
                    <div></div>
                    Register For <span className="text-green/80">
                      Trainer
                    </span>{" "}
                  </div>
                  <div className="text-slate-300">
                    Please enter your details
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div
                    onClick={handleSelectTrainee}
                    className="flex justify-center border p-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    Trainee account
                  </div>
                  <div
                    onClick={handleSelectTrainer}
                    className="flex justify-center border p-2 border-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    Trainer account
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="border-t border-black">
                    <div className="font-semibold mt-[28px] mb-2">Fullname</div>
                    <input
                      className="border p-2 w-full border-slate-300 rounded"
                      placeholder="Enter your fullname"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Username</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Password</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="font-semibold">Sex</div>
                    <form className="flex gap-6">
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">Male</div>
                      </div>
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">Female</div>
                      </div>
                      <div className="flex border rounded-lg p-1 px-2 cursor-pointer hover:bg-slate-200 transition">
                        <input type="radio" />
                        <div className="ml-2">LGBTQ+</div>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-4">
                    <input type="radio" />
                    <div>
                      I accept the terms of use and{" "}
                      <a href="#" className="text-lightblue/70 underline">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                  <div className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded">
                    Register
                  </div>
                </div>
                <div className="grid justify-center gap-1">
                  <div className="flex justify-center">
                    Do you already have an account?
                    <a
                      className="text-lightblue/70 underline ml-4"
                      href="/login"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <img
            className="md:block hidden w-[700px] my-[150px]"
            src="/background-gym.png"
            height={500}
            width={500}
            alt="gym"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
