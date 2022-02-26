import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { generalContext } from "../context/generalContext";

const Footer = () => {
  const { darkTheme, setDarkTheme } = useContext(generalContext);
  return (
    <footer className="bg-gray-800 dark:bg-black text-white">
      <div className="container py-5">
        <span className="text-2xl">Footer</span>
        <span
          className="dark-mode-toggle dark:bg-white bg-black text-xl fixed bottom-4 right-4 rounded-full  shadow-md p-2 cursor-pointer hover:bg-slate-200"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? (
            <FaSun className="text-yellow-600" />
          ) : (
            <FaMoon className="text-yellow-600" />
          )}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
