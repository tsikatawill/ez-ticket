import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Provider from "./context/ProductModalContext";

const App = () => {
  return (
    <div
      className="App flex flex-col"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="container flex mb-auto">
        <Sidebar />
        <Provider>
          <main className="w-4/5 px-4">
            <Outlet />
          </main>
        </Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
