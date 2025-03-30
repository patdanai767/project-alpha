import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("AUTH_KEY") || "");
  const navigate = useNavigate();

  const registerAction = async (data) => {
    try {
      const res = await axios.post("/api/auth/register", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (Cookies.get("AUTH_KEY")) {
        Cookies.remove("AUTH_KEY");
      }
      setToken(res.data.accessToken);
      Cookies.set("AUTH_KEY", res.data.accessToken);
      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  const loginAction = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (res.error?.message) {
        throw new Error(res.error.message);
      } else {
        if (Cookies.get("AUTH_KEY")) {
          Cookies.remove("AUTH_KEY");
        }
        setToken(res.data.accessToken);
        Cookies.set("AUTH_KEY", res.data.accessToken);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          text: res.data.message,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Something went wrong",
        timer: 2000,
        timerProgressBar: true,
      });
      throw new Error(error);
    }
  };

  const logoutAction = () => {
    try {
      const token = Cookies.get("AUTH_KEY");
      if (!token) {
        throw new Error("Token is empty");
      } else {
        setToken("");
        Cookies.remove("AUTH_KEY");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, registerAction, loginAction, logoutAction }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
