const hitMole = (event, hitPosition) => {
  let el = event.currentTarget.getAttribute("id");

  let score = document.querySelector("#score");
  let currentScore = score.textContent;

  if (hitPosition === Number(el)) {
    currentScore++;
    score.textContent = currentScore;
  }
};

export { hitMole };
