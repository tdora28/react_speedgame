import Circle from "../UI_components/Circle.jsx";

function Game({ score, circles, current, stopHandler, clickHandler, musicHandler }) {
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  musicHandler("play", "bg");

  return (
    <div className="layout-game">
      <p className="layout-game__score">Score: {score}</p>
      <div className="circles">
        {circles.map((el, i) => (
          <Circle key={generateUUID()} id={i} current={current === i} clickHandler={clickHandler} />
        ))}
      </div>
      <button className="button" onClick={stopHandler}>
        stop game
      </button>
    </div>
  );
}

export default Game;
