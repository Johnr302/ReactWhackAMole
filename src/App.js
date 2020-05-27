import React, { useEffect, useState } from "react";

import { timer } from "./timer.js";
import { moveMole } from "./moveMole.js";
import "./styles.css";

// let score = 0;

let timerId;
let hitPosition = null
export default function App() {
  // let timeLeft = document.querySelector("#time-left");

  // const [hitPosition, setHitPosition] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    timerId = setInterval(() => {
      hitPosition = moveMole();
      console.log(hitPosition);
      timer();
    }, 1000);
    // setScore(9);
  });

  return (
    <section>
      <h1>Wack A Mole</h1>

      <h2>Score: {score}</h2>
      <h3>Timer: </h3>
      <h3 id="time-left">60</h3>

      <div id="gameBoard">
        <div className="square" id="1" onclick={} />
        <div className="square" id="2" />
        <div className="square" id="3" />
        <div className="square" id="4" />
        <div className="square" id="5" />
        <div className="square" id="6" />
        <div className="square" id="7" />
        <div className="square" id="8" />
        <div className="square" id="9" />
      </div>
    </section>
  );
}
