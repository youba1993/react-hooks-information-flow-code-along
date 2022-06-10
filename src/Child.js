import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
function handleclick(){
  const newColor = getRandomColor();
  onChangeColor(newColor)
}
  return <div 
          onClick={handleclick}
          className="child" 
          style={{ backgroundColor: {color} }} />;
}

export default Child;
