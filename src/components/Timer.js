import React, { useEffect, useState } from "react";
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
        return gameTimer - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (gameTimer === 0) {
      setGameState(GAMESTATE.FINISHED);
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
        disabled={gameState === GAMESTATE.STARTED}
      >
        Start Game
      </button>
    </section>
  );
};
// test timer works and html text shows
export default Timer;
