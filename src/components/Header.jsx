import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container py-5 px-4 flex">
        <Link to="/home">
          <div className="logo flex gap-3 w-1/5 items-center">
            <span className="text-xl font-bold">Mart Around</span>
            <FaShoppingCart size="30" />
          </div>
        </Link>
        <form
          className="search w-4/5 flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group relative">
            <input
              type="text"
              className="py-2 px-4 rounded-full"
              placeholder="Search"
            />
            <div className="search-icon absolute right-3 top-2">
              <FaSearch size="20" />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
