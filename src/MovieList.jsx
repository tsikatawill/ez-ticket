import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieListContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="container">
      <h2 style={{ marginTop: "1rem" }}>Movies</h2>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
