const Ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits += 1;
  };
  const isSunk = () => length === hits;

  const getHits = () => hits;

  return {
    hit,
    hits,
    getHits,
    isSunk,
    length,
  };
};

export default Ship;
