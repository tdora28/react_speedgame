import { useState } from "react";

function NewGame({ onclick }) {
  const [name, setName] = useState("");

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="layout-newgame">
      <h2>Start a game by choosing difficulty and entering your name</h2>
      <input type="text" onChange={inputHandler} />
      <div className="layout-buttons">
        <button className="button" onClick={() => onclick("easy", name)}>
          Easy
        </button>
        <button className="button" onClick={() => onclick("medium", name)}>
          Medium
        </button>
        <button className="button" onClick={() => onclick("hard", name)}>
          Hard
        </button>
      </div>
    </div>
  );
}

export default NewGame;
