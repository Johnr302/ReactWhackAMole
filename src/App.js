import React, { useEffect, useState } from "react";

import Score from "./components/Score";
import Timer from "./components/Timer";
import { moveMole } from "./moveMole.js";
import { hitMole } from "./hitMole.js";
import "./styles.css";
import { GAMESTATE } from "./constants";

// useState for button to start game
let intervalID;
let hitPosition = null;

const startMovingMole = () => {
  let intervalId = setInterval(() => {
    hitPosition = moveMole();
  }, 1000);

  return intervalId;
};

const stopMovingMole = (id) => {
  clearInterval(id);
};

export default function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(GAMESTATE.NOT_STARTED);

  useEffect(() => {
    if (gameState === GAMESTATE.STARTED) {
      intervalID = startMovingMole();
      setScore(0);
    }

    if (gameState === GAMESTATE.FINISHED) {
      // display score
      // display game over
      stopMovingMole(intervalID);
    }
  }, [gameState]);

  return (
    <section>
      <h1>Whack-A-Mole</h1>

      <Score score={score} />

      <Timer gameState={gameState} setGameState={setGameState} />

      <div id="gameBoard">
        <div
          className="square"
          id="1"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="2"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="3"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="4"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="5"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="6"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="7"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="8"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
          disabled={gameState === GAMESTATE.FINISHED}
        />
        <div
          className="square"
          id="9"
          onClick={(event) => {
            if (gameState === GAMESTATE.STARTED) {
              if (hitMole(event, hitPosition) === true) {
                setScore(score + 1);
              }
            }
          }}
        />
      </div>
    </section>
  );
}
