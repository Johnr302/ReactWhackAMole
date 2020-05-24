import React, { useEffect } from "react";

import { timer } from "./timer.js";
import { moveMole } from "./moveMole.js";
import "./styles.css";

let score = 0;

let timerId;

export default function App() {
  useEffect(() => {
    timerId = setInterval(() => {
      moveMole();
      timer();
    }, 1000);
  });

  return (
    <section>
      <h1>Wack A Mole</h1>

      <h2>Score: {score}</h2>
      <h3>Timer: </h3>
      <h3 id="time-left">60</h3>

      {/* {timer()} */}

      <div id="gameBoard">
        <div className="square" id="1" />
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
