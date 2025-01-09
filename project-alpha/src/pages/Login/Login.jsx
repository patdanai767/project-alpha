import React, { useEffect, useState } from "react";
import Footer from "../../components/Navbar/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const authAction = useAuth();

  useEffect(() => {
    if (Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSummit = async (e) => {
    e.preventDefault();
    try {
      authAction.loginAction(credentials);
    } catch (error) {
      console.log(error);
    }
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
                  placeholder="example@gmail.com"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2">Password</div>
                <input
                  className="w-full border p-2 border-slate-300 rounded"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div
                className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded"
                onClick={handleSummit}
              >
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
