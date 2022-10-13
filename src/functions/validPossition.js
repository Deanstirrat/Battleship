const validPossition = (i, j, board, shipLength) => {
  let count = j;
  let length = shipLength;
  let valid = true;
  while (length > 0) {
    if (board[i][count] !== "W") {
      valid = false;
      break;
    }
    if (count >= board.length) {
      valid = false;
      break;
    }
    count++;
    length--;
  }
  return valid;
};

const addToClass = (possition, shipLength) => {
  let length = shipLength;
  const tiles = document.getElementById("selectionBoard").children;
  while (length > 0) {
    tiles[possition].classList.add("tempShip");
    possition++;
    length--;
  }
};

const addToBoard = (i, j, board, shipLength) => {
  let length = shipLength;
  const ship = [];
  while (length > 0) {
    ship.push([i, j]);
    j++;
    length--;
  }
  board.placeShip(ship);
};

export { validPossition, addToClass, addToBoard };
