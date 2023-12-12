function Circle({ id, current, clickHandler }) {
  return <button className={`circle ${current ? "active" : ""}`} onClick={() => clickHandler(id)}></button>;
}

export default Circle;
