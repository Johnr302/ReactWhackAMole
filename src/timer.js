const timer = (timerId) => {
  let score = document.querySelector("#score");
  let finalScore = score.textContent;
  let timeLeft = document.querySelector("#time-left");
  let currentTime = timeLeft.textContent;

  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === -1) {
    timeLeft.textContent = 30;
    console.log("GAME OVER! Your final score is " + finalScore);
    score.textContent = 0;
    clearInterval(timerId);
  }
};

export { timer };
