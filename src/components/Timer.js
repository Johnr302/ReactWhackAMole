import React, { useState } from "react";

let intervalID = null;
const gameLength = 3;

const Timer = (props) => {
  const [gameTimer, setGameTimer] = useState(gameLength);
  const { gameStarted, setGameStarted } = props;

  const countDown = () => {
    setGameStarted(true);

    intervalID = setInterval(() => {
      setGameTimer((gameTimer) => {
        if (gameTimer === 0) {
          setGameStarted(false);
          clearInterval(intervalID);
          return gameLength;
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
        disabled={gameStarted}
      >
        Start Game
      </button>
    </section>
  );
};

export default Timer;
