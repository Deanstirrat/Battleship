const updatePlayer1Scoreboard = (player) => {
  const scoreShips = document.getElementById("computerScoreContainer").children;
  let count = 0;
  player.board.ships.forEach((ship) => {
    const shipTokens = scoreShips[count].children;
    count++;
    for (let i = 0; i < ship.getHits(); i++) {
      if (ship.isSunk()) {
        shipTokens[i].classList.add("sunkToken");
      } else shipTokens[i].classList.add("hitToken");
    }
  });
};

const updatePlayer2Scoreboard = (player) => {
  const scoreShips = document.getElementById("playerScoreContainer").children;
  let count = 0;
  player.board.ships.forEach((ship) => {
    const shipTokens = scoreShips[count].children;
    count++;
    for (let i = 0; i < ship.getHits(); i++) {
      if (ship.isSunk()) {
        shipTokens[i].classList.add("sunkToken");
      } else shipTokens[i].classList.add("hitToken");
    }
  });
};

export { updatePlayer1Scoreboard, updatePlayer2Scoreboard };
