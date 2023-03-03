import React, { createContext, useState } from "react";

export const colorContext = createContext({
  color: "lightGrey",
  setColor: () => {},
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("lightGrey");
  return (
    <colorContext.Provider value={{ color, setColor }}>
      {children}
    </colorContext.Provider>
  );
};
export default ColorProvider;
