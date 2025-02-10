import React, { useEffect, useState } from "react";
import Footer from "../../components/Navbar/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [selectTypeRole, setSelectTypeRole] = useState("Trainee");
  const [details, setDetails] = useState({
    fullname: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    sex: undefined,
    role: undefined,
  });
  const navigate = useNavigate();
  const authAction = useAuth();

  useEffect(() => {
    console.log(details);
    if (Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
  }, []);

  const handleSelectTrainee = () => {
    setSelectTypeRole("Trainee");
    setDetails({ role: selectTypeRole });
  };

  const handleSelectTrainer = () => {
    setSelectTypeRole("Trainer");
  };

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(details);
      if (details !== undefined) {
        authAction.registerAction(details);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky">
      <Navbar />
      <div className="md:grid grid-cols-2">
        {selectTypeRole === "Trainee" ? (
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-md w-[550px] my-[100px]">
              <div className="my-10 mx-10 grid gap-7">
                <div>
                  <div className="font-semibold text-3xl">
                    Register For <span className="text-green/80">Trainee</span>{" "}
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
                      name="fullname"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Username</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your username"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Password</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                    />
                  </div>
                  <div className="flex gap-4 items-center mt-1">
                    <div className="font-semibold">Sex</div>
                    <form
                      className="flex gap-6"
                      name="sex"
                      onChange={handleChange}
                    >
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="Male"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        Male
                      </div>
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="Female"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        Female
                      </div>
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="LGBTQ"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        LGBTQ+
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
                  <div
                    className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded"
                    onClick={handleRegister}
                  >
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
                    Register For <span className="text-green/80">Trainer</span>{" "}
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
                      name="fullname"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Username</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your username"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Password</div>
                    <input
                      className="w-full border p-2 border-slate-300 rounded"
                      placeholder="Enter your password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                    />
                  </div>
                  <div className="flex gap-4 items-center mt-1">
                    <div className="font-semibold">Sex</div>
                    <form
                      className="flex gap-6"
                      name="sex"
                      onChange={handleChange}
                    >
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="Male"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        Male
                      </div>
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="Female"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        Female
                      </div>
                      <div className="flex border border-slate-300 rounded-lg p-1 px-4 cursor-pointer hover:bg-slate-200 transition">
                        <input
                          type="radio"
                          value="LGBTQ"
                          name="sex"
                          className="mr-2 cursor-pointer"
                        />
                        LGBTQ+
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
                  <div
                    className="border cursor-pointer flex justify-center bg-blue text-white py-3 rounded"
                    onClick={handleRegister}
                  >
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
        
        
        <button type="create" class="mb-3 w-[40vh]  ml-[4vh] rounded-3xl bg-blue  px-5 py-3 font-semibold text-white">Create</button>
      
        
      </form>
     </div>
     </div>
    
)
}

export default Register;
