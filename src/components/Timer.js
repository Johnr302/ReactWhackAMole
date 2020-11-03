import React, { useState } from "react";

const Timer = () => {
  const [gameTimer, setGameTimer] = useState(30);

  const countDown = () => {
    if (gameTimer > 0) {
      setInterval(
        () =>
          setGameTimer((gameTimer) => {
            return gameTimer - 1;
          }),
        1000
      );
    } else alert("game over");
  };

  return (
    <section>
      <h3>Timer: {gameTimer} </h3>
      <button onClick={countDown}>Start Game</button>
    </section>
  );
};

export default Timer;
