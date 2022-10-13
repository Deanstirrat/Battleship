const updatePlayerBoard = (player) => {
  const boxes = document.getElementById("playerBoard").children;
  for (let i = 0; i < boxes.length; i++) {
    const y = Math.floor(i / 10);
    const x = i % 10;
    const newVal = player.board.board[y][x];
    const box = boxes[i];
    box.className = "";
    switch (newVal) {
      case "W":
        box.classList.add("waterBox");
        break;
      case "H":
        box.classList.add("hitBox");
        break;
      case "M":
        box.classList.add("missBox");
        break;
      default:
        box.classList.add("shipBox");
    }
  }
};

export default updatePlayerBoard;
