function GameOver({ player, score, messages, closeHandler }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h2>Game Over :(</h2>
        <h3>{player.name}</h3>
        <p>Level: {player.level}</p>
        <p className="modal__score">
          Total score: <span id="totalScore">{score}</span>
        </p>
        <p>{messages[0].message}</p>
        <button className="button" onClick={closeHandler} id="closeModalButton">
          Close
        </button>
      </div>
    </div>
  );
}

export default GameOver;
