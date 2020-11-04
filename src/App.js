import React, { useEffect, useState } from "react";

import Score from "./components/Score";
import Timer from "./components/Timer";
import { moveMole } from "./moveMole.js";
import { hitMole } from "./hitMole.js";
import "./styles.css";

// useState for button to start game
let timerId;
let hitPosition = null;
export default function App() {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTimer, setGameTimer] = useState(3);
  const [gameLength, setGameLength] = useState(3);

  useEffect(() => {
    timerId = setInterval(() => {
      hitPosition = moveMole();
      // timer(timerId);
    }, 1000);
  });

  return (
    <section>
      <h1>Whack-A-Mole</h1>

      <Score score={score} />

      <Timer
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameTimer={gameTimer}
        setGameTimer={setGameTimer}
        gameLength={gameLength}
      />

      <div id="gameBoard">
        <div
          className="square"
          id="1"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="2"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="3"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="4"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="5"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="6"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="7"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="8"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
        <div
          className="square"
          id="9"
          onClick={(event) => {
            if (hitMole(event, hitPosition) === true) {
              setScore(score + 1);
            }
          }}
        />
      </div>
    </section>
  );
}
