import Ship from "./ship";

const Gameboard = (width) => {
  // Create one dimensional array
  const board = new Array(width);
  // Loop to create 2D board array using 1D array
  for (let i = 0; i < board.length; i += 1) {
    board[i] = new Array(width);
  }
  // intialize board with all W for water
  for (let i = 0; i < width; i += 1) {
    for (let j = 0; j < width; j += 1) {
      board[i][j] = "W";
    }
  }
  const ships = [];

  const placeShip = (boxCords) => {
    const ship = Ship(boxCords.length);
    ships.push(ship);
    boxCords.forEach((cord) => {
      board[cord[0]][cord[1]] = ship;
    });
  };

  const recieveAttack = (cord) => {
    let ret = false;
    if (board[cord[0]][cord[1]] === "W") board[cord[0]][cord[1]] = "M";
    else {
      ret = true;
      board[cord[0]][cord[1]].hit();
      if (board[cord[0]][cord[1]].isSunk()) {
        board[cord[0]][cord[1]] = "H";
        const queue = [];
        queue.push(cord);
        const set = new Set();

        while (queue.length > 0) {
          const temp = queue.pop();
          if (board[temp[0]][temp[1]] === "H") {
            const y = temp[0];
            const x = temp[1];
            if (y > 0 && !set.has([y - 1, x].toString())) {
              set.add([y - 1, x].toString());
              queue.push([y - 1, x]);
            }
            if (y < board.length - 1 && !set.has([y + 1, x].toString())) {
              set.add([y + 1, x].toString());
              queue.push([y + 1, x]);
            }
            if (x > 0 && !set.has([y, x - 1].toString())) {
              set.add([y, x - 1].toString());
              queue.push([y, x - 1]);
            }
            if (x < board.length - 1 && !set.has([y, x + 1].toString())) {
              set.add([y, x + 1].toString());
              queue.push([y, x + 1]);
            }
          } else {
            board[temp[0]][temp[1]] = "M";
          }
        }
      } else {
        board[cord[0]][cord[1]] = "H";
      }
    }
    return ret;
  };

  const allSank = () => {
    let ret = true;
    ships.forEach((ship) => {
      if (!ship.isSunk()) ret = false;
    });
    return ret;
  };

  return {
    placeShip,
    recieveAttack,
    allSank,
    board,
    ships,
  };
};

export default Gameboard;
