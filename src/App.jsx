import { useState, useRef } from "react";
import { levels } from "./levels.js";
import NewGame from "./components/NewGame.jsx";
import Game from "./components/Game.jsx";
import GameOver from "./components/GameOver.jsx";

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(0);

  const timeoutIdRef = useRef(null);

  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {
    // Find the amount of circles and add to global var:
    const { amount } = levels.find((el) => el.name === level);
    levelsAmount = amount;
    // Create a new array depending on the amount of circles
    // eg. length = 3 => [0, 1, 2]
    const circlesArray = Array.from({ length: amount }, (_, i) => i);
    setCircles(circlesArray);
    setPlayer({
      level: level,
      name: name,
    });
    setGameLaunch((prevLaunch) => !prevLaunch);
    setGameOn(!gameOn);
    randomNumb();
  };

  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
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

  const randomNumb = () => {
    let nextActive;
    do {
      nextActive = getRndInt(0, levelsAmount);
    } while (nextActive === current);
    setCurrent(nextActive);
    console.log(nextActive);
    timeoutIdRef.current = setTimeout(randomNumb, pace);
  };

  return (
    <main>
      <h1 className="main-title">Speedy Donuts</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && <Game score={score} circles={circles} current={current} stopHandler={stopHandler} clickHandler={clickHandler} />}
      {gameOver && <GameOver player={player} score={score} closeHandler={closeHandler} />}
    </main>
  );
}

export default App;
