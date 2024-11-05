import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGAUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); //to be used in avatar
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignout = () => {
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
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
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //whenver component unmounts
  }, []);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-20 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex justify-between items-center ">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white rounded-lg font-bold"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGAUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="p-3 m-2"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-2 mx-4 bg-white rounded-lg text-black text-base font-bold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-7 h-7 rounded-md"
            src={user?.photoURL}
            alt="usericon"
          />

          <button
            className="font-bold text-white text-xl pl-3 hover:underline"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
