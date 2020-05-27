const timer = () => {
  let timeLeft = document.querySelector("#time-left");
  let currentTime = timeLeft.textContent;

  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    //clearInterval(timerId)
    timeLeft.textContent = 30;
    alert("GAME OVER! Your final score is"); //+ result);
  }
};

export { timer };
