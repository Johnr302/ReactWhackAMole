const timer = () => {
  let score = document.querySelector("#score");
  let finalScore = score.textContent;
  let timeLeft = document.querySelector("#time-left");
  let currentTime = timeLeft.textContent;

  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === -1) {
    timeLeft.textContent = 30;
    alert("GAME OVER! Your final score is " + finalScore); //+ result);
    score.textContent = 0;
  }
};

export { timer };
