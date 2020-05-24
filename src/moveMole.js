const moveMole = () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.classList.remove("mole");
  });

  let randomNumber = Math.ceil(Math.random() * 9);
  const element = document.getElementById(randomNumber);
  element.classList.add("mole");
};

export { moveMole };
