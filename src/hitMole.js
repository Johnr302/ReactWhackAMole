import { updateScore } from "./updateScore.js";

const hitMole = (event, hitPosition) => {
  let el = event.currentTarget.getAttribute("id");

  if (hitPosition === Number(el)) {
    updateScore();
  }
};

export { hitMole };
