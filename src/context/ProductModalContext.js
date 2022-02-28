import React, { createContext, useState } from "react";

export const ProductModalContext = createContext();

const Provider = ({ children }) => {
  const [prodModAtive, setProdModActive] = useState(false);
  return (
    <ProductModalContext.Provider value={{ prodModAtive, setProdModActive }}>
      {children}
    </ProductModalContext.Provider>
  );
};

export default Provider;
