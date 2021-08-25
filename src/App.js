import React, { useEffect, useState } from "react";

import Score from "./components/Score";
import Timer from "./components/Timer";
import GameOver from "./components/GameOver";
import { makeMoleHoles } from "./components/MoleHoles";
import { moveMole } from "./moveMole.js";
import { hitMole } from "./hitMole.js";
import "./styles.css";
import { GAME_STATE } from "./constants";

let intervalID;

const startMovingMole = (setHitPosition) => {
  let intervalId = setInterval(() => {
    setHitPosition(moveMole());
  }, 1000);

  return intervalId;
};

const stopMovingMole = (id) => {
  clearInterval(id);
};

export default function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATE.NOT_STARTED);
  const [hitPosition, setHitPosition] = useState(null);

  useEffect(() => {
    if (gameState === GAME_STATE.STARTED) {
      intervalID = startMovingMole(setHitPosition);
      setScore(0);
    }

    if (gameState === GAME_STATE.FINISHED) {
      stopMovingMole(intervalID);
    }
  }, [gameState]);

  const onMoleHitClickHandler = (event) => {
    if (gameState === GAME_STATE.STARTED) {
      if (hitMole(event, hitPosition) === true) {
        setScore(score + 1);
      }
    }
  };

  return (
    <section>
      <h1>Whack-A-Mole</h1>
      <Score score={score} />
      {gameState === GAME_STATE.FINISHED ? <GameOver score={score} /> : null}
      <Timer gameState={gameState} setGameState={setGameState} />
      <div id="gameBoard">
        {makeMoleHoles(gameState, onMoleHitClickHandler)}
      </div>
    </section>
  );
}
