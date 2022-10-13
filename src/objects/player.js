import Gameboard from "./gameboard";

const Player = (width) => {
  const board = Gameboard(width);

  const makeMove = (cord, enemyBoard) => {
    const ret = enemyBoard.recieveAttack(cord);
    console.log(ret);
    return ret;
  };
  const makeRandomMove = (enemyBoard) => {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);
    while (enemyBoard.board[y][x] === "H" || enemyBoard.board[y][x] === "M") {
      if ((x + 1) / width === 1) {
        x = 0;
        if ((y + 1) / width === 1) {
          y = 0;
        } else {
          y += 1;
        }
      } else {
        x += 1;
      }
    }
    return enemyBoard.recieveAttack([y, x]);
  };

  return { makeMove, makeRandomMove, board };
};

export default Player;
