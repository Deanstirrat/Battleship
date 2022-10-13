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

  boardsContainer.append(playerBoard);
  boardsContainer.append(computerBoard);
  main.append(boardsContainer);
};

export default singlePlayerDisplay;
