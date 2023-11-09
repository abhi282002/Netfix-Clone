import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/valid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const selector = useSelector((store) => store.user);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  };
  const handleLogin = () => {
    const isValid = isSignIn
      ? Validate(undefined, email.current.value, password.current.value)
      : Validate(
          fullName.current.value,
          email.current.value,
          password.current.value
        );

    console.log(fullName);
    setErrorMessage(isValid);
    if (isValid) return;
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          //if response is success it will given userObject
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D5603AQEwMPEYHXZzmA/profile-displayphoto-shrink_400_400/0/1698630644090?e=1704931200&v=beta&t=C4J1iDkZkLfmIZnkCvRc9nf_jtj28A2towRdfcrxQHE",
          })
            .then(() => {
              //profile updated
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
            })
            .catch((error) => {
              //an Error occured
              setErrorMessage(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="sm:w-[400px] lg:w-[380px] h-[500px]  mx-auto sm:my-28 bg-opacity-70 bg-black"
        >
          <h1 className="font-bold text-3xl py-4 px-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-3 my-4 w-[290px] ml-12 bg-gray-700 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-3 w-[290px] my-4 ml-12 bg-gray-700 rounded-sm"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-4 w-[290px] ml-12 bg-gray-700 rounded-sm"
          />
          <p className="text-red-600 font-bold ml-10">{errorMessage}</p>
          <button
            onClick={handleLogin}
            className="font-bold p-3 my-6 w-[290px] ml-12 bg-red-600 rounded-md"
          >
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
