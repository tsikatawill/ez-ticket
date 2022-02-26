import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-gray-800 flex flex-col justify-between text-white dark:bg-black py-5">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
