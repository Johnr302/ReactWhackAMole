const timer = (timerId) => {
  let timeLeft = document.querySelector("#time-left");
  let currentTime = timeLeft.textContent;

  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === -1) {
    timeLeft.textContent = 30;
    console.log("GAME OVER! Your final score is ");

    clearInterval(timerId);
  }
};

export default timer;
