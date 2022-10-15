import singlePlayerGameLoop from "./singlePlayerGameLoop";

const singlePlayerDisplay = (player, computer) => {
  const main = document.getElementById("main");
  main.innerHTML = "";
  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("boardsContainer");
  const playerBoard = document.createElement("div");
  playerBoard.classList.add("playerBoard");
  playerBoard.id = "playerBoard";
  const computerBoard = document.createElement("div");
  computerBoard.classList.add("computerBoard");
  computerBoard.id = "computerBoard";

  player.board.board.forEach((row) => {
    row.forEach((box) => {
      const tempBox = document.createElement("div");
      switch (box) {
        case "W":
          tempBox.classList.add("waterBox");
          break;
        case "H":
          tempBox.classList.add("hitBox");
          break;
        case "M":
          tempBox.classList.add("missBox");
          break;
        default:
          tempBox.classList.add("shipBox");
      }
      playerBoard.appendChild(tempBox);
    });
  });

  for (let i = 0; i < computer.board.board.length; i++) {
    for (let j = 0; j < computer.board.board.length; j++) {
      const tempBox = document.createElement("button");
      switch (computer.board.board[i][j]) {
        case "W":
          tempBox.classList.add("waterBox");
          tempBox.addEventListener(
            "click",
            () => {
              singlePlayerGameLoop([i, j], player, computer);
            },
            { once: true }
          );
          break;
        case "H":
          tempBox.classList.add("hitBox");
          break;
        case "M":
          tempBox.classList.add("missBox");
          break;
        default:
          tempBox.classList.add("waterBox");
          tempBox.addEventListener(
            "click",
            () => {
              singlePlayerGameLoop([i, j], player, computer);
            },
            { once: true }
          );
      }
      computerBoard.appendChild(tempBox);
    }
  }

  const scoreboard = document.createElement("div");
  scoreboard.classList.add("scoreboardContainer");
  const playerScore = document.createElement("div");
  playerScore.classList.add("playerScoreContainter");
  playerScore.setAttribute("id", "playerScoreContainer");
  const computerScore = document.createElement("div");
  computerScore.setAttribute("id", "computerScoreContainer");
  computerScore.classList.add("computerScoreContainter");

  player.board.ships.forEach((ship) => {
    const scoreShip = document.createElement("div");
    scoreShip.classList.add("scoreShip");
    for (let i = 0; i < ship.length - ship.hits; i++) {
      const shipToken = document.createElement("div");
      shipToken.classList.add("shipToken");
      scoreShip.appendChild(shipToken);
    }
    for (let i = 0; i < ship.hits; i++) {
      const shipToken = document.createElement("div");
      shipToken.classList.add("shipToken");
      shipToken.classList.add("hitToken");
      scoreShip.appendChild(shipToken);
    }
    playerScore.appendChild(scoreShip);
  });
  const scoreName = document.createElement("p");
  scoreName.classList.add("scoreName");
  scoreName.textContent = "Player";
  playerScore.appendChild(scoreName);

  computer.board.ships.forEach((ship) => {
    const scoreShip = document.createElement("div");
    scoreShip.classList.add("scoreShip");
    for (let i = 0; i < ship.length - ship.hits; i++) {
      const shipToken = document.createElement("div");
      shipToken.classList.add("shipToken");
      scoreShip.appendChild(shipToken);
    }
    for (let i = 0; i < ship.hits; i++) {
      const shipToken = document.createElement("div");
      shipToken.classList.add("shipToken");
      shipToken.classList.add("hitToken");
      scoreShip.appendChild(shipToken);
    }
    computerScore.appendChild(scoreShip);
  });
  const scoreName2 = document.createElement("p");
  scoreName2.classList.add("scoreName2");
  scoreName2.textContent = "CPU";
  computerScore.appendChild(scoreName2);

  scoreboard.appendChild(playerScore);
  scoreboard.appendChild(computerScore);

  boardsContainer.append(playerBoard);
  boardsContainer.appendChild(playerScore);
  boardsContainer.appendChild(computerScore);
  boardsContainer.append(computerBoard);
  main.append(boardsContainer);
};

export default singlePlayerDisplay;
