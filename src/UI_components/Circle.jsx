function Circle({ id, current, clickHandler }) {
  return <div className={`circle ${current ? 'active' : ''}`} onClick={() => clickHandler(id)}></div>;
}

export default Circle;
