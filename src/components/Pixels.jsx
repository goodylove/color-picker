import React from "react";
import Pixel from "./Pixel";

const Pixels = () => {
  const pixels = [];

  for (let x = 0; x < 50; x++) pixels.push(<Pixel />);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10,1fr)",
        margin: "0 auto",
        width: "200px",
      }}
    >
      {pixels}
    </div>
  );
};

export default Pixels;
