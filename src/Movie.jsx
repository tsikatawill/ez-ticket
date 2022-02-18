import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <h4 style={{ textTransform: "capitalize" }}>{movie.title}</h4>
      <p>Ghc{movie.price}</p>
    </div>
  );
};

export default Movie;
