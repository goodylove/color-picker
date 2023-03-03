import React from "react";
import ColorPicker from "./ColorPicker";
import { colorContext } from "../Context";
import ColorProvider from "../Context";

import Pixels from "./Pixels";
const PixelArt = () => {
  return (
    <ColorProvider
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
    </ColorProvider>
  );
};

export default PixelArt;
