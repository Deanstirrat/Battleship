"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/airstrike/airstrike.ttf */ "./src/assets/airstrike/airstrike.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/top-secret/Top Secret.ttf */ "./src/assets/top-secret/Top Secret.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"titleFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"gameSelect\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  font-family: titleFont;\n  background-color: #006494;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  font-size: 5vw;\n  margin: 0;\n}\n\n.main {\n  padding: 5px;\n  min-height: 90vh;\n  height: fit-content;\n  background-color: #051923;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameSelectContainer {\n  font-family: Arial, Helvetica, sans-serif;\n  height: fit-content;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: #006494;\n  color: white;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.title {\n  padding: 10px;\n  margin: 0;\n}\n\n.gameSelectContainer > button {\n  font-family: gameSelect;\n  padding: 10px;\n  width: 80%;\n  font-size: 1.5rem;\n  color: white;\n  background-color: #00a6fb;\n  border-style: solid;\n  border-color: white;\n  border-radius: 5px;\n  border-width: 1px;\n}\n.gameSelectContainer > button:hover {\n  background-color: #0582ca;\n}\n\n.boardsContainer {\n  /* display: grid;\n  grid-template-columns: 3fr 1fr 3fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px; */\n  gap: 5px;\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.playerBoard {\n  min-width: 350px;\n  position: relative;\n  background-color: #35fb38;\n  border-radius: 3px;\n  padding: 5px;\n  width: 30%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n.computerBoard {\n  min-width: 350px;\n  position: relative;\n  border-radius: 3px;\n  padding: 5px;\n  background-color: #fb3f35;\n  width: 30%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n}\nbutton:hover.waterBox {\n  background-color: red;\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.waterBox {\n  background-color: #051923;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: #003554;\n}\n.shipBox {\n  background-color: white;\n}\n\n.selectionBoard {\n  background-color: #006494;\n  border-radius: 3px;\n  padding: 5px;\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.emptyBox,\n.tempShip,\n.invalidPossition {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.emptyBox {\n  background-color: #00a6fb;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n\n.playerScoreContainter {\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.computerScoreContainter {\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.scoreShip {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n}\n.computerScoreContainter > .scoreShip {\n  justify-content: flex-end;\n}\n.shipToken {\n  background-color: beige;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n}\n.hitToken {\n  background-color: red;\n}\n.sunkToken {\n  background-color: red;\n  clip-path: polygon(\n    20% 0%,\n    0% 20%,\n    42% 50%,\n    0% 80%,\n    20% 100%,\n    50% 58%,\n    80% 100%,\n    100% 80%,\n    59% 50%,\n    100% 20%,\n    80% 0%,\n    51% 40%\n  );\n}\n\n.scoreName {\n  font-family: \"gameSelect\";\n  color: white;\n  text-align: start;\n}\n.scoreName2 {\n  font-family: \"gameSelect\";\n  color: white;\n  text-align: end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,+DAA+D;EAC/D,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,+DAAkE;EAClE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE;;;;;;cAMY;EACZ,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;AACV;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;;AAEA;;;;EAIE,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;;;EAGE,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB;;;;;;;;;;;;;GAaC;AACH;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: \"titleFont\";\n  src: url(\"./assets/airstrike/airstrike.ttf\") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"gameSelect\";\n  src: url(\"./assets/top-secret/Top\\ Secret.ttf\") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  font-family: titleFont;\n  background-color: #006494;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  font-size: 5vw;\n  margin: 0;\n}\n\n.main {\n  padding: 5px;\n  min-height: 90vh;\n  height: fit-content;\n  background-color: #051923;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameSelectContainer {\n  font-family: Arial, Helvetica, sans-serif;\n  height: fit-content;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: #006494;\n  color: white;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.title {\n  padding: 10px;\n  margin: 0;\n}\n\n.gameSelectContainer > button {\n  font-family: gameSelect;\n  padding: 10px;\n  width: 80%;\n  font-size: 1.5rem;\n  color: white;\n  background-color: #00a6fb;\n  border-style: solid;\n  border-color: white;\n  border-radius: 5px;\n  border-width: 1px;\n}\n.gameSelectContainer > button:hover {\n  background-color: #0582ca;\n}\n\n.boardsContainer {\n  /* display: grid;\n  grid-template-columns: 3fr 1fr 3fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px; */\n  gap: 5px;\n  width: 100vw;\n  height: 90vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.playerBoard {\n  min-width: 350px;\n  position: relative;\n  background-color: #35fb38;\n  border-radius: 3px;\n  padding: 5px;\n  width: 30%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n.computerBoard {\n  min-width: 350px;\n  position: relative;\n  border-radius: 3px;\n  padding: 5px;\n  background-color: #fb3f35;\n  width: 30%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n}\nbutton:hover.waterBox {\n  background-color: red;\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.waterBox {\n  background-color: #051923;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: #003554;\n}\n.shipBox {\n  background-color: white;\n}\n\n.selectionBoard {\n  background-color: #006494;\n  border-radius: 3px;\n  padding: 5px;\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.emptyBox,\n.tempShip,\n.invalidPossition {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.emptyBox {\n  background-color: #00a6fb;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n\n.playerScoreContainter {\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.computerScoreContainter {\n  min-width: 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.scoreShip {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n}\n.computerScoreContainter > .scoreShip {\n  justify-content: flex-end;\n}\n.shipToken {\n  background-color: beige;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n}\n.hitToken {\n  background-color: red;\n}\n.sunkToken {\n  background-color: red;\n  clip-path: polygon(\n    20% 0%,\n    0% 20%,\n    42% 50%,\n    0% 80%,\n    20% 100%,\n    50% 58%,\n    80% 100%,\n    100% 80%,\n    59% 50%,\n    100% 20%,\n    80% 0%,\n    51% 40%\n  );\n}\n\n.scoreName {\n  font-family: \"gameSelect\";\n  color: white;\n  text-align: start;\n}\n.scoreName2 {\n  font-family: \"gameSelect\";\n  color: white;\n  text-align: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/deleteMainContent.js":
/*!********************************************!*\
  !*** ./src/functions/deleteMainContent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteMainContent = () => {
  document.getElementById("main").innerHTML = "";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteMainContent);


/***/ }),

/***/ "./src/functions/gameSelect.js":
/*!*************************************!*\
  !*** ./src/functions/gameSelect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameOverSelect": () => (/* binding */ gameOverSelect),
/* harmony export */   "gameSelect": () => (/* binding */ gameSelect)
/* harmony export */ });
/* harmony import */ var _singlePlayerGameSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlePlayerGameSetup */ "./src/functions/singlePlayerGameSetup.js");
/* harmony import */ var _deleteMainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteMainContent */ "./src/functions/deleteMainContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");




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
    (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_singlePlayerGameSetup__WEBPACK_IMPORTED_MODULE_0__["default"])(10, []);
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
    (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_singlePlayerGameSetup__WEBPACK_IMPORTED_MODULE_0__["default"])(10, []);
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




/***/ }),

/***/ "./src/functions/playerPlaceShips.js":
/*!*******************************************!*\
  !*** ./src/functions/playerPlaceShips.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteMainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteMainContent */ "./src/functions/deleteMainContent.js");
/* harmony import */ var _validPossition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validPossition */ "./src/functions/validPossition.js");
/* harmony import */ var _singlePlayerDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singlePlayerDisplay */ "./src/functions/singlePlayerDisplay.js");
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/player */ "./src/objects/player.js");





const playerPlaceShips = (computer, player, shipSizes) => {
  (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
            if ((0,_validPossition__WEBPACK_IMPORTED_MODULE_1__.validPossition)(i, j, player.board.board, ship)) {
              const posstion = i * 10 + j;
              (0,_validPossition__WEBPACK_IMPORTED_MODULE_1__.addToClass)(posstion, ship);
            } else {
              tempBox.classList.add("invalidPossition");
            }
          });
          tempBox.addEventListener(
            "click",
            () => {
              if (tempBox.classList.contains("tempShip")) {
                (0,_validPossition__WEBPACK_IMPORTED_MODULE_1__.addToBoard)(i, j, player.board, ship);
                if (shipSizes.length > 0) {
                  playerPlaceShips(computer, player, shipSizes);
                } else {
                  (0,_singlePlayerDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])(player, computer);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerPlaceShips);


/***/ }),

/***/ "./src/functions/singlePlayerDisplay.js":
/*!**********************************************!*\
  !*** ./src/functions/singlePlayerDisplay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _singlePlayerGameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlePlayerGameLoop */ "./src/functions/singlePlayerGameLoop.js");


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
              (0,_singlePlayerGameLoop__WEBPACK_IMPORTED_MODULE_0__["default"])([i, j], player, computer);
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
              (0,_singlePlayerGameLoop__WEBPACK_IMPORTED_MODULE_0__["default"])([i, j], player, computer);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singlePlayerDisplay);


/***/ }),

/***/ "./src/functions/singlePlayerGameLoop.js":
/*!***********************************************!*\
  !*** ./src/functions/singlePlayerGameLoop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePlayerBoard */ "./src/functions/updatePlayerBoard.js");
/* harmony import */ var _updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateComputerBoard */ "./src/functions/updateComputerBoard.js");
/* harmony import */ var _updateScoreboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateScoreboard */ "./src/functions/updateScoreboard.js");
/* harmony import */ var _gameSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameSelect */ "./src/functions/gameSelect.js");
/* harmony import */ var _deleteMainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteMainContent */ "./src/functions/deleteMainContent.js");






const singlePlayerGameLoop = (cords, player, computer) => {
  // player attacks
  const playerHit = player.makeMove(cords, computer.board);
  (0,_updateScoreboard__WEBPACK_IMPORTED_MODULE_2__.updatePlayer1Scoreboard)(computer);
  (0,_updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);
  // check if game over
  if (computer.board.allSank()) {
    console.log("gameover");
    (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const main = document.getElementById("main");
    main.appendChild((0,_gameSelect__WEBPACK_IMPORTED_MODULE_3__.gameOverSelect)("player"));
  }

  if (!playerHit) {
    // computer attacks
    while (true) {
      if (!computer.makeRandomMove(player.board)) {
        (0,_updateScoreboard__WEBPACK_IMPORTED_MODULE_2__.updatePlayer2Scoreboard)(player);
        (0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
        break;
      }
      (0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
      // check if game over
      if (player.board.allSank()) {
        (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_4__["default"])();
        const main = document.getElementById("main");
        main.appendChild((0,_gameSelect__WEBPACK_IMPORTED_MODULE_3__.gameOverSelect)("computer"));
      }
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singlePlayerGameLoop);


/***/ }),

/***/ "./src/functions/singlePlayerGameSetup.js":
/*!************************************************!*\
  !*** ./src/functions/singlePlayerGameSetup.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/player */ "./src/objects/player.js");
/* harmony import */ var _playerPlaceShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerPlaceShips */ "./src/functions/playerPlaceShips.js");



const singlePlayerGame = (boardWidth, shipSizes) => {
  const player = (0,_objects_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardWidth);
  const computer = (0,_objects_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardWidth);

  const shipCords = [
    [
      // ship 7
      [5, 3],
    ],
    [
      // ship 8
      [1, 5],
    ],
    [
      // ship 4
      [0, 8],
      [1, 8],
    ],
    [
      // ship 5
      [2, 0],
      [3, 0],
    ],
    [
      // ship 2
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      // ship 3
      [7, 5],
      [8, 5],
      [9, 5],
    ],
    [
      // ship 1
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
    ],
    // [
    //   // ship 6
    //   [4, 9],
    //   [5, 9],
    // ],
    // [
    //   // ship 9
    //   [5, 7],
    // ],
    // [
    //   // ship 10
    //   [7, 8],
    // ],
  ];

  // Computer places ships
  shipCords.forEach((ship) => {
    computer.board.placeShip(ship);
  });

  (0,_playerPlaceShips__WEBPACK_IMPORTED_MODULE_1__["default"])(computer, player, [4, 3, 3, 2, 2, 1, 1]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singlePlayerGame);


/***/ }),

/***/ "./src/functions/updateComputerBoard.js":
/*!**********************************************!*\
  !*** ./src/functions/updateComputerBoard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateComputerBoard = (computer) => {
  const boxes = document.getElementById("computerBoard").children;
  for (let i = 0; i < boxes.length; i++) {
    const y = Math.floor(i / 10);
    const x = i % 10;
    const newVal = computer.board.board[y][x];
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
        box.classList.add("waterBox");
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComputerBoard);


/***/ }),

/***/ "./src/functions/updatePlayerBoard.js":
/*!********************************************!*\
  !*** ./src/functions/updatePlayerBoard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePlayerBoard);


/***/ }),

/***/ "./src/functions/updateScoreboard.js":
/*!*******************************************!*\
  !*** ./src/functions/updateScoreboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updatePlayer1Scoreboard": () => (/* binding */ updatePlayer1Scoreboard),
/* harmony export */   "updatePlayer2Scoreboard": () => (/* binding */ updatePlayer2Scoreboard)
/* harmony export */ });
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




/***/ }),

/***/ "./src/functions/validPossition.js":
/*!*****************************************!*\
  !*** ./src/functions/validPossition.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToBoard": () => (/* binding */ addToBoard),
/* harmony export */   "addToClass": () => (/* binding */ addToClass),
/* harmony export */   "validPossition": () => (/* binding */ validPossition)
/* harmony export */ });
const validPossition = (i, j, board, shipLength) => {
  let count = j;
  let length = shipLength;
  let valid = true;
  while (length > 0) {
    if (board[i][count] !== "W") {
      valid = false;
      break;
    }
    if (j > 0 && board[i][count - 1] !== "W") {
      valid = false;
      break;
    }
    if (count < board.length - 1 && board[i][count + 1] !== "W") {
      valid = false;
      break;
    }
    if (i > 0 && board[i - 1][count] !== "W") {
      valid = false;
      break;
    }
    if (i < board.length - 1 && board[i + 1][count] !== "W") {
      valid = false;
      break;
    }
    if (count > board.length) {
      valid = false;
      break;
    }
    count++;
    length--;
  }
  return valid;
};

const addToClass = (possition, shipLength) => {
  let length = shipLength;
  const tiles = document.getElementById("selectionBoard").children;
  while (length > 0) {
    tiles[possition].classList.add("tempShip");
    possition++;
    length--;
  }
};

const addToBoard = (i, j, board, shipLength) => {
  let length = shipLength;
  const ship = [];
  while (length > 0) {
    ship.push([i, j]);
    j++;
    length--;
  }
  board.placeShip(ship);
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_gameSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/gameSelect */ "./src/functions/gameSelect.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



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
main.appendChild((0,_functions_gameSelect__WEBPACK_IMPORTED_MODULE_0__.gameSelect)());
content.appendChild(main);
document.body.appendChild(content);


/***/ }),

/***/ "./src/objects/gameboard.js":
/*!**********************************!*\
  !*** ./src/objects/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/objects/ship.js");


const Gameboard = (width) => {
  // Create one dimensional array
  const board = new Array(width);
  // Loop to create 2D board array using 1D array
  for (let i = 0; i < board.length; i += 1) {
    board[i] = new Array(width);
  }
  // intialize board with all W for water
  for (let i = 0; i < width; i += 1) {
    for (let j = 0; j < width; j += 1) {
      board[i][j] = "W";
    }
  }
  const ships = [];

  const placeShip = (boxCords) => {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(boxCords.length);
    ships.push(ship);
    boxCords.forEach((cord) => {
      board[cord[0]][cord[1]] = ship;
    });
  };

  const recieveAttack = (cord) => {
    let ret = false;
    if (board[cord[0]][cord[1]] === "W") board[cord[0]][cord[1]] = "M";
    else {
      ret = true;
      board[cord[0]][cord[1]].hit();
      if (board[cord[0]][cord[1]].isSunk()) {
        board[cord[0]][cord[1]] = "H";
        const queue = [];
        queue.push(cord);
        const set = new Set();

        while (queue.length > 0) {
          const temp = queue.pop();
          if (board[temp[0]][temp[1]] === "H") {
            const y = temp[0];
            const x = temp[1];
            if (y > 0 && !set.has([y - 1, x].toString())) {
              set.add([y - 1, x].toString());
              queue.push([y - 1, x]);
            }
            if (y < board.length - 1 && !set.has([y + 1, x].toString())) {
              set.add([y + 1, x].toString());
              queue.push([y + 1, x]);
            }
            if (x > 0 && !set.has([y, x - 1].toString())) {
              set.add([y, x - 1].toString());
              queue.push([y, x - 1]);
            }
            if (x < board.length - 1 && !set.has([y, x + 1].toString())) {
              set.add([y, x + 1].toString());
              queue.push([y, x + 1]);
            }
          } else {
            board[temp[0]][temp[1]] = "M";
          }
        }
      } else {
        board[cord[0]][cord[1]] = "H";
      }
    }
    return ret;
  };

  const allSank = () => {
    let ret = true;
    ships.forEach((ship) => {
      if (!ship.isSunk()) ret = false;
    });
    return ret;
  };

  return {
    placeShip,
    recieveAttack,
    allSank,
    board,
    ships,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/objects/gameboard.js");


const Player = (width) => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(width);

  const makeMove = (cord, enemyBoard) => {
    const ret = enemyBoard.recieveAttack(cord);
    console.log(ret);
    return ret;
  };
  const makeRandomMove = (enemyBoard) => {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);
    while (enemyBoard.board[y][x] === "H" || enemyBoard.board[y][x] === "M") {
      if ((x + 1) / width === 1) {
        x = 0;
        if ((y + 1) / width === 1) {
          y = 0;
        } else {
          y += 1;
        }
      } else {
        x += 1;
      }
    }
    return enemyBoard.recieveAttack([y, x]);
  };

  return { makeMove, makeRandomMove, board };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/objects/ship.js":
/*!*****************************!*\
  !*** ./src/objects/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits += 1;
  };
  const isSunk = () => length === hits;

  const getHits = () => hits;

  return {
    hit,
    hits,
    getHits,
    isSunk,
    length,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/assets/airstrike/airstrike.ttf":
/*!********************************************!*\
  !*** ./src/assets/airstrike/airstrike.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "192a92c5c29bdd36bc83.ttf";

/***/ }),

/***/ "./src/assets/top-secret/Top Secret.ttf":
/*!**********************************************!*\
  !*** ./src/assets/top-secret/Top Secret.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d267bafed773f3db9dac.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGtCQUFrQixXQUFXO0FBQzdCLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEZXOztBQUVwQztBQUNBLGdCQUFnQixzREFBUzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZ2FtZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9wbGF5ZXJQbGFjZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3NpbmdsZVBsYXllckRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZVNldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3VwZGF0ZUNvbXB1dGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlUGxheWVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlU2NvcmVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy92YWxpZFBvc3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29iamVjdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWlyc3RyaWtlL2FpcnN0cmlrZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy90b3Atc2VjcmV0L1RvcCBTZWNyZXQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJnYW1lU2VsZWN0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1dnc7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTkyMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lU2VsZWN0Q29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDk0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ2FtZVNlbGVjdENvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogZ2FtZVNlbGVjdDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNmZiO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmdhbWVTZWxlY3RDb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ODJjYTtcXG59XFxuXFxuLmJvYXJkc0NvbnRhaW5lciB7XFxuICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAzMHB4OyAqL1xcbiAgZ2FwOiA1cHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWZiMzg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMzAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5jb21wdXRlckJvYXJkIHtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIzZjM1O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvbXB1dGVyQm9hcmQgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbmJ1dHRvbjpob3Zlci53YXRlckJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi53YXRlckJveCxcXG4uaGl0Qm94LFxcbi5zaGlwQm94LFxcbi5taXNzQm94IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLndhdGVyQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTE5MjM7XFxufVxcbi5oaXRCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ubWlzc0JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNTU0O1xcbn1cXG4uc2hpcEJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlbGVjdGlvbkJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZW1wdHlCb3gsXFxuLnRlbXBTaGlwLFxcbi5pbnZhbGlkUG9zc2l0aW9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmVtcHR5Qm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2ZmI7XFxufVxcbi50ZW1wU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uaW52YWxpZFBvc3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wbGF5ZXJTY29yZUNvbnRhaW50ZXIge1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuLmNvbXB1dGVyU2NvcmVDb250YWludGVyIHtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5zY29yZVNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDJweDtcXG59XFxuLmNvbXB1dGVyU2NvcmVDb250YWludGVyID4gLnNjb3JlU2hpcCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uc2hpcFRva2VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcbi5oaXRUb2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5zdW5rVG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAyMCUgMCUsXFxuICAgIDAlIDIwJSxcXG4gICAgNDIlIDUwJSxcXG4gICAgMCUgODAlLFxcbiAgICAyMCUgMTAwJSxcXG4gICAgNTAlIDU4JSxcXG4gICAgODAlIDEwMCUsXFxuICAgIDEwMCUgODAlLFxcbiAgICA1OSUgNTAlLFxcbiAgICAxMDAlIDIwJSxcXG4gICAgODAlIDAlLFxcbiAgICA1MSUgNDAlXFxuICApO1xcbn1cXG5cXG4uc2NvcmVOYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZ2FtZVNlbGVjdFxcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLnNjb3JlTmFtZTIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJnYW1lU2VsZWN0XFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwrREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlC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Q0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGl0bGVGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9haXJzdHJpa2UvYWlyc3RyaWtlLnR0ZlxcXCIpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJnYW1lU2VsZWN0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy90b3Atc2VjcmV0L1RvcFxcXFwgU2VjcmV0LnR0ZlxcXCIpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRlciB7XFxuICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5NDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDV2dztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxOTIzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVTZWxlY3RDb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5nYW1lU2VsZWN0Q29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lU2VsZWN0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2ZmI7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uZ2FtZVNlbGVjdENvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4MmNhO1xcbn1cXG5cXG4uYm9hcmRzQ29udGFpbmVyIHtcXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDMwcHg7ICovXFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1ZmIzODtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDhweDtcXG59XFxuLmNvbXB1dGVyQm9hcmQge1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjNmMzU7XFxuICB3aWR0aDogMzAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb21wdXRlckJvYXJkOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuYnV0dG9uOmhvdmVyLndhdGVyQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLndhdGVyQm94LFxcbi5oaXRCb3gsXFxuLnNoaXBCb3gsXFxuLm1pc3NCb3gge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ud2F0ZXJCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTkyMztcXG59XFxuLmhpdEJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5taXNzQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM1NTQ7XFxufVxcbi5zaGlwQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VsZWN0aW9uQm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5NDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogODAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5lbXB0eUJveCxcXG4udGVtcFNoaXAsXFxuLmludmFsaWRQb3NzaXRpb24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uZW1wdHlCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTZmYjtcXG59XFxuLnRlbXBTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbi5pbnZhbGlkUG9zc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBsYXllclNjb3JlQ29udGFpbnRlciB7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uY29tcHV0ZXJTY29yZUNvbnRhaW50ZXIge1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuLnNjb3JlU2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMnB4O1xcbn1cXG4uY29tcHV0ZXJTY29yZUNvbnRhaW50ZXIgPiAuc2NvcmVTaGlwIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5zaGlwVG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICB3aWR0aDogMTUlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuLmhpdFRva2VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnN1bmtUb2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDIwJSAwJSxcXG4gICAgMCUgMjAlLFxcbiAgICA0MiUgNTAlLFxcbiAgICAwJSA4MCUsXFxuICAgIDIwJSAxMDAlLFxcbiAgICA1MCUgNTglLFxcbiAgICA4MCUgMTAwJSxcXG4gICAgMTAwJSA4MCUsXFxuICAgIDU5JSA1MCUsXFxuICAgIDEwMCUgMjAlLFxcbiAgICA4MCUgMCUsXFxuICAgIDUxJSA0MCVcXG4gICk7XFxufVxcblxcbi5zY29yZU5hbWUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJnYW1lU2VsZWN0XFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4uc2NvcmVOYW1lMiB7XFxuICBmb250LWZhbWlseTogXFxcImdhbWVTZWxlY3RcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGVsZXRlTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlTWFpbkNvbnRlbnQ7XG4iLCJpbXBvcnQgc2luZ2xlUGxheWVyR2FtZSBmcm9tIFwiLi9zaW5nbGVQbGF5ZXJHYW1lU2V0dXBcIjtcbmltcG9ydCBkZWxldGVNYWluQ29udGVudCBmcm9tIFwiLi9kZWxldGVNYWluQ29udGVudFwiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGdhbWVTZWxlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lU2VsZWN0Q29udGFpbmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBnYW1lIHRvIGJlZ2luXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIHBsYXllclwiO1xuICBzaW5nbGVQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RCdXR0b25cIik7XG4gIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gICAgc2luZ2xlUGxheWVyR2FtZSgxMCwgW10pO1xuICB9KTtcbiAgY29uc3QgdHdvUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdHdvUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiVHdvIHBsYXllclwiO1xuICB0d29QbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RCdXR0b25cIik7XG4gIHR3b1BsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFRPRE9cbiAgICBhbGVydChcImluIHByb2dyZXNzXCIpO1xuICB9KTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlUGxheWVyQnV0dG9uKTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0d29QbGF5ZXJCdXR0b24pO1xuICByZXR1cm4gZ2FtZVNlbGVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGdhbWVPdmVyU2VsZWN0ID0gKHdpbm5lcikgPT4ge1xuICBjb25zdCBnYW1lU2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZVNlbGVjdENvbnRhaW5lclwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGlmICh3aW5uZXIgPT09IFwicGxheWVyXCIpIHRpdGxlLnRleHRDb250ZW50ID0gXCJZb3Ugd29uISBwbGF5IGFnYWluP1wiO1xuICBlbHNlIHRpdGxlLnRleHRDb250ZW50ID0gXCJZb3UgbG9zdC4uLiByZW1hdGNoP1wiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnN0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNpbmdsZVBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIlNpbmdsZSBwbGF5ZXJcIjtcbiAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lU2VsZWN0QnV0dG9uXCIpO1xuICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVNYWluQ29udGVudCgpO1xuICAgIHNpbmdsZVBsYXllckdhbWUoMTAsIFtdKTtcbiAgfSk7XG4gIGNvbnN0IHR3b1BsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHR3b1BsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIlR3byBwbGF5ZXJcIjtcbiAgdHdvUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJnYW1lU2VsZWN0QnV0dG9uXCIpO1xuICB0d29QbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBUT0RPXG4gICAgYWxlcnQoXCJpbiBwcm9ncmVzc1wiKTtcbiAgfSk7XG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBnYW1lU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmdsZVBsYXllckJ1dHRvbik7XG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodHdvUGxheWVyQnV0dG9uKTtcbiAgcmV0dXJuIGdhbWVTZWxlY3RDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBnYW1lU2VsZWN0LCBnYW1lT3ZlclNlbGVjdCB9O1xuIiwiaW1wb3J0IGRlbGV0ZU1haW5Db250ZW50IGZyb20gXCIuL2RlbGV0ZU1haW5Db250ZW50XCI7XG5pbXBvcnQgeyB2YWxpZFBvc3NpdGlvbiwgYWRkVG9DbGFzcywgYWRkVG9Cb2FyZCB9IGZyb20gXCIuL3ZhbGlkUG9zc2l0aW9uXCI7XG5pbXBvcnQgc2luZ2xlUGxheWVyRGlzcGxheSBmcm9tIFwiLi9zaW5nbGVQbGF5ZXJEaXNwbGF5XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9vYmplY3RzL3BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXJQbGFjZVNoaXBzID0gKGNvbXB1dGVyLCBwbGF5ZXIsIHNoaXBTaXplcykgPT4ge1xuICBkZWxldGVNYWluQ29udGVudCgpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IHNlbGVjdGlvbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0aW9uQm9hcmQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbkJvYXJkXCIpO1xuICBzZWxlY3Rpb25Cb2FyZC5pZCA9IFwic2VsZWN0aW9uQm9hcmRcIjtcblxuICBjb25zdCBzaGlwID0gc2hpcFNpemVzLnBvcCgpO1xuICAvLyBnZW5lcmF0ZSBib2FyZDpcbiAgLy8gc2hpcFNpemVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzd2l0Y2ggKHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXSkge1xuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcImVtcHR5Qm94XCIpO1xuICAgICAgICAgIHRlbXBCb3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGlsZXNUb1JlbW92ZSA9XG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnZhbGlkUG9zc2l0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKHRpbGVzVG9SZW1vdmUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBBcnJheS5mcm9tKHRpbGVzVG9SZW1vdmUpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wU2hpcFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkUG9zc2l0aW9uXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGVzVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGVtcFNoaXBcIik7XG4gICAgICAgICAgICBpZiAodGlsZXNUb1JlbW92ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGlsZXNUb1JlbW92ZSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRlbXBTaGlwXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkUG9zc2l0aW9uKGksIGosIHBsYXllci5ib2FyZC5ib2FyZCwgc2hpcCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgcG9zc3Rpb24gPSBpICogMTAgKyBqO1xuICAgICAgICAgICAgICBhZGRUb0NsYXNzKHBvc3N0aW9uLCBzaGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGVtcEJveC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wU2hpcFwiKSkge1xuICAgICAgICAgICAgICAgIGFkZFRvQm9hcmQoaSwgaiwgcGxheWVyLmJvYXJkLCBzaGlwKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFNpemVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHBsYXllclBsYWNlU2hpcHMoY29tcHV0ZXIsIHBsYXllciwgc2hpcFNpemVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2luZ2xlUGxheWVyRGlzcGxheShwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwic2hpcEJveFwiKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGlvbkJvYXJkLmFwcGVuZENoaWxkKHRlbXBCb3gpO1xuICAgIH1cbiAgfVxuICAvLyB9KTtcblxuICBtYWluLmFwcGVuZENoaWxkKHNlbGVjdGlvbkJvYXJkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllclBsYWNlU2hpcHM7XG4iLCJpbXBvcnQgc2luZ2xlUGxheWVyR2FtZUxvb3AgZnJvbSBcIi4vc2luZ2xlUGxheWVyR2FtZUxvb3BcIjtcblxuY29uc3Qgc2luZ2xlUGxheWVyRGlzcGxheSA9IChwbGF5ZXIsIGNvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZHNDb250YWluZXJcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllckJvYXJkXCIpO1xuICBwbGF5ZXJCb2FyZC5pZCA9IFwicGxheWVyQm9hcmRcIjtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyQm9hcmRcIik7XG4gIGNvbXB1dGVyQm9hcmQuaWQgPSBcImNvbXB1dGVyQm9hcmRcIjtcblxuICBwbGF5ZXIuYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzd2l0Y2ggKGJveCkge1xuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcIndhdGVyQm94XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcImhpdEJveFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJtaXNzQm94XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcInNoaXBCb3hcIik7XG4gICAgICB9XG4gICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZCh0ZW1wQm94KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tcHV0ZXIuYm9hcmQuYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3dpdGNoIChjb21wdXRlci5ib2FyZC5ib2FyZFtpXVtqXSkge1xuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcIndhdGVyQm94XCIpO1xuICAgICAgICAgIHRlbXBCb3guYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgc2luZ2xlUGxheWVyR2FtZUxvb3AoW2ksIGpdLCBwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaGl0Qm94XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcIm1pc3NCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBzaW5nbGVQbGF5ZXJHYW1lTG9vcChbaSwgal0sIHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQodGVtcEJveCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2NvcmVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNjb3JlYm9hcmQuY2xhc3NMaXN0LmFkZChcInNjb3JlYm9hcmRDb250YWluZXJcIik7XG4gIGNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyU2NvcmUuY2xhc3NMaXN0LmFkZChcInBsYXllclNjb3JlQ29udGFpbnRlclwiKTtcbiAgcGxheWVyU2NvcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJTY29yZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyU2NvcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wdXRlclNjb3JlQ29udGFpbmVyXCIpO1xuICBjb21wdXRlclNjb3JlLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlclNjb3JlQ29udGFpbnRlclwiKTtcblxuICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHNjb3JlU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2NvcmVTaGlwLmNsYXNzTGlzdC5hZGQoXCJzY29yZVNoaXBcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aCAtIHNoaXAuaGl0czsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwVG9rZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcFRva2VuLmNsYXNzTGlzdC5hZGQoXCJzaGlwVG9rZW5cIik7XG4gICAgICBzY29yZVNoaXAuYXBwZW5kQ2hpbGQoc2hpcFRva2VuKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHM7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcFRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBUb2tlbi5jbGFzc0xpc3QuYWRkKFwic2hpcFRva2VuXCIpO1xuICAgICAgc2hpcFRva2VuLmNsYXNzTGlzdC5hZGQoXCJoaXRUb2tlblwiKTtcbiAgICAgIHNjb3JlU2hpcC5hcHBlbmRDaGlsZChzaGlwVG9rZW4pO1xuICAgIH1cbiAgICBwbGF5ZXJTY29yZS5hcHBlbmRDaGlsZChzY29yZVNoaXApO1xuICB9KTtcbiAgY29uc3Qgc2NvcmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNjb3JlTmFtZS5jbGFzc0xpc3QuYWRkKFwic2NvcmVOYW1lXCIpO1xuICBzY29yZU5hbWUudGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xuICBwbGF5ZXJTY29yZS5hcHBlbmRDaGlsZChzY29yZU5hbWUpO1xuXG4gIGNvbXB1dGVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBzY29yZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjb3JlU2hpcC5jbGFzc0xpc3QuYWRkKFwic2NvcmVTaGlwXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGggLSBzaGlwLmhpdHM7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcFRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBUb2tlbi5jbGFzc0xpc3QuYWRkKFwic2hpcFRva2VuXCIpO1xuICAgICAgc2NvcmVTaGlwLmFwcGVuZENoaWxkKHNoaXBUb2tlbik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBUb2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwVG9rZW4uY2xhc3NMaXN0LmFkZChcInNoaXBUb2tlblwiKTtcbiAgICAgIHNoaXBUb2tlbi5jbGFzc0xpc3QuYWRkKFwiaGl0VG9rZW5cIik7XG4gICAgICBzY29yZVNoaXAuYXBwZW5kQ2hpbGQoc2hpcFRva2VuKTtcbiAgICB9XG4gICAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzY29yZVNoaXApO1xuICB9KTtcbiAgY29uc3Qgc2NvcmVOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzY29yZU5hbWUyLmNsYXNzTGlzdC5hZGQoXCJzY29yZU5hbWUyXCIpO1xuICBzY29yZU5hbWUyLnRleHRDb250ZW50ID0gXCJDUFVcIjtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzY29yZU5hbWUyKTtcblxuICBzY29yZWJvYXJkLmFwcGVuZENoaWxkKHBsYXllclNjb3JlKTtcbiAgc2NvcmVib2FyZC5hcHBlbmRDaGlsZChjb21wdXRlclNjb3JlKTtcblxuICBib2FyZHNDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNjb3JlKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyU2NvcmUpO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kKGNvbXB1dGVyQm9hcmQpO1xuICBtYWluLmFwcGVuZChib2FyZHNDb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlUGxheWVyRGlzcGxheTtcbiIsImltcG9ydCB1cGRhdGVQbGF5ZXJCb2FyZCBmcm9tIFwiLi91cGRhdGVQbGF5ZXJCb2FyZFwiO1xuaW1wb3J0IHVwZGF0ZUNvbXB1dGVyQm9hcmQgZnJvbSBcIi4vdXBkYXRlQ29tcHV0ZXJCb2FyZFwiO1xuaW1wb3J0IHtcbiAgdXBkYXRlUGxheWVyMVNjb3JlYm9hcmQsXG4gIHVwZGF0ZVBsYXllcjJTY29yZWJvYXJkLFxufSBmcm9tIFwiLi91cGRhdGVTY29yZWJvYXJkXCI7XG5pbXBvcnQgeyBnYW1lT3ZlclNlbGVjdCB9IGZyb20gXCIuL2dhbWVTZWxlY3RcIjtcbmltcG9ydCBkZWxldGVNYWluQ29udGVudCBmcm9tIFwiLi9kZWxldGVNYWluQ29udGVudFwiO1xuXG5jb25zdCBzaW5nbGVQbGF5ZXJHYW1lTG9vcCA9IChjb3JkcywgcGxheWVyLCBjb21wdXRlcikgPT4ge1xuICAvLyBwbGF5ZXIgYXR0YWNrc1xuICBjb25zdCBwbGF5ZXJIaXQgPSBwbGF5ZXIubWFrZU1vdmUoY29yZHMsIGNvbXB1dGVyLmJvYXJkKTtcbiAgdXBkYXRlUGxheWVyMVNjb3JlYm9hcmQoY29tcHV0ZXIpO1xuICB1cGRhdGVDb21wdXRlckJvYXJkKGNvbXB1dGVyKTtcbiAgLy8gY2hlY2sgaWYgZ2FtZSBvdmVyXG4gIGlmIChjb21wdXRlci5ib2FyZC5hbGxTYW5rKCkpIHtcbiAgICBjb25zb2xlLmxvZyhcImdhbWVvdmVyXCIpO1xuICAgIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVPdmVyU2VsZWN0KFwicGxheWVyXCIpKTtcbiAgfVxuXG4gIGlmICghcGxheWVySGl0KSB7XG4gICAgLy8gY29tcHV0ZXIgYXR0YWNrc1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoIWNvbXB1dGVyLm1ha2VSYW5kb21Nb3ZlKHBsYXllci5ib2FyZCkpIHtcbiAgICAgICAgdXBkYXRlUGxheWVyMlNjb3JlYm9hcmQocGxheWVyKTtcbiAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgLy8gY2hlY2sgaWYgZ2FtZSBvdmVyXG4gICAgICBpZiAocGxheWVyLmJvYXJkLmFsbFNhbmsoKSkge1xuICAgICAgICBkZWxldGVNYWluQ29udGVudCgpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVPdmVyU2VsZWN0KFwiY29tcHV0ZXJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlUGxheWVyR2FtZUxvb3A7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9vYmplY3RzL3BsYXllclwiO1xuaW1wb3J0IHBsYXllclBsYWNlU2hpcHMgZnJvbSBcIi4vcGxheWVyUGxhY2VTaGlwc1wiO1xuXG5jb25zdCBzaW5nbGVQbGF5ZXJHYW1lID0gKGJvYXJkV2lkdGgsIHNoaXBTaXplcykgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoYm9hcmRXaWR0aCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKGJvYXJkV2lkdGgpO1xuXG4gIGNvbnN0IHNoaXBDb3JkcyA9IFtcbiAgICBbXG4gICAgICAvLyBzaGlwIDdcbiAgICAgIFs1LCAzXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgOFxuICAgICAgWzEsIDVdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCA0XG4gICAgICBbMCwgOF0sXG4gICAgICBbMSwgOF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDVcbiAgICAgIFsyLCAwXSxcbiAgICAgIFszLCAwXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgMlxuICAgICAgWzAsIDJdLFxuICAgICAgWzEsIDJdLFxuICAgICAgWzIsIDJdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCAzXG4gICAgICBbNywgNV0sXG4gICAgICBbOCwgNV0sXG4gICAgICBbOSwgNV0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDFcbiAgICAgIFs5LCAwXSxcbiAgICAgIFs5LCAxXSxcbiAgICAgIFs5LCAyXSxcbiAgICAgIFs5LCAzXSxcbiAgICBdLFxuICAgIC8vIFtcbiAgICAvLyAgIC8vIHNoaXAgNlxuICAgIC8vICAgWzQsIDldLFxuICAgIC8vICAgWzUsIDldLFxuICAgIC8vIF0sXG4gICAgLy8gW1xuICAgIC8vICAgLy8gc2hpcCA5XG4gICAgLy8gICBbNSwgN10sXG4gICAgLy8gXSxcbiAgICAvLyBbXG4gICAgLy8gICAvLyBzaGlwIDEwXG4gICAgLy8gICBbNywgOF0sXG4gICAgLy8gXSxcbiAgXTtcblxuICAvLyBDb21wdXRlciBwbGFjZXMgc2hpcHNcbiAgc2hpcENvcmRzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb21wdXRlci5ib2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gIH0pO1xuXG4gIHBsYXllclBsYWNlU2hpcHMoY29tcHV0ZXIsIHBsYXllciwgWzQsIDMsIDMsIDIsIDIsIDEsIDFdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVBsYXllckdhbWU7XG4iLCJjb25zdCB1cGRhdGVDb21wdXRlckJvYXJkID0gKGNvbXB1dGVyKSA9PiB7XG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlckJvYXJkXCIpLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDEwKTtcbiAgICBjb25zdCB4ID0gaSAlIDEwO1xuICAgIGNvbnN0IG5ld1ZhbCA9IGNvbXB1dGVyLmJvYXJkLmJvYXJkW3ldW3hdO1xuICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgIGJveC5jbGFzc05hbWUgPSBcIlwiO1xuICAgIHN3aXRjaCAobmV3VmFsKSB7XG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIndhdGVyQm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGl0Qm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwibWlzc0JveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIndhdGVyQm94XCIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tcHV0ZXJCb2FyZDtcbiIsImNvbnN0IHVwZGF0ZVBsYXllckJvYXJkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyQm9hcmRcIikuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gMTApO1xuICAgIGNvbnN0IHggPSBpICUgMTA7XG4gICAgY29uc3QgbmV3VmFsID0gcGxheWVyLmJvYXJkLmJvYXJkW3ldW3hdO1xuICAgIGNvbnN0IGJveCA9IGJveGVzW2ldO1xuICAgIGJveC5jbGFzc05hbWUgPSBcIlwiO1xuICAgIHN3aXRjaCAobmV3VmFsKSB7XG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIndhdGVyQm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGl0Qm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwibWlzc0JveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNoaXBCb3hcIik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVQbGF5ZXJCb2FyZDtcbiIsImNvbnN0IHVwZGF0ZVBsYXllcjFTY29yZWJvYXJkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzY29yZVNoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlclNjb3JlQ29udGFpbmVyXCIpLmNoaWxkcmVuO1xuICBsZXQgY291bnQgPSAwO1xuICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBUb2tlbnMgPSBzY29yZVNoaXBzW2NvdW50XS5jaGlsZHJlbjtcbiAgICBjb3VudCsrO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRIaXRzKCk7IGkrKykge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc2hpcFRva2Vuc1tpXS5jbGFzc0xpc3QuYWRkKFwic3Vua1Rva2VuXCIpO1xuICAgICAgfSBlbHNlIHNoaXBUb2tlbnNbaV0uY2xhc3NMaXN0LmFkZChcImhpdFRva2VuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVQbGF5ZXIyU2NvcmVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3Qgc2NvcmVTaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyU2NvcmVDb250YWluZXJcIikuY2hpbGRyZW47XG4gIGxldCBjb3VudCA9IDA7XG4gIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcFRva2VucyA9IHNjb3JlU2hpcHNbY291bnRdLmNoaWxkcmVuO1xuICAgIGNvdW50Kys7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldEhpdHMoKTsgaSsrKSB7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzaGlwVG9rZW5zW2ldLmNsYXNzTGlzdC5hZGQoXCJzdW5rVG9rZW5cIik7XG4gICAgICB9IGVsc2Ugc2hpcFRva2Vuc1tpXS5jbGFzc0xpc3QuYWRkKFwiaGl0VG9rZW5cIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZVBsYXllcjFTY29yZWJvYXJkLCB1cGRhdGVQbGF5ZXIyU2NvcmVib2FyZCB9O1xuIiwiY29uc3QgdmFsaWRQb3NzaXRpb24gPSAoaSwgaiwgYm9hcmQsIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IGNvdW50ID0gajtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgaWYgKGJvYXJkW2ldW2NvdW50XSAhPT0gXCJXXCIpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGogPiAwICYmIGJvYXJkW2ldW2NvdW50IC0gMV0gIT09IFwiV1wiKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChjb3VudCA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgYm9hcmRbaV1bY291bnQgKyAxXSAhPT0gXCJXXCIpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGkgPiAwICYmIGJvYXJkW2kgLSAxXVtjb3VudF0gIT09IFwiV1wiKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChpIDwgYm9hcmQubGVuZ3RoIC0gMSAmJiBib2FyZFtpICsgMV1bY291bnRdICE9PSBcIldcIikge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoY291bnQgPiBib2FyZC5sZW5ndGgpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY291bnQrKztcbiAgICBsZW5ndGgtLTtcbiAgfVxuICByZXR1cm4gdmFsaWQ7XG59O1xuXG5jb25zdCBhZGRUb0NsYXNzID0gKHBvc3NpdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICBsZXQgbGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGlvbkJvYXJkXCIpLmNoaWxkcmVuO1xuICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIHRpbGVzW3Bvc3NpdGlvbl0uY2xhc3NMaXN0LmFkZChcInRlbXBTaGlwXCIpO1xuICAgIHBvc3NpdGlvbisrO1xuICAgIGxlbmd0aC0tO1xuICB9XG59O1xuXG5jb25zdCBhZGRUb0JvYXJkID0gKGksIGosIGJvYXJkLCBzaGlwTGVuZ3RoKSA9PiB7XG4gIGxldCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuICBjb25zdCBzaGlwID0gW107XG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgc2hpcC5wdXNoKFtpLCBqXSk7XG4gICAgaisrO1xuICAgIGxlbmd0aC0tO1xuICB9XG4gIGJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbn07XG5cbmV4cG9ydCB7IHZhbGlkUG9zc2l0aW9uLCBhZGRUb0NsYXNzLCBhZGRUb0JvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lU2VsZWN0IH0gZnJvbSBcIi4vZnVuY3Rpb25zL2dhbWVTZWxlY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uaWQgPSBcIm1haW5cIjtcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5tYWluLmFwcGVuZENoaWxkKGdhbWVTZWxlY3QoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKHdpZHRoKSA9PiB7XG4gIC8vIENyZWF0ZSBvbmUgZGltZW5zaW9uYWwgYXJyYXlcbiAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkod2lkdGgpO1xuICAvLyBMb29wIHRvIGNyZWF0ZSAyRCBib2FyZCBhcnJheSB1c2luZyAxRCBhcnJheVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkod2lkdGgpO1xuICB9XG4gIC8vIGludGlhbGl6ZSBib2FyZCB3aXRoIGFsbCBXIGZvciB3YXRlclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdpZHRoOyBqICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldW2pdID0gXCJXXCI7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGJveENvcmRzKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoYm94Q29yZHMubGVuZ3RoKTtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIGJveENvcmRzLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgIGJvYXJkW2NvcmRbMF1dW2NvcmRbMV1dID0gc2hpcDtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKGNvcmQpID0+IHtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgaWYgKGJvYXJkW2NvcmRbMF1dW2NvcmRbMV1dID09PSBcIldcIikgYm9hcmRbY29yZFswXV1bY29yZFsxXV0gPSBcIk1cIjtcbiAgICBlbHNlIHtcbiAgICAgIHJldCA9IHRydWU7XG4gICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXS5oaXQoKTtcbiAgICAgIGlmIChib2FyZFtjb3JkWzBdXVtjb3JkWzFdXS5pc1N1bmsoKSkge1xuICAgICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgICAgICBxdWV1ZS5wdXNoKGNvcmQpO1xuICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gcXVldWUucG9wKCk7XG4gICAgICAgICAgaWYgKGJvYXJkW3RlbXBbMF1dW3RlbXBbMV1dID09PSBcIkhcIikge1xuICAgICAgICAgICAgY29uc3QgeSA9IHRlbXBbMF07XG4gICAgICAgICAgICBjb25zdCB4ID0gdGVtcFsxXTtcbiAgICAgICAgICAgIGlmICh5ID4gMCAmJiAhc2V0LmhhcyhbeSAtIDEsIHhdLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgIHNldC5hZGQoW3kgLSAxLCB4XS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgcXVldWUucHVzaChbeSAtIDEsIHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5IDwgYm9hcmQubGVuZ3RoIC0gMSAmJiAhc2V0LmhhcyhbeSArIDEsIHhdLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgIHNldC5hZGQoW3kgKyAxLCB4XS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgcXVldWUucHVzaChbeSArIDEsIHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4ID4gMCAmJiAhc2V0LmhhcyhbeSwgeCAtIDFdLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgIHNldC5hZGQoW3ksIHggLSAxXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgcXVldWUucHVzaChbeSwgeCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4IDwgYm9hcmQubGVuZ3RoIC0gMSAmJiAhc2V0LmhhcyhbeSwgeCArIDFdLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgIHNldC5hZGQoW3ksIHggKyAxXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgcXVldWUucHVzaChbeSwgeCArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbdGVtcFswXV1bdGVtcFsxXV0gPSBcIk1cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkW2NvcmRbMF1dW2NvcmRbMV1dID0gXCJIXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgY29uc3QgYWxsU2FuayA9ICgpID0+IHtcbiAgICBsZXQgcmV0ID0gdHJ1ZTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHJldCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBhbGxTYW5rLFxuICAgIGJvYXJkLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKHdpZHRoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKHdpZHRoKTtcblxuICBjb25zdCBtYWtlTW92ZSA9IChjb3JkLCBlbmVteUJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gZW5lbXlCb2FyZC5yZWNpZXZlQXR0YWNrKGNvcmQpO1xuICAgIGNvbnNvbGUubG9nKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoZW5lbXlCb2FyZCkgPT4ge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xuICAgIHdoaWxlIChlbmVteUJvYXJkLmJvYXJkW3ldW3hdID09PSBcIkhcIiB8fCBlbmVteUJvYXJkLmJvYXJkW3ldW3hdID09PSBcIk1cIikge1xuICAgICAgaWYgKCh4ICsgMSkgLyB3aWR0aCA9PT0gMSkge1xuICAgICAgICB4ID0gMDtcbiAgICAgICAgaWYgKCh5ICsgMSkgLyB3aWR0aCA9PT0gMSkge1xuICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNpZXZlQXR0YWNrKFt5LCB4XSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbWFrZU1vdmUsIG1ha2VSYW5kb21Nb3ZlLCBib2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGxlbmd0aCA9PT0gaGl0cztcblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBoaXRzLFxuICAgIGdldEhpdHMsXG4gICAgaXNTdW5rLFxuICAgIGxlbmd0aCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=