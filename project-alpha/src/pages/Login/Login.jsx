import React, { useEffect } from "react";
import axios from "axios"

const Login = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get("/api/course").then((res) => {
      });
    } catch (err) {
      console.log({ message: err });
    }
  };

  const handleSubmit = () => {
    console.log("skibi");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue">
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-900 rounded-2xl shadow-md px-20 py-7 flex flex-col items-center ">
          <form action={handleSubmit} className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center text-blue-900 dark:text-gray-200 ">
              Login
            </h1>
            <h2 className=" text-center text-blue-900 dark:text-gray-200 mb-4 ">
              sign in to continue
            </h2>
            <div className="space-y-4">
              <div>
                <input
                  name="Username"
                  type="Username"
                  required
                  className=" w-full rounded-3xl bg-gray-100 outline-blue-900 px-5 py-3"
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className=" w-full rounded-3xl bg-gray-100 outline-blue-900 px-5 py-3"
                placeholder="Password"
              />
            </div>
            <div className="remember-forgot mb-3">
              <a href="#">Forgot password ?</a>
            </div>

            <button
              className=" text-center h-18  rounded-3xl bg-blue px-5 py-3 font-semibold text-white"
              type="submit"
            >
              Login
            </button>
            <div>
              <h3 className="text-center text-blue-900 dark:text-gray-200  ">
                Or Sign Up Using
              </h3>
            </div>
            <div className="register-link text-center text-blue-900 dark:text-gray-200 mb-4 ">
              <p>
                Not a member? <a href="/register"> Signup now</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
