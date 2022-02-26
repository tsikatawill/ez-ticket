import React, { createContext, useState } from "react";

export const generalContext = createContext();

const GeneralProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <generalContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </generalContext.Provider>
  );
};

export default GeneralProvider;
