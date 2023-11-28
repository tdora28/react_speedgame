import Circle from "../UI_components/Circle.jsx";

function Game({ score, circles, stopHandler }) {
  return (
    <div>
      <p>{score}</p>
      <div>
        {circles.map((el, i) => (
          <Circle key={i} />
        ))}
      </div>
      <button onClick={stopHandler}>stop game</button>
    </div>
  );
}

export default Game;
