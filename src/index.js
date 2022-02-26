import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import GeneralProvider from "./context/generalContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
