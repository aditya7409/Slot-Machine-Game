import React, { useState } from 'react';
import './SlotMachine'
import SlotMachine from './SlotMachine';
import Data from './Data'

var rand = Data[~~(Math.random() * Data.length)];
var xx = rand.x;
var yy = rand.y;
var zz = rand.z;
const App = () => {
  const [allValues, setAllValues] = useState({
    A: xx,
    B: yy,
    C: zz
  });
  function show() {
    rand = Data[~~(Math.random() * Data.length)];
    xx = rand.x;
    yy = rand.y;
    zz = rand.z;
    setAllValues({ A: xx, B: yy, C: zz })
    var doc = document.querySelector(".game");
    doc.style.contentVisibility = "auto";
  }

  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome To{" "}
        <span style={{ fontWeight: "bold" }}> Slot Machine game </span> 🎰
      </h1>
      <div className="btn">
        <button onClick={show} type="button" id="btn1">Try Your Luck</button>
      </div>
      <div className="game" style={{ contentVisibility: 'hidden' }} >
        <SlotMachine x={xx} y={yy} z={zz} />
      </div>
    </>
  )
}

export default App;
