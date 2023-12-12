function Circle({ id, current, clickHandler }) {
  return <div className={`circle ${current ? "active" : ""}`} onClick={() => clickHandler(id)} role="button"></div>;
}

export default Circle;
