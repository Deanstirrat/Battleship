import gameSelect from "./functions/gameSelect";
import "./style.css";

const content = document.createElement("div");
content.classList.add("content");
const header = document.createElement("div");
header.classList.add("header");
const title = document.createElement("h2");
title.textContent = "BATTLESHIP";
title.classList.add("header");
header.appendChild(title);
content.appendChild(header);

const main = document.createElement("div");
main.id = "main";
main.classList.add("main");
main.appendChild(gameSelect());
content.appendChild(main);
document.body.appendChild(content);
