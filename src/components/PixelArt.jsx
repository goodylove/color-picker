import React from "react";
import ColorPicker from "./ColorPicker";
import Pixels from "./Pixels";
const PixelArt = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <ColorPicker />
      <Pixels />
    </div>
  );
};

export default PixelArt;
