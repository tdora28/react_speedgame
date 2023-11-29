import { useState } from "react";
import { levels } from "./levels.js";
import NewGame from "./components/NewGame.jsx";
import Game from "./components/Game.jsx";
import GameOver from "./components/GameOver.jsx";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(0);

  let timer;
  let pace = 1000;

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
    randomNum();
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
    clearTimeout(timer);
  };

  const closeHandler = () => {
    setGameOver(!gameOver);
    setGameLaunch(!gameLaunch);
    setScore(0);
  };

  const clickHandler = (id) => {
    console.log("circle was clicked: ", id);
    setScore(score + 10);
  };

  const randomNum = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(0, circles.length);
    } while (nextActive === current);
    setCurrent(nextActive);
    timer = setTimeout(randomNum, pace);
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
