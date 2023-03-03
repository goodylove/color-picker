import React from "react";
const ColorPicker = () => {
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
          style={{
            backgroundColor: color,
            height: "20px",
            margin: "10px 10px",
            width: "20px",
          }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
