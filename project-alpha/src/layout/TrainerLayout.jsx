import { Outlet } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { useEffect } from "react";

export default function TrainerLayOut() {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/user/profile", config.headers())
        .then((res) => {
          if (res.data.role !== "trainer") {
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
