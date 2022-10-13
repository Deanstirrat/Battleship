import deleteMainContent from "./deleteMainContent";
import { validPossition, addToClass, addToBoard } from "./validPossition";
import singlePlayerDisplay from "./singlePlayerDisplay";
import Player from "../objects/player";

const playerPlaceShips = (computer, player, shipSizes) => {
  deleteMainContent();
  const main = document.getElementById("main");

  const selectionBoard = document.createElement("div");
  selectionBoard.classList.add("selectionBoard");
  selectionBoard.id = "selectionBoard";

  const ship = shipSizes.pop();
  // generate board:
  // shipSizes.forEach((ship) => {
  for (let i = 0; i < player.board.board.length; i++) {
    for (let j = 0; j < player.board.board.length; j++) {
      const tempBox = document.createElement("button");
      switch (player.board.board[i][j]) {
        case "W":
          tempBox.classList.add("emptyBox");
          tempBox.addEventListener("mouseover", () => {
            let tilesToRemove =
              document.getElementsByClassName("invalidPossition");
            if (tilesToRemove.length > 0) {
              Array.from(tilesToRemove).forEach((element) => {
                element.classList.remove("tempShip");
                element.classList.remove("invalidPossition");
              });
            }
            tilesToRemove = document.getElementsByClassName("tempShip");
            if (tilesToRemove.length > 0) {
              Array.from(tilesToRemove).forEach((element) => {
                element.classList.remove("tempShip");
                element.classList.remove("invalidPossition");
              });
            }
            if (validPossition(i, j, player.board.board, ship)) {
              const posstion = i * 10 + j;
              addToClass(posstion, ship);
            } else {
              tempBox.classList.add("invalidPossition");
            }
          });
          tempBox.addEventListener(
            "click",
            () => {
              if (tempBox.classList.contains("tempShip")) {
                addToBoard(i, j, player.board, ship);
                if (shipSizes.length > 0) {
                  playerPlaceShips(computer, player, shipSizes);
                } else {
                  singlePlayerDisplay(player, computer);
                }
              }
            },
            { once: true }
          );
          break;
        default:
          tempBox.classList.add("shipBox");
      }
      selectionBoard.appendChild(tempBox);
    }
  }
  // });

  main.appendChild(selectionBoard);
};

export default playerPlaceShips;
