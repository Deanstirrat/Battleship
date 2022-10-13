import Player from "../objects/player";
import playerPlaceShips from "./playerPlaceShips";

const singlePlayerGame = (boardWidth, shipSizes) => {
  const player = Player(boardWidth);
  const computer = Player(boardWidth);

  const shipCords = [
    [
      // ship 1
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
    ],
    [
      // ship 2
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      // ship 3
      [7, 5],
      [8, 5],
      [9, 5],
    ],
    [
      // ship 4
      [0, 8],
      [1, 8],
    ],
    [
      // ship 5
      [2, 0],
      [3, 0],
    ],
    [
      // ship 6
      [4, 9],
      [5, 9],
    ],
    [
      // ship 7
      [5, 3],
    ],
    [
      // ship 8
      [1, 5],
    ],
    [
      // ship 9
      [5, 7],
    ],
    [
      // ship 10
      [7, 8],
    ],
  ];

  // Computer places ships
  shipCords.forEach((ship) => {
    computer.board.placeShip(ship);
  });

  playerPlaceShips(computer, player, [4, 3, 3, 2, 2, 1, 1]);
};

export default singlePlayerGame;
