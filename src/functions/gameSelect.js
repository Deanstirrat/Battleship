import singlePlayerGame from "./singlePlayerGameSetup";
import deleteMainContent from "./deleteMainContent";
import "../style.css";

const gameSelect = () => {
  const gameSelectContainer = document.createElement("div");
  gameSelectContainer.classList.add("gameSelectContainer");
  const title = document.createElement("h3");
  title.textContent = "Select game to begin";
  title.classList.add("title");
  const singlePlayerButton = document.createElement("button");
  singlePlayerButton.innerHTML = "Single player";
  singlePlayerButton.classList.add("gameSelectButton");
  singlePlayerButton.addEventListener("click", () => {
    deleteMainContent();
    singlePlayerGame(10, []);
  });
  const twoPlayerButton = document.createElement("button");
  twoPlayerButton.innerHTML = "Two player";
  twoPlayerButton.classList.add("gameSelectButton");
  twoPlayerButton.addEventListener("click", () => {
    // TODO
    alert("in progress");
  });
  gameSelectContainer.appendChild(title);
  gameSelectContainer.appendChild(singlePlayerButton);
  gameSelectContainer.appendChild(twoPlayerButton);
  return gameSelectContainer;
};

const gameOverSelect = (winner) => {
  const gameSelectContainer = document.createElement("div");
  gameSelectContainer.classList.add("gameSelectContainer");
  const title = document.createElement("h3");
  if (winner === "player") title.textContent = "You won! play again?";
  else title.textContent = "You lost... rematch?";
  title.classList.add("title");
  const singlePlayerButton = document.createElement("button");
  singlePlayerButton.innerHTML = "Single player";
  singlePlayerButton.classList.add("gameSelectButton");
  singlePlayerButton.addEventListener("click", () => {
    deleteMainContent();
    singlePlayerGame(10, []);
  });
  const twoPlayerButton = document.createElement("button");
  twoPlayerButton.innerHTML = "Two player";
  twoPlayerButton.classList.add("gameSelectButton");
  twoPlayerButton.addEventListener("click", () => {
    // TODO
    alert("in progress");
  });
  gameSelectContainer.appendChild(title);
  gameSelectContainer.appendChild(singlePlayerButton);
  gameSelectContainer.appendChild(twoPlayerButton);
  return gameSelectContainer;
};

export { gameSelect, gameOverSelect };
