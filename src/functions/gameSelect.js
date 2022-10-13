import singlePlayerGame from "./singlePlayerGameSetup";
import deleteMainContent from "./deleteMainContent";
import "../style.css";

const gameSelect = () => {
  const gameSelectContainer = document.createElement("div");
  gameSelectContainer.classList.add("gameSelectContainer");
  const singlePlayerButton = document.createElement("button");
  singlePlayerButton.innerHTML = "Single player";
  singlePlayerButton.classList.add("gameSelectButton");
  singlePlayerButton.addEventListener("click", () => {
    deleteMainContent();
    singlePlayerGame(10, []);
  });
  gameSelectContainer.appendChild(singlePlayerButton);
  return gameSelectContainer;
};

export default gameSelect;
