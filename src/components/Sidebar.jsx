import React from "react";
import { FaHighlighter, FaHome, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar w-1/5 px-4">
      <ul>
        <li className="mb-4">
          <Link
            to="/home"
            className="flex items-center py-3 font-medium rounded-full gap-3  hover:pl-3 hover:bg-slate-100"
          >
            <FaHome size="20" />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/explore"
            className="flex items-center py-3 font-medium rounded-full gap-3  hover:pl-3 hover:bg-slate-100"
          >
            <FaHighlighter size="20" />
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/store"
            className="flex items-center py-3 font-medium rounded-full gap-3  hover:pl-3 hover:bg-slate-100"
          >
            <FaStore size="20" />
            Store
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
