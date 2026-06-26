import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { StrictMode } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import { useState } from "https://esm.sh/react";

function Square(){
  const [value, setValue] = useState(null);
  
  function handleClick(){
    setValue("X");
  }
  return( 
    <button className="square" onClick={handleClick}>{value}
    </button>
 );
}

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);
  return(
    <>
    <div className="board-row">
    <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
      </div>
      
    <div className="board-row">
    <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
      </div>
      
      <div className="board-row">
    <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board>
    </Board>
  </StrictMode>
);