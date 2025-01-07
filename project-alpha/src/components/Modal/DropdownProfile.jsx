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
          <div className="flex flex-col p-2 cursor-pointer border-b">
            Profile
          </div>
          <div className="flex flex-col p-2 cursor-pointer border-b">
            Messenger
          </div>
          <div className="flex flex-col p-2 cursor-pointer border-b">
            Dashboard
          </div>
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
