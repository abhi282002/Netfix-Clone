import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="w-full flex  justify-between absolute z-10 px-8 py-2 bg-gradient-to-b from-black">
        <img
          className="w-40 bg-gradient-to-b from-black"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        {user && (
          <div className="flex mt-1 gap-x-4 lg:gap-x-6">
            <img
              className="w-[45px] h-[45px] rounded-3xl"
              src={user?.photoURL}
              alt="user_icon"
            />
            <button
              onClick={handleLogOut}
              className="w-[100px] h-[45px] border p-2 bg-blue-600  border-blue-600 rounded-md"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
