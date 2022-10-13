import Gameboard from "../gameboard";
import Ship from "../ship";

test("place ship on new board", () => {
  const board = Gameboard(5);
  board.placeShip([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  const grid = board.board;
  expect(JSON.stringify(grid[0][0])).toBe(JSON.stringify(Ship(3)));
});

test("place ship on new board then sink it", () => {
  const board = Gameboard(5);
  board.placeShip([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  board.recieveAttack([0, 0]);
  board.recieveAttack([0, 1]);
  board.recieveAttack([0, 2]);
  const grid = board.board;
  expect(grid[0][0].isSunk()).toBe(true);
});

test("hit water and update to miss", () => {
  const board = Gameboard(5);
  board.recieveAttack([0, 0]);
  const grid = board.board;
  expect(grid[0][0]).toBe("M");
});

test("acces board box", () => {
  const board = Gameboard(5);
  expect(board.board[0][0]).toBe("W");
});
