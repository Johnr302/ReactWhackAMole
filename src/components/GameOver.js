import React from "react";

const GameOver = (props) => {
  const { score } = props;
  return (
    <section id="gameOver">
      <h4>Good Job!</h4>
      <p>Your Score is {score}</p>
    </section>
  );
};

export default GameOver;
