import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative w-full">
      <Header />
      <div className="absolute">
        <img
          className="sm:h-screen lg:w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
        />
      </div>
      <div className="w-full  absolute text-white right-0 top-0">
        <form className="sm:w-[340px] lg:w-[380px] h-[500px]  mx-auto sm:my-28 bg-opacity-70 bg-black">
          <h1 className="font-bold text-3xl py-4 px-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-[250px] ml-12 bg-gray-700 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-2 w-[250px] my-4 ml-12 bg-gray-700 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-[250px] ml-12 bg-gray-700 rounded-lg"
          />

          <button className="p-3 my-6 w-[250px] ml-12 bg-red-600 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="mx-8 cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
