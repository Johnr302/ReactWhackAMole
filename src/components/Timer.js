import React, { useState } from "react";

let intervalID = null;

const Timer = () => {
  const gameLength = 3;
  const [gameTimer, setGameTimer] = useState(gameLength);
  const [gameStarted, setGameStarted] = useState(false);

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
