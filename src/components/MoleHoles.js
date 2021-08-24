import React from "react";
import { GAME_STATE } from "../constants";

const makeMoleHoles = (gameState, onMoleHitClickHandler) => {
  let result = [];

  for (let i = 1; i <= 9; i++) {
    result.push(
      <MoleHoles
        key={i}
        id={i}
        gameState={gameState}
        onMoleHitClickHandler={onMoleHitClickHandler}
      />
    );
  }
  return result;
};

const MoleHoles = (props) => {
  const { gameState, id, onMoleHitClickHandler } = props;

  return (
    <div
      className="circle"
      id={id}
      onClick={onMoleHitClickHandler}
      disabled={gameState === GAME_STATE.FINISHED}
    />
  );
};

export { makeMoleHoles, MoleHoles };
