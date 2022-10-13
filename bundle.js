/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deleteMainContent.js":
/*!**********************************!*\
  !*** ./src/deleteMainContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteMainContent = () => {\n  document.getElementById(\"main\").innerHTML = \"\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteMainContent);\n\n\n//# sourceURL=webpack://battleship/./src/deleteMainContent.js?");

/***/ }),

/***/ "./src/gameSelect.js":
/*!***************************!*\
  !*** ./src/gameSelect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _singlePlayerGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlePlayerGame */ \"./src/singlePlayerGame.js\");\n/* harmony import */ var _deleteMainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteMainContent */ \"./src/deleteMainContent.js\");\n\n\n\nconst gameSelect = () => {\n  const gameSelectContainer = document.createElement(\"div\");\n  gameSelectContainer.classList.add(\"gameSelectContainer\");\n  const singlePlayerButton = document.createElement(\"button\");\n  singlePlayerButton.classList.add(\"gameSelectButton\");\n  singlePlayerButton.addEventListener(\"click\", () => {\n    (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_singlePlayerGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10, []);\n  });\n  gameSelectContainer.appendChild(singlePlayerButton);\n  return gameSelectContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSelect);\n\n\n//# sourceURL=webpack://battleship/./src/gameSelect.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst Gameboard = (width) => {\n  // Create one dimensional array\n  const board = new Array(width);\n  // Loop to create 2D board array using 1D array\n  for (let i = 0; i < board.length; i += 1) {\n    board[i] = new Array(width);\n  }\n  // intialize board with all W for water\n  for (let i = 0; i < width; i += 1) {\n    for (let j = 0; j < width; j += 1) {\n      board[i][j] = \"W\";\n    }\n  }\n  const ships = [];\n\n  const placeShip = (boxCords) => {\n    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boxCords.length);\n    ships.push(ship);\n    boxCords.forEach((cord) => {\n      board[cord[0]][cord[1]] = ship;\n    });\n  };\n\n  const recieveAttack = (cord) => {\n    if (board[cord[0]][cord[1]] === \"W\") board[cord[0]][cord[1]] = \"M\";\n    else {\n      board[cord[0]][cord[1]].hit();\n      board[cord[0]][cord[1]] = \"H\";\n    }\n  };\n\n  const allSank = () => {\n    let ret = true;\n    ships.forEach((ship) => {\n      if (!ship.isSunk()) ret = false;\n    });\n    return ret;\n  };\n\n  return {\n    placeShip,\n    recieveAttack,\n    allSank,\n    board,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSelect */ \"./src/gameSelect.js\");\n\n\nconst content = document.createElement(\"div\");\ncontent.classList.add(\"content\");\nconst header = document.createElement(\"div\");\nheader.classList.add(\"header\");\nconst title = document.createElement(\"h2\");\ntitle.classList.add(\"header\");\nheader.appendChild(title);\ncontent.appendChild(header);\n\nconst main = document.createElement(\"div\");\nmain.id = \"main\";\nmain.classList.add(\"main\");\nmain.appendChild((0,_gameSelect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\ncontent.appendChild(main);\n\ndocument.body.appendChild(content);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst Player = (width) => {\n  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(width);\n\n  const makeMove = (cord, enemyBoard) => {\n    enemyBoard.recieveAttack(cord);\n  };\n  const makeRandomMove = (enemyBoard) => {\n    let x = Math.floor(Math.random() * width);\n    let y = Math.floor(Math.random() * width);\n    while (enemyBoard.board[y][x] === \"H\" || enemyBoard.board[y][x] === \"M\") {\n      if ((x + 1) / width === 1) {\n        x = 0;\n        if ((y + 1) / width === 1) {\n          y = 0;\n        } else {\n          y += 1;\n        }\n      }\n    }\n    enemyBoard.recieveAttack([y, x]);\n  };\n\n  return { makeMove, makeRandomMove, board };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\n  let hits = 0;\n\n  const hit = () => {\n    hits += 1;\n  };\n  const isSunk = () => length === hits;\n\n  return { hit, hits, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/singlePlayerGame.js":
/*!*********************************!*\
  !*** ./src/singlePlayerGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst singlePlayerGame = (boardWidth, shipSizes) => {\n  let gameOver = false;\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardWidth);\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardWidth);\n\n  const shipCords = [\n    [\n      // ship 1\n      [9, 0],\n      [9, 1],\n      [9, 2],\n      [9, 3],\n    ],\n    [\n      // ship 2\n      [0, 2],\n      [1, 2],\n      [2, 2],\n    ],\n    [\n      // ship 3\n      [7, 5],\n      [8, 5],\n      [9, 5],\n    ],\n    [\n      // ship 4\n      [0, 8],\n      [1, 8],\n    ],\n    [\n      // ship 5\n      [2, 0],\n      [3, 0],\n    ],\n    [\n      // ship 6\n      [4, 9],\n      [5, 9],\n    ],\n    [\n      // ship 7\n      [5, 3],\n    ],\n    [\n      // ship 8\n      [1, 5],\n    ],\n    [\n      // ship 9\n      [5, 7],\n    ],\n    [\n      // ship 10\n      [7, 8],\n    ],\n  ];\n\n  // player places ships\n  shipCords.forEach((ship) => {\n    player.board.placeShip(ship);\n  });\n  // Computer places ships\n  shipCords.forEach((ship) => {\n    computer.board.placeShip(ship);\n  });\n\n  // game loop:\n  while (!gameOver) {\n    // player attacks\n    while (true) {\n      let x = prompt(\"Enter x coordinate\");\n      let y = prompt(\"Enter y coordinate\");\n      x -= 1;\n      y -= 1;\n      if (\n        x >= 0 &&\n        y >= 0 &&\n        x < boardWidth &&\n        y < boardWidth &&\n        computer.board.board[y][x] !== \"H\" &&\n        computer.board.board[y][x] !== \"M\"\n      ) {\n        player.makeMove([y, x], computer.board);\n        break;\n      } else alert(\"Invalid coordinates\");\n    }\n    // check if game over\n    if (computer.board.allSank()) {\n      gameOver = true;\n      break;\n    }\n    // computer attacks\n    computer.makeRandomMove(player.board);\n\n    // check if game over\n    if (computer.board.allSank()) {\n      gameOver = true;\n      break;\n    }\n  }\n\n  // Display winner and let game change/reset\n  alert(\"Someone won\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singlePlayerGame);\n\n\n//# sourceURL=webpack://battleship/./src/singlePlayerGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;