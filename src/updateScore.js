"use strict";

//This function updates the score

const updateScore = () => {
  let score = document.querySelector("#score");
  let currentScore = score.textContent;

  currentScore++;
  score.textContent = currentScore;
};

export { updateScore };
