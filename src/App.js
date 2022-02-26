import React, { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import { generalContext } from "./context/generalContext";

const App = () => {
  const { darkTheme } = useContext(generalContext);
  return (
    <div className={`App ${darkTheme ? "dark" : ""}`}>
      <Header />
      <main>
        <Showcase />
      </main>
      <Footer />
    </div>
  );
};

export default App;
