import React from "react";

const Score = (props) => {
  const { score } = props;
  return <h2 className="score">Score: {score}</h2>;
};

export default Score;
