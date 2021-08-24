import React, { useEffect, useState } from "react";
import { GAME_STATE } from "../constants";

let intervalID = null;
const gameLength = 30;

const Timer = (props) => {
  const [gameTimer, setGameTimer] = useState(0);
  const { gameState, setGameState } = props;

  const countDown = () => {
    setGameTimer(gameLength);
    setGameState(GAME_STATE.STARTED);

    intervalID = setInterval(() => {
      setGameTimer((gameTimer) => {
        return gameTimer - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (gameTimer === 0) {
      setGameState(GAME_STATE.FINISHED);
      clearInterval(intervalID);
    }
  });

  return (
    <section>
      <h3>Timer: {gameTimer} </h3>
      <button
        className="startButton"
        onClick={(event) => {
          event.preventDefault();
          countDown();
        }}
        disabled={gameState === GAME_STATE.STARTED}
      >
        Start Game
      </button>
    </section>
  );
};
export default Timer;
