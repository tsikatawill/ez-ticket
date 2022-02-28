import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
