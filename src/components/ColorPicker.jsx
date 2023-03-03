import React, { useContext } from "react";
import { colorContext } from "./../Context";
const ColorPicker = () => {
  const { setColor } = useContext(colorContext);
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "black",
    "orange",
  ];
  return (
    <div>
      {colors.map((color) => (
        <button
          onClick={() => setColor(color)}
          style={{
            backgroundColor: color,
            height: "20px",
            margin: "10px 10px",
            width: "20px",
          }}
          key={color}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
