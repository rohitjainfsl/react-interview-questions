import React, { useState } from "react";
import { colors } from "./data.js";
import "./style.css";

function Main() {
  const [dots, setDots] = useState([]);
  const [redo, setRedo] = useState([]);

  function createDots(e) {
    const randomValue = colors[Math.floor(Math.random() * colors.length)];
    const coord = { x: e.clientX, y: e.clientY };
    const dot = { id: Date.now(), backgroundColor: randomValue, coord: coord };

    setDots([...dots, dot]); //dots.push(dot)
  }

  function cleanSlate() {
    setDots([]);
    setRedo([]);
  }

  function handleUndo() {
    // const copy = dots;
    // const lastDot = copy.pop();
    // setRedo([...redo, lastDot]);

    setDots((prev) => {
      const copy = [...prev];
      setRedo((prevRedo) => [...prevRedo, copy.pop()]);
      return copy;
    });
  }

  function handleRedo() {
    // const copy = redo;
    // const lastDot = copy.pop();
    // setDots([...dots, lastDot]);

    setRedo((prev) => {
      const copy = [...prev];
      setDots((prevDots) => [...prevDots, copy.pop()]);
      return copy;
    });
  }
  //   e.stopPropagation

  return (
    <>
      <div className="controls">
        <button disabled={dots.length === 0} onClick={cleanSlate}>
          Reset
        </button>
        <button disabled={dots.length === 0} onClick={handleUndo}>
          Undo
        </button>
        <button
          disabled={dots.length === 0 || redo.length === 0}
          onClick={handleRedo}
        >
          Redo
        </button>
      </div>
      <div className="screen" onClick={createDots}>
        {dots.map((dot) => {
          return (
            <div
              key={dot.id}
              className="dot"
              style={{
                backgroundColor: dot.backgroundColor,
                top: dot.coord.y - 10 + "px",
                left: dot.coord.x - 10 + "px",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
