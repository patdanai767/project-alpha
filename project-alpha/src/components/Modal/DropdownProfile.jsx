import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config";

export default function DropdownProfile({ isDropdownOpen }) {
  const authAction = useAuth();
  const [user, setUser] = useState({});

  const toggleLogout = () => {
    try {
      authAction.logoutAction();
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("/api/user/profile", config.headers());
    setUser(res.data);
  };

  return (
    <div>
      {isDropdownOpen && (
        <div className="absolute p-2 -translate-x-32 translate-y-2 rounded-xl text-blue font-medium bg-sky w-[130px] border-2 border-blue shadow-lg z-20">
          {user.role === "trainer" ? (
            <a
              className="flex flex-col p-2 cursor-pointer border-b border-lightblue hover:bg-lightblue hover:text-sky rounded-t-[8px]"
              href="/profile"
            >
              Profile
            </a>
          ) : (
            ""
          )}
          <a
            className="flex flex-col p-2 cursor-pointer border-b border-lightblue hover:bg-lightblue hover:text-sky"
            href="/account"
          >
            Account
          </a>
          <a
            className="flex flex-col p-2 cursor-pointer border-b border-lightblue hover:bg-lightblue hover:text-sky"
            href={user.role === "trainer" ? `/dashboard` : `/mycourse`}
          >
            My course
          </a>
          <div
            className="flex flex-col p-2 cursor-pointer text-red hover:bg-red hover:text-sky rounded-b-[8px]"
            onClick={toggleLogout}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
