import React, { createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = React.useState([
    {
      id: 1,
      title: "harry potter",
      price: "30",
    },
    {
      id: 2,
      title: "got",
      price: "30",
    },
    {
      id: 3,
      title: "inception",
      price: "30",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
