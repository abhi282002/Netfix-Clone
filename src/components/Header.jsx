import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { LOGO, multiLang } from "../utils/constant";
import { addLanguage } from "../utils/langSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchPage = location.pathname === "/browse/search";
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
        isSearchPage ? navigate("/browse/search") : navigate("/browse");
      } else {
        // User   navigate("/browse");is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubcribe();
  }, []);

  return (
    <>
      <div className="w-screen flex  justify-between absolute z-10 px-8 py-2 bg-gradient-to-b from-black/100 opacity-100">
        <img
          className="w-40 bg-gradient-to-b from-black"
          src={LOGO}
          alt="Logo"
        />
        {user && (
          <div className="flex mt-1 gap-x-4 lg:gap-x-6 z-10">
            {!isSearchPage && (
              <button
                onClick={() => navigate("/browse/search")}
                className=" h-[45px] text-white rounded-md px-4 font-medium bg-purple/75 "
              >
                GPT Search
              </button>
            )}
            {isSearchPage && (
              <select
                className="h-[35px] mt-1 px-5 font-medium"
                onChange={(e) => dispatch(addLanguage(e.target.value))}
              >
                {multiLang.map((name) => {
                  return (
                    <option key={name.identifier} value={name.identifier}>
                      {name.name}
                    </option>
                  );
                })}
              </select>
            )}

            <img
              className="w-[45px] h-[45px] rounded-3xl"
              src={user?.photoURL}
              alt="user_icon"
            />
            <button
              onClick={handleLogOut}
              className=" h-[45px] border py-2 px-8 text-white font-semibold bg-yellow  border-yellow rounded-md"
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
