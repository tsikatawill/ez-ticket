import React, { useContext } from "react";
import CEO from "./components/CEO";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import SpecialSale from "./components/SpecialSale";
import { generalContext } from "./context/generalContext";

const App = () => {
  const { darkTheme } = useContext(generalContext);
  return (
    <div className={`App ${darkTheme ? "dark" : ""}`}>
      <Header />
      <main>
        <Showcase />
        <CEO />
        <SpecialSale />
      </main>
      <Footer />
    </div>
  );
};

export default App;
