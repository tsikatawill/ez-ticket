import React from "react";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieListContext";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

const App = () => {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
};

export default App;
