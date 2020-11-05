import React, { useState } from "react";
import { GAMESTATE } from "../constants";

let intervalID = null;
const gameLength = 3;

const Timer = (props) => {
  const [gameTimer, setGameTimer] = useState(0);
  const { gameState, setGameState } = props;

  const countDown = () => {
    setGameTimer(gameLength);
    setGameState(GAMESTATE.STARTED);

    intervalID = setInterval(() => {
      setGameTimer((gameTimer) => {
        if (gameTimer === 1) {
          setGameState(GAMESTATE.FINISHED);
          clearInterval(intervalID);
        }
        return gameTimer - 1;
      });
    }, 1000);
  };

  return (
    <section>
      <h3>Timer: {gameTimer} </h3>
      <button
        onClick={(event) => {
          event.preventDefault();
          countDown();
        }}
        disabled={gameState === GAMESTATE.STARTED}
      >
        Start Game
      </button>
    </section>
  );
};

export default Timer;
