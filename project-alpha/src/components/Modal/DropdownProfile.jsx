import { useAuth } from "../../contexts/AuthContext";

export default function DropdownProfile({
  arr,
  setIsDropdownOpen,
  isDropdownOpen,
}) {
  const authAction = useAuth();

  const toggleLogout = () => {
    try {
      authAction.logoutAction();
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      {isDropdownOpen && (
        <div className="absolute p-2 -translate-x-32 translate-y-2 rounded bg-red w-[130px] border shadow-lg z-20">
          <a className="flex flex-col p-2 cursor-pointer border-b" href="/profile">
            Profile
          </a>
          <a className="flex flex-col p-2 cursor-pointer border-b" href="/messenger">
            Messenger
          </a>
          <a className="flex flex-col p-2 cursor-pointer border-b" href="/profile/dashboard">
            Dashboard
          </a>
          <div
            className="flex flex-col p-2 cursor-pointer"
            onClick={toggleLogout}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
