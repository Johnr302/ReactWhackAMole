"use strict";

// This function generates a random number 1 to 9

const randomNumberGenerator = () => {
  return Math.ceil(Math.random() * 9);
};

export { randomNumberGenerator };
