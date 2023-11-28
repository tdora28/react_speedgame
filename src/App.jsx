import { useState } from "react";
import { levels } from "./levels.js";
import NewGame from "./components/NewGame.jsx";
import Game from "./components/Game.jsx";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;

    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    setCircles(circlesArray);

    setPlayer({
      level: level,
      name: name,
    });
  };

  return (
    <>
      <h1>Speedy Donuts</h1>
      <NewGame onclick={gameSetHandler} />
      <Game score={score} circles={circles} />
    </>
  );
}

export default App;
