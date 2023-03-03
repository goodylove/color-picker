import React, { useContext, useState } from "react";
import { colorContext } from "./../Context";

const Pixel = () => {
  const { color } = useContext(colorContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        backgroundColor: pixelColor,
        height: "50px",
        width: "50px",
        margin: "5px",
      }}
    ></div>
  );
};

export default Pixel;
