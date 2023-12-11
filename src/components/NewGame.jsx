import { useState } from 'react';

function NewGame({ onclick, musicHandler }) {
  const [name, setName] = useState('');

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  musicHandler('pause', 'success');

  return (
    <div className="layout-newgame">
      <h2>Start a game by entering your name and choosing difficulty</h2>
      <input type="text" onChange={inputHandler} placeholder="Enter your name..." />
      <div className="layout-buttons">
        <button className="button" onClick={() => onclick('easy', name)}>
          Easy
        </button>
        <button className="button" onClick={() => onclick('medium', name)}>
          Medium
        </button>
        <button className="button" onClick={() => onclick('hard', name)}>
          Hard
        </button>
      </div>
    </div>
  );
}

export default NewGame;
