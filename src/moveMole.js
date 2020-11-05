import { randomNumberGenerator } from "./randomNumberGenerator";

const moveMole = () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let newHitPosition = randomNumberGenerator();
  const element = document.getElementById(newHitPosition);
  element.classList.add("mole");
  return newHitPosition;
};

export { moveMole };
