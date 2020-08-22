import React, { useEffect } from "react";

import { timer } from "./timer.js";
import { moveMole } from "./moveMole.js";
import { hitMole } from "./hitMole.js";
import "./styles.css";

let timerId;
let hitPosition = null;
export default function App() {
  useEffect(() => {
    timerId = setInterval(() => {
      hitPosition = moveMole();
      timer();
    }, 1000);
  });

  return (
    <section>
      <h1>Whack-A-Mole</h1>

      <h2>Score: </h2>
      <h2 id="score">0</h2>
      <h3>Timer: </h3>
      <h3 id="time-left">30</h3>

      <div id="gameBoard">
        <div
          className="square"
          id="1"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="2"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="3"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="4"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="5"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="6"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="7"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="8"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
        <div
          className="square"
          id="9"
          onClick={(event) => {
            hitMole(event, hitPosition);
          }}
        />
      </div>
    </section>
  );
}
