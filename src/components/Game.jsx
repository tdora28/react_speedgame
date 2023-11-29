import Circle from "../UI_components/Circle.jsx";

function Game({ score, circles, stopHandler, clickHandler }) {
  return (
    <div className="layout-game">
      <p className="layout-game__score">Score: {score}</p>
      <div className="circles">
        {circles.map((el, i) => (
          <Circle key={i} id={i} clickHandler={clickHandler} />
        ))}
      </div>
      <button className="button" onClick={stopHandler}>
        stop game
      </button>
    </div>
  );
}

export default Game;
