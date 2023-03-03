import React from "react";
import Pixel from "./Pixel";

const Pixels = () => {
  const pixels = [];

  for (let x = 0; x < 50; x++) pixels.push(<Pixel />);

  return <div>{pixels}</div>;
};

export default Pixels;
