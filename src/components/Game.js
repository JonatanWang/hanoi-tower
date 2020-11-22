import React from "react";
import { useState, useRef } from "react";
import Board from "./Board";
import "../css/Game.css";

function GameSetting(props) {
  const [numberOfDiscs, setNumberOfDiscs] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const inputRef = useRef(null);

  const startGame = () => {
    if (numberOfDiscs > 14) {
      alert("Choose less than 14 discs!");
      return;
    }
    setIsGameStarted(true);
  };
  const stopGame = () => {
    inputRef.current.focus();
    setIsGameStarted(false);
  };

  return (
    <div className="GameSetting">
      <h1>Hanoi Tower Game</h1>
      <p>
        Introduction: click start rod/stack to choose the top disc AND click the
        destination rod/stack to place it.
      </p>
      <div className="GameSetting-input">
        <input
          disabled={isGameStarted}
          ref={inputRef}
          value={numberOfDiscs}
          onChange={(e) => {
            setNumberOfDiscs(e.target.value);
          }}
        />
        <button disabled={isGameStarted} onClick={startGame}>
          Start
        </button>
        <button disabled={!isGameStarted} onClick={stopGame}>
          Stop
        </button>
      </div>
      {isGameStarted ? (
        <Board numberOfDiscs={numberOfDiscs} />
      ) : (
        <div className="empty-board"></div>
      )}
    </div>
  );
}

export default GameSetting;
