import React, { useRef } from "react";
import { Button } from "@mui/material";
import PdfUpload from "./PdfUpload";
import CanvasDraw from "react-canvas-draw";
import "./canvas.css";
import { useIsMobileOrTablet } from "./isMobileOrTablet";
//import AlphabetDraw from "./AlphabetDraw";
import Drawing from "./Drawing";
//import AlphabetDraw from "./AlphabetDraw";

const Canvas = () => {
  const isMobOrTab = useIsMobileOrTablet();
  const canvas = useRef(null);
  const handleClick = () => {
    const data = canvas.current.getSaveData();
    const clear = canvas;
  };
  const clear = () => {
    canvas.current.clear();
  };
  const undo = () => {
    canvas.current.undo();
  };
  return (
    <div className="container">
      <div className="canvas">
        <h1>Try to draw..</h1>

        <p className="para">
          <span role="img" aria-label="fingers pointing down">
            👇👇👇👇
          </span>{" "}
          Use your {isMobOrTab ? "finger" : "mouse"} to draw{" "}
          <span role="img" aria-label="fingers pointing down">
            👇👇👇👇
          </span>
        </p>
        <CanvasDraw
          brushRadius={1}
          brushColor="red"
          hideGrid={true}
          style={{
            boxShadow:
              "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
          }}
          ref={canvas}
        />
      </div>

      <Button onClick={handleClick}>Save Drawing</Button>
      <Button size="large" onClick={clear}>
        Clear the canvas
      </Button>
      <Button size="large" onClick={undo}>
        Undo
      </Button>
      <Drawing />
    </div>
  );
};
export default Canvas;
