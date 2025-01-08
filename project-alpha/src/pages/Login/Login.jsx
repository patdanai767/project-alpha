import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Navbar/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
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

  const handleSubmit = () => {
    console.log("skibi");
  };
  return (
    <div className="bg-sky">
      <Navbar />
      <div className="md:grid grid-cols-2 h-screen">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-md w-[550px] my-[200px]">
            <div className="my-10 mx-10 grid gap-7">
              <div>
                <div className="font-semibold text-3xl">Welcome Back!</div>
                <div className="text-slate-300">Please enter your details</div>
              </div>
              <div className="border-t border-black">
                <div className="mt-[28px] mb-2">Email</div>
                <input
                  className="border p-2 w-full border-slate-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="mb-2">Password</div>
                <input
                  className="w-full border p-2 border-slate-300 rounded"
                  placeholder="Enter your password"
                />
              </div>
              <div className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded">
                Sign in
              </div>
              <div className="grid justify-center gap-1">
                <div className="flex justify-center">
                  Forgot{" "}
                  <a className="text-lightblue/70 underline mx-1" href="#">
                    password
                  </a>{" "}
                  ?
                </div>
                <div className="flex justify-center">
                  Don't you have an account?
                  <a
                    className="text-lightblue/70 underline ml-4"
                    href="/register"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Login;
