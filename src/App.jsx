import { useState } from "react";
import { levels } from "./levels.js";
import NewGame from "./components/NewGame.jsx";
import Game from "./components/Game.jsx";
import GameOver from "./components/GameOver.jsx";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;
    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);
    setCircles(circlesArray);
    setPlayer({
      level: level,
      name: name,
    });
    setGameLaunch(!gameLaunch);
    setGameOn(!gameOn);
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
  };

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
  };

  const clickHandler = (id) => {
    console.log("circle was clicked: ", id);
  };

  return (
    <main>
      <h1 className="main-title">Speedy Donuts</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && <Game score={score} circles={circles} stopHandler={stopHandler} clickHandler={clickHandler} />}
      {gameOver && <GameOver player={player} score={score} closeHandler={closeHandler} />}
    </main>
  );
}

export default App;
