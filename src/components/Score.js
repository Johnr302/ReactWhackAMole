import React from "react";
// import { updateScore } from "../updateScore";

const Score = (props) => {
  const { score } = props;
  return <h2>Score: {score}</h2>;
};

export default Score;
