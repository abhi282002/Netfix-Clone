import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, []);

  return (
    <>
      <div className="w-full flex  justify-between absolute z-10 px-8 py-2 bg-gradient-to-b from-black/100 bg-black/100 ">
        <img
          className="w-40 bg-gradient-to-b from-black"
          src={LOGO}
          alt="Logo"
        />
        {user && (
          <div className="flex mt-1 gap-x-4 lg:gap-x-6 z-10">
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
