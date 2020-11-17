import React from "react";

const GameOver = (props) => {
  const { score } = props;
  return (
    <section id="gameOver" className="pill">
      {score >= 100 ? <h4>Good Job!</h4> : null}
      {score >= 50 && score < 100 ? <h4>Pretty Good</h4> : null}
      {score < 50 ? "Participation trophy" : null}
    </section>
  );
};

export default GameOver;
