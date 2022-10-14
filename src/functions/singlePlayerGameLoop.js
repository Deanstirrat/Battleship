import updatePlayerBoard from "./updatePlayerBoard";
import updateComputerBoard from "./updateComputerBoard";
import {
  updatePlayer1Scoreboard,
  updatePlayer2Scoreboard,
} from "./updateScoreboard";
import { gameOverSelect } from "./gameSelect";
import deleteMainContent from "./deleteMainContent";

const singlePlayerGameLoop = (cords, player, computer) => {
  // player attacks
  const playerHit = player.makeMove(cords, computer.board);
  updatePlayer1Scoreboard(computer);
  updateComputerBoard(computer);
  // check if game over
  if (computer.board.allSank()) {
    console.log("gameover");
    deleteMainContent();
    const main = document.getElementById("main");
    main.appendChild(gameOverSelect("player"));
  }

  if (!playerHit) {
    // computer attacks
    while (true) {
      if (!computer.makeRandomMove(player.board)) {
        updatePlayer2Scoreboard(player);
        updatePlayerBoard(player);
        break;
      }
      updatePlayerBoard(player);
      // check if game over
      if (player.board.allSank()) {
        deleteMainContent();
        const main = document.getElementById("main");
        main.appendChild(gameOverSelect("computer"));
      }
    }
  }
};

export default singlePlayerGameLoop;
