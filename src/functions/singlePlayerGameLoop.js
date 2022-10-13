import updatePlayerBoard from "./updatePlayerBoard";
import updateComputerBoard from "./updateComputerBoard";

const singlePlayerGameLoop = (cords, player, computer) => {
  // player attacks
  const playerHit = player.makeMove(cords, computer.board);
  updateComputerBoard(computer);
  // check if game over
  if (computer.board.allSank()) {
    alert("game over, player won");
  }

  if (!playerHit) {
    // computer attacks
    while (true) {
      if (!computer.makeRandomMove(player.board)) {
        updatePlayerBoard(player);
        break;
      }
      updatePlayerBoard(player);
      // check if game over
      if (player.board.allSank()) {
        alert("game Over, computer won");
      }
    }
  }
};

export default singlePlayerGameLoop;
