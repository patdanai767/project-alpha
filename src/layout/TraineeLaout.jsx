import { Outlet,useNavigate } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { useEffect } from "react";

export default function TrainerLayOut() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_BASE_URL}/user/profile`, config.headers())
        .then((res) => {
          if (res.data.role !== "trainee") {
            navigate("/");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}
