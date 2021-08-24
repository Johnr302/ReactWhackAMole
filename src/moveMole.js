import { randomNumberGenerator } from "./randomNumberGenerator";

const moveMole = () => {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    circle.classList.remove("mole");
  });

  let newHitPosition = randomNumberGenerator();
  const element = document.getElementById(newHitPosition);
  element.classList.add("mole");
  return newHitPosition;
};

export { moveMole };
