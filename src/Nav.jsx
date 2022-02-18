import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logogo</div>
        <span className="movie-count">
          Number of movies: <strong>{movies.length}</strong>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
