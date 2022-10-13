import deleteMainContent from "./deleteMainContent";
import gameSelect from "./gameSelect";

const resetMainContent = () => {
  deleteMainContent();
  const main = document.getElementById("main");
  main.appendChild(gameSelect());
};

export default resetMainContent;
