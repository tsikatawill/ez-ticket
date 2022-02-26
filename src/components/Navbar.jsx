import React from "react";
import { FaSkating } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <div className="logo font-semibold text-xl flex items-center">
          SK8Hi <FaSkating />
        </div>
        <div className="nav-menu flex gap-4">
          <div className="nav-link">Home</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Buy</div>
          <div className="nav-link">Contact</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
