import React from "react";
import "./styles.css";

let score = 0;

export default function App() {
  return (
    <section>
      <h1>Wack A Mole</h1>

      <h2>Score: {score}</h2>

      <div id="gameBoard">
        <li className="square" id="1" />
        <li className="square" id="2" />
        <li className="square" id="3" />
        <li className="square" id="4" />
        <li className="square" id="5" />
        <li className="square" id="6" />
        <li className="square" id="7" />
        <li className="square" id="8" />
        <li className="square" id="9" />
      </div>
    </section>
  );
}
