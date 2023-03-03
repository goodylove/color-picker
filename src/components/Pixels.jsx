import React from "react";
import { colorContext } from "./../Context";

import Pixel from "./Pixel";

const Pixels = () => {
  const pixels = [];

  for (let x = 0; x < 50; x++) pixels.push(<Pixel key={x} />);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10,1fr)",
        margin: "10px",
        width: "200px",
      }}
    >
      {pixels}
    </div>
  );
};

export default Pixels;
