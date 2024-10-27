import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    console.log("clicked");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 mb-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full rounded-md bg-black bg-opacity-50 border border-gray-100"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-3 my-2 w-full rounded-md bg-black bg-opacity-50 border border-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md bg-black bg-opacity-50 border border-gray-100  "
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
