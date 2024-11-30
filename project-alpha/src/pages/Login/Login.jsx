import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="wrapper bg-slate-300">
        <form action="">
          <h1>Login</h1>
          <h2 className=" mt-2 bg-s">sign in to continue</h2>
          <div className="input-box">
            <input type="text-lg font-medium" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="Password" placeholder="Password" required />
          </div>
          <div className="remember-forgot">
            <a href="#">Forgot password ?</a>
          </div>

          <button type="submit">Login</button>
          <div>
            <h3>Or Sign Up Using</h3>
          </div>
          <div className="register-link">
            <p>
              Not a member? <a href="/register"> Signup now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
