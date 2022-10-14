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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"titleFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"gameSelect\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  font-family: titleFont;\n  background-color: #006494;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  font-size: 5rem;\n  margin: 0;\n}\n\n.main {\n  height: 100%;\n  background-color: #051923;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameSelectContainer {\n  font-family: Arial, Helvetica, sans-serif;\n  height: fit-content;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: #006494;\n  color: white;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.title {\n  padding: 10px;\n  margin: 0;\n}\n\n.gameSelectContainer > button {\n  font-family: gameSelect;\n  padding: 10px;\n  width: 80%;\n  font-size: 1.5rem;\n  color: white;\n  background-color: #00a6fb;\n  border-style: solid;\n  border-color: white;\n  border-radius: 5px;\n  border-width: 1px;\n}\n.gameSelectContainer > button:hover {\n  background-color: #0582ca;\n}\n\n.boardsContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr 3fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px;\n}\n\n.playerBoard {\n  background-color: #35fb38;\n  border-radius: 3px;\n  padding: 5px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n.computerBoard {\n  border-radius: 3px;\n  padding: 5px;\n  background-color: #fb3f35;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n}\nbutton:hover.waterBox {\n  background-color: red;\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.waterBox {\n  background-color: #051923;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: #003554;\n}\n.shipBox {\n  background-color: white;\n}\n\n.selectionBoard {\n  background-color: #006494;\n  border-radius: 3px;\n  padding: 5px;\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.emptyBox,\n.tempShip,\n.invalidPossition {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.emptyBox {\n  background-color: #00a6fb;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n\n.scoreboardContainer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.playerScoreContainter {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.computerScoreContainter {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.scoreShip {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n}\n.computerScoreContainter > .scoreShip {\n  justify-content: flex-end;\n}\n.shipToken {\n  background-color: beige;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n}\n.hitToken {\n  background-color: red;\n}\n.sunkToken {\n  background-color: red;\n  clip-path: polygon(\n    20% 0%,\n    0% 20%,\n    42% 50%,\n    0% 80%,\n    20% 100%,\n    50% 58%,\n    80% 100%,\n    100% 80%,\n    59% 50%,\n    100% 20%,\n    80% 0%,\n    51% 40%\n  );\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,+DAA+D;EAC/D,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,+DAAkE;EAClE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;AACV;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;;AAEA;;;;EAIE,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;;;EAGE,kBAAkB;EAClB,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;EACvB,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB;;;;;;;;;;;;;GAaC;AACH","sourcesContent":["@font-face {\n  font-family: \"titleFont\";\n  src: url(\"./assets/airstrike/airstrike.ttf\") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"gameSelect\";\n  src: url(\"./assets/top-secret/Top\\ Secret.ttf\") format(\"TrueType\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  font-family: titleFont;\n  background-color: #006494;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  font-size: 5rem;\n  margin: 0;\n}\n\n.main {\n  height: 100%;\n  background-color: #051923;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.gameSelectContainer {\n  font-family: Arial, Helvetica, sans-serif;\n  height: fit-content;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: #006494;\n  color: white;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.title {\n  padding: 10px;\n  margin: 0;\n}\n\n.gameSelectContainer > button {\n  font-family: gameSelect;\n  padding: 10px;\n  width: 80%;\n  font-size: 1.5rem;\n  color: white;\n  background-color: #00a6fb;\n  border-style: solid;\n  border-color: white;\n  border-radius: 5px;\n  border-width: 1px;\n}\n.gameSelectContainer > button:hover {\n  background-color: #0582ca;\n}\n\n.boardsContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr 3fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px;\n}\n\n.playerBoard {\n  background-color: #35fb38;\n  border-radius: 3px;\n  padding: 5px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n.computerBoard {\n  border-radius: 3px;\n  padding: 5px;\n  background-color: #fb3f35;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n}\nbutton:hover.waterBox {\n  background-color: red;\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.waterBox {\n  background-color: #051923;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: #003554;\n}\n.shipBox {\n  background-color: white;\n}\n\n.selectionBoard {\n  background-color: #006494;\n  border-radius: 3px;\n  padding: 5px;\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 8px;\n}\n\n.emptyBox,\n.tempShip,\n.invalidPossition {\n  border-style: none;\n  box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n}\n.emptyBox {\n  background-color: #00a6fb;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n\n.scoreboardContainer {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.playerScoreContainter {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.computerScoreContainter {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.scoreShip {\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n}\n.computerScoreContainter > .scoreShip {\n  justify-content: flex-end;\n}\n.shipToken {\n  background-color: beige;\n  width: 15%;\n  aspect-ratio: 1 / 1;\n}\n.hitToken {\n  background-color: red;\n}\n.sunkToken {\n  background-color: red;\n  clip-path: polygon(\n    20% 0%,\n    0% 20%,\n    42% 50%,\n    0% 80%,\n    20% 100%,\n    50% 58%,\n    80% 100%,\n    100% 80%,\n    59% 50%,\n    100% 20%,\n    80% 0%,\n    51% 40%\n  );\n}\n"],"sourceRoot":""}]);
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
  scoreboard.appendChild(playerScore);
  scoreboard.appendChild(computerScore);

  boardsContainer.append(playerBoard);
  boardsContainer.appendChild(scoreboard);
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
    if (j < board.length - 1 && board[i][count + 1] !== "W") {
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
    if (count >= board.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEZXOztBQUVwQztBQUNBLGdCQUFnQixzREFBUzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9CdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZ2FtZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9wbGF5ZXJQbGFjZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3NpbmdsZVBsYXllckRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZVNldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3VwZGF0ZUNvbXB1dGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlUGxheWVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlU2NvcmVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy92YWxpZFBvc3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29iamVjdHMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYWlyc3RyaWtlL2FpcnN0cmlrZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy90b3Atc2VjcmV0L1RvcCBTZWNyZXQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJnYW1lU2VsZWN0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxOTIzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVTZWxlY3RDb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLnRpdGxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5nYW1lU2VsZWN0Q29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lU2VsZWN0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2ZmI7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uZ2FtZVNlbGVjdENvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU4MmNhO1xcbn1cXG5cXG4uYm9hcmRzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVmYjM4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDhweDtcXG59XFxuLmNvbXB1dGVyQm9hcmQge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiM2YzNTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5jb21wdXRlckJvYXJkOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuYnV0dG9uOmhvdmVyLndhdGVyQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLndhdGVyQm94LFxcbi5oaXRCb3gsXFxuLnNoaXBCb3gsXFxuLm1pc3NCb3gge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ud2F0ZXJCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTkyMztcXG59XFxuLmhpdEJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5taXNzQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM1NTQ7XFxufVxcbi5zaGlwQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VsZWN0aW9uQm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5NDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogODAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5lbXB0eUJveCxcXG4udGVtcFNoaXAsXFxuLmludmFsaWRQb3NzaXRpb24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uZW1wdHlCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTZmYjtcXG59XFxuLnRlbXBTaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbi5pbnZhbGlkUG9zc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNjb3JlYm9hcmRDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ucGxheWVyU2NvcmVDb250YWludGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5jb21wdXRlclNjb3JlQ29udGFpbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uc2NvcmVTaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAycHg7XFxufVxcbi5jb21wdXRlclNjb3JlQ29udGFpbnRlciA+IC5zY29yZVNoaXAge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLnNoaXBUb2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gIHdpZHRoOiAxNSU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG4uaGl0VG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uc3Vua1Rva2VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMjAlIDAlLFxcbiAgICAwJSAyMCUsXFxuICAgIDQyJSA1MCUsXFxuICAgIDAlIDgwJSxcXG4gICAgMjAlIDEwMCUsXFxuICAgIDUwJSA1OCUsXFxuICAgIDgwJSAxMDAlLFxcbiAgICAxMDAlIDgwJSxcXG4gICAgNTklIDUwJSxcXG4gICAgMTAwJSAyMCUsXFxuICAgIDgwJSAwJSxcXG4gICAgNTElIDQwJVxcbiAgKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVz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ckI7Ozs7Ozs7Ozs7Ozs7R0FhQztBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0aXRsZUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2FpcnN0cmlrZS9haXJzdHJpa2UudHRmXFxcIikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImdhbWVTZWxlY3RcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL3RvcC1zZWNyZXQvVG9wXFxcXCBTZWNyZXQudHRmXFxcIikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDk0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTkyMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lU2VsZWN0Q29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDk0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ2FtZVNlbGVjdENvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogZ2FtZVNlbGVjdDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNmZiO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmdhbWVTZWxlY3RDb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1ODJjYTtcXG59XFxuXFxuLmJvYXJkc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1ZmIzODtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5jb21wdXRlckJvYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjNmMzU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvbXB1dGVyQm9hcmQgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbmJ1dHRvbjpob3Zlci53YXRlckJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi53YXRlckJveCxcXG4uaGl0Qm94LFxcbi5zaGlwQm94LFxcbi5taXNzQm94IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLndhdGVyQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTE5MjM7XFxufVxcbi5oaXRCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ubWlzc0JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNTU0O1xcbn1cXG4uc2hpcEJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlbGVjdGlvbkJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OTQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZW1wdHlCb3gsXFxuLnRlbXBTaGlwLFxcbi5pbnZhbGlkUG9zc2l0aW9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDNweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLmVtcHR5Qm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2ZmI7XFxufVxcbi50ZW1wU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uaW52YWxpZFBvc3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zY29yZWJvYXJkQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLnBsYXllclNjb3JlQ29udGFpbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uY29tcHV0ZXJTY29yZUNvbnRhaW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuLnNjb3JlU2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMnB4O1xcbn1cXG4uY29tcHV0ZXJTY29yZUNvbnRhaW50ZXIgPiAuc2NvcmVTaGlwIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5zaGlwVG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICB3aWR0aDogMTUlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuLmhpdFRva2VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnN1bmtUb2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDIwJSAwJSxcXG4gICAgMCUgMjAlLFxcbiAgICA0MiUgNTAlLFxcbiAgICAwJSA4MCUsXFxuICAgIDIwJSAxMDAlLFxcbiAgICA1MCUgNTglLFxcbiAgICA4MCUgMTAwJSxcXG4gICAgMTAwJSA4MCUsXFxuICAgIDU5JSA1MCUsXFxuICAgIDEwMCUgMjAlLFxcbiAgICA4MCUgMCUsXFxuICAgIDUxJSA0MCVcXG4gICk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkZWxldGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVNYWluQ29udGVudDtcbiIsImltcG9ydCBzaW5nbGVQbGF5ZXJHYW1lIGZyb20gXCIuL3NpbmdsZVBsYXllckdhbWVTZXR1cFwiO1xuaW1wb3J0IGRlbGV0ZU1haW5Db250ZW50IGZyb20gXCIuL2RlbGV0ZU1haW5Db250ZW50XCI7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZ2FtZVNlbGVjdCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZVNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdhbWVTZWxlY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RDb250YWluZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGdhbWUgdG8gYmVnaW5cIjtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBjb25zdCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgcGxheWVyXCI7XG4gIHNpbmdsZVBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ2FtZVNlbGVjdEJ1dHRvblwiKTtcbiAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlTWFpbkNvbnRlbnQoKTtcbiAgICBzaW5nbGVQbGF5ZXJHYW1lKDEwLCBbXSk7XG4gIH0pO1xuICBjb25zdCB0d29QbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0d29QbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJUd28gcGxheWVyXCI7XG4gIHR3b1BsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ2FtZVNlbGVjdEJ1dHRvblwiKTtcbiAgdHdvUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIGFsZXJ0KFwiaW4gcHJvZ3Jlc3NcIik7XG4gIH0pO1xuICBnYW1lU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVQbGF5ZXJCdXR0b24pO1xuICBnYW1lU2VsZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHR3b1BsYXllckJ1dHRvbik7XG4gIHJldHVybiBnYW1lU2VsZWN0Q29udGFpbmVyO1xufTtcblxuY29uc3QgZ2FtZU92ZXJTZWxlY3QgPSAod2lubmVyKSA9PiB7XG4gIGNvbnN0IGdhbWVTZWxlY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lU2VsZWN0Q29udGFpbmVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaWYgKHdpbm5lciA9PT0gXCJwbGF5ZXJcIikgdGl0bGUudGV4dENvbnRlbnQgPSBcIllvdSB3b24hIHBsYXkgYWdhaW4/XCI7XG4gIGVsc2UgdGl0bGUudGV4dENvbnRlbnQgPSBcIllvdSBsb3N0Li4uIHJlbWF0Y2g/XCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIHBsYXllclwiO1xuICBzaW5nbGVQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RCdXR0b25cIik7XG4gIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gICAgc2luZ2xlUGxheWVyR2FtZSgxMCwgW10pO1xuICB9KTtcbiAgY29uc3QgdHdvUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdHdvUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiVHdvIHBsYXllclwiO1xuICB0d29QbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RCdXR0b25cIik7XG4gIHR3b1BsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFRPRE9cbiAgICBhbGVydChcImluIHByb2dyZXNzXCIpO1xuICB9KTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGdhbWVTZWxlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2luZ2xlUGxheWVyQnV0dG9uKTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0d29QbGF5ZXJCdXR0b24pO1xuICByZXR1cm4gZ2FtZVNlbGVjdENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGdhbWVTZWxlY3QsIGdhbWVPdmVyU2VsZWN0IH07XG4iLCJpbXBvcnQgZGVsZXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4vZGVsZXRlTWFpbkNvbnRlbnRcIjtcbmltcG9ydCB7IHZhbGlkUG9zc2l0aW9uLCBhZGRUb0NsYXNzLCBhZGRUb0JvYXJkIH0gZnJvbSBcIi4vdmFsaWRQb3NzaXRpb25cIjtcbmltcG9ydCBzaW5nbGVQbGF5ZXJEaXNwbGF5IGZyb20gXCIuL3NpbmdsZVBsYXllckRpc3BsYXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL29iamVjdHMvcGxheWVyXCI7XG5cbmNvbnN0IHBsYXllclBsYWNlU2hpcHMgPSAoY29tcHV0ZXIsIHBsYXllciwgc2hpcFNpemVzKSA9PiB7XG4gIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgY29uc3Qgc2VsZWN0aW9uQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxlY3Rpb25Cb2FyZC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uQm9hcmRcIik7XG4gIHNlbGVjdGlvbkJvYXJkLmlkID0gXCJzZWxlY3Rpb25Cb2FyZFwiO1xuXG4gIGNvbnN0IHNoaXAgPSBzaGlwU2l6ZXMucG9wKCk7XG4gIC8vIGdlbmVyYXRlIGJvYXJkOlxuICAvLyBzaGlwU2l6ZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB0ZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN3aXRjaCAocGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdKSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlCb3hcIik7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aWxlc1RvUmVtb3ZlID1cbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICBpZiAodGlsZXNUb1JlbW92ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGlsZXNUb1JlbW92ZSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRlbXBTaGlwXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZXNUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZW1wU2hpcFwiKTtcbiAgICAgICAgICAgIGlmICh0aWxlc1RvUmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aWxlc1RvUmVtb3ZlKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcFNoaXBcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFBvc3NpdGlvblwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRQb3NzaXRpb24oaSwgaiwgcGxheWVyLmJvYXJkLmJvYXJkLCBzaGlwKSkge1xuICAgICAgICAgICAgICBjb25zdCBwb3NzdGlvbiA9IGkgKiAxMCArIGo7XG4gICAgICAgICAgICAgIGFkZFRvQ2xhc3MocG9zc3Rpb24sIHNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFBvc3NpdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0ZW1wQm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0ZW1wQm94LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBTaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgYWRkVG9Cb2FyZChpLCBqLCBwbGF5ZXIuYm9hcmQsIHNoaXApO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwU2l6ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgcGxheWVyUGxhY2VTaGlwcyhjb21wdXRlciwgcGxheWVyLCBzaGlwU2l6ZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzaW5nbGVQbGF5ZXJEaXNwbGF5KHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJzaGlwQm94XCIpO1xuICAgICAgfVxuICAgICAgc2VsZWN0aW9uQm9hcmQuYXBwZW5kQ2hpbGQodGVtcEJveCk7XG4gICAgfVxuICB9XG4gIC8vIH0pO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQm9hcmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyUGxhY2VTaGlwcztcbiIsImltcG9ydCBzaW5nbGVQbGF5ZXJHYW1lTG9vcCBmcm9tIFwiLi9zaW5nbGVQbGF5ZXJHYW1lTG9vcFwiO1xuXG5jb25zdCBzaW5nbGVQbGF5ZXJEaXNwbGF5ID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkc0NvbnRhaW5lclwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRcIik7XG4gIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXJCb2FyZFwiO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJCb2FyZFwiKTtcbiAgY29tcHV0ZXJCb2FyZC5pZCA9IFwiY29tcHV0ZXJCb2FyZFwiO1xuXG4gIHBsYXllci5ib2FyZC5ib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN3aXRjaCAoYm94KSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaGl0Qm94XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcIm1pc3NCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwic2hpcEJveFwiKTtcbiAgICAgIH1cbiAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRlbXBCb3gpO1xuICAgIH0pO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlci5ib2FyZC5ib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzd2l0Y2ggKGNvbXB1dGVyLmJvYXJkLmJvYXJkW2ldW2pdKSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBzaW5nbGVQbGF5ZXJHYW1lTG9vcChbaSwgal0sIHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJoaXRCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwibWlzc0JveFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJ3YXRlckJveFwiKTtcbiAgICAgICAgICB0ZW1wQm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHNpbmdsZVBsYXllckdhbWVMb29wKFtpLCBqXSwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZCh0ZW1wQm94KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzY29yZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2NvcmVib2FyZC5jbGFzc0xpc3QuYWRkKFwic2NvcmVib2FyZENvbnRhaW5lclwiKTtcbiAgY29uc3QgcGxheWVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJTY29yZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyU2NvcmVDb250YWludGVyXCIpO1xuICBwbGF5ZXJTY29yZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllclNjb3JlQ29udGFpbmVyXCIpO1xuICBjb25zdCBjb21wdXRlclNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbXB1dGVyU2NvcmVDb250YWluZXJcIik7XG4gIGNvbXB1dGVyU2NvcmUuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyU2NvcmVDb250YWludGVyXCIpO1xuXG4gIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc2NvcmVTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY29yZVNoaXAuY2xhc3NMaXN0LmFkZChcInNjb3JlU2hpcFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoIC0gc2hpcC5oaXRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBUb2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwVG9rZW4uY2xhc3NMaXN0LmFkZChcInNoaXBUb2tlblwiKTtcbiAgICAgIHNjb3JlU2hpcC5hcHBlbmRDaGlsZChzaGlwVG9rZW4pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0czsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwVG9rZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcFRva2VuLmNsYXNzTGlzdC5hZGQoXCJzaGlwVG9rZW5cIik7XG4gICAgICBzaGlwVG9rZW4uY2xhc3NMaXN0LmFkZChcImhpdFRva2VuXCIpO1xuICAgICAgc2NvcmVTaGlwLmFwcGVuZENoaWxkKHNoaXBUb2tlbik7XG4gICAgfVxuICAgIHBsYXllclNjb3JlLmFwcGVuZENoaWxkKHNjb3JlU2hpcCk7XG4gIH0pO1xuXG4gIGNvbXB1dGVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBzY29yZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjb3JlU2hpcC5jbGFzc0xpc3QuYWRkKFwic2NvcmVTaGlwXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGggLSBzaGlwLmhpdHM7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcFRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBUb2tlbi5jbGFzc0xpc3QuYWRkKFwic2hpcFRva2VuXCIpO1xuICAgICAgc2NvcmVTaGlwLmFwcGVuZENoaWxkKHNoaXBUb2tlbik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHNoaXBUb2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwVG9rZW4uY2xhc3NMaXN0LmFkZChcInNoaXBUb2tlblwiKTtcbiAgICAgIHNoaXBUb2tlbi5jbGFzc0xpc3QuYWRkKFwiaGl0VG9rZW5cIik7XG4gICAgICBzY29yZVNoaXAuYXBwZW5kQ2hpbGQoc2hpcFRva2VuKTtcbiAgICB9XG4gICAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzY29yZVNoaXApO1xuICB9KTtcbiAgc2NvcmVib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZSk7XG4gIHNjb3JlYm9hcmQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTY29yZSk7XG5cbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJCb2FyZCk7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZWJvYXJkKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZChjb21wdXRlckJvYXJkKTtcbiAgbWFpbi5hcHBlbmQoYm9hcmRzQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVBsYXllckRpc3BsYXk7XG4iLCJpbXBvcnQgdXBkYXRlUGxheWVyQm9hcmQgZnJvbSBcIi4vdXBkYXRlUGxheWVyQm9hcmRcIjtcbmltcG9ydCB1cGRhdGVDb21wdXRlckJvYXJkIGZyb20gXCIuL3VwZGF0ZUNvbXB1dGVyQm9hcmRcIjtcbmltcG9ydCB7XG4gIHVwZGF0ZVBsYXllcjFTY29yZWJvYXJkLFxuICB1cGRhdGVQbGF5ZXIyU2NvcmVib2FyZCxcbn0gZnJvbSBcIi4vdXBkYXRlU2NvcmVib2FyZFwiO1xuaW1wb3J0IHsgZ2FtZU92ZXJTZWxlY3QgfSBmcm9tIFwiLi9nYW1lU2VsZWN0XCI7XG5pbXBvcnQgZGVsZXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4vZGVsZXRlTWFpbkNvbnRlbnRcIjtcblxuY29uc3Qgc2luZ2xlUGxheWVyR2FtZUxvb3AgPSAoY29yZHMsIHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgLy8gcGxheWVyIGF0dGFja3NcbiAgY29uc3QgcGxheWVySGl0ID0gcGxheWVyLm1ha2VNb3ZlKGNvcmRzLCBjb21wdXRlci5ib2FyZCk7XG4gIHVwZGF0ZVBsYXllcjFTY29yZWJvYXJkKGNvbXB1dGVyKTtcbiAgdXBkYXRlQ29tcHV0ZXJCb2FyZChjb21wdXRlcik7XG4gIC8vIGNoZWNrIGlmIGdhbWUgb3ZlclxuICBpZiAoY29tcHV0ZXIuYm9hcmQuYWxsU2FuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICBkZWxldGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lT3ZlclNlbGVjdChcInBsYXllclwiKSk7XG4gIH1cblxuICBpZiAoIXBsYXllckhpdCkge1xuICAgIC8vIGNvbXB1dGVyIGF0dGFja3NcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKCFjb21wdXRlci5tYWtlUmFuZG9tTW92ZShwbGF5ZXIuYm9hcmQpKSB7XG4gICAgICAgIHVwZGF0ZVBsYXllcjJTY29yZWJvYXJkKHBsYXllcik7XG4gICAgICAgIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgIC8vIGNoZWNrIGlmIGdhbWUgb3ZlclxuICAgICAgaWYgKHBsYXllci5ib2FyZC5hbGxTYW5rKCkpIHtcbiAgICAgICAgZGVsZXRlTWFpbkNvbnRlbnQoKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lT3ZlclNlbGVjdChcImNvbXB1dGVyXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVBsYXllckdhbWVMb29wO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vb2JqZWN0cy9wbGF5ZXJcIjtcbmltcG9ydCBwbGF5ZXJQbGFjZVNoaXBzIGZyb20gXCIuL3BsYXllclBsYWNlU2hpcHNcIjtcblxuY29uc3Qgc2luZ2xlUGxheWVyR2FtZSA9IChib2FyZFdpZHRoLCBzaGlwU2l6ZXMpID0+IHtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKGJvYXJkV2lkdGgpO1xuICBjb25zdCBjb21wdXRlciA9IFBsYXllcihib2FyZFdpZHRoKTtcblxuICBjb25zdCBzaGlwQ29yZHMgPSBbXG4gICAgW1xuICAgICAgLy8gc2hpcCA3XG4gICAgICBbNSwgM10sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDhcbiAgICAgIFsxLCA1XSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgNFxuICAgICAgWzAsIDhdLFxuICAgICAgWzEsIDhdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCA1XG4gICAgICBbMiwgMF0sXG4gICAgICBbMywgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDJcbiAgICAgIFswLCAyXSxcbiAgICAgIFsxLCAyXSxcbiAgICAgIFsyLCAyXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgM1xuICAgICAgWzcsIDVdLFxuICAgICAgWzgsIDVdLFxuICAgICAgWzksIDVdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCAxXG4gICAgICBbOSwgMF0sXG4gICAgICBbOSwgMV0sXG4gICAgICBbOSwgMl0sXG4gICAgICBbOSwgM10sXG4gICAgXSxcbiAgICAvLyBbXG4gICAgLy8gICAvLyBzaGlwIDZcbiAgICAvLyAgIFs0LCA5XSxcbiAgICAvLyAgIFs1LCA5XSxcbiAgICAvLyBdLFxuICAgIC8vIFtcbiAgICAvLyAgIC8vIHNoaXAgOVxuICAgIC8vICAgWzUsIDddLFxuICAgIC8vIF0sXG4gICAgLy8gW1xuICAgIC8vICAgLy8gc2hpcCAxMFxuICAgIC8vICAgWzcsIDhdLFxuICAgIC8vIF0sXG4gIF07XG5cbiAgLy8gQ29tcHV0ZXIgcGxhY2VzIHNoaXBzXG4gIHNoaXBDb3Jkcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXApO1xuICB9KTtcblxuICBwbGF5ZXJQbGFjZVNoaXBzKGNvbXB1dGVyLCBwbGF5ZXIsIFs0LCAzLCAzLCAyLCAyLCAxLCAxXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGVQbGF5ZXJHYW1lO1xuIiwiY29uc3QgdXBkYXRlQ29tcHV0ZXJCb2FyZCA9IChjb21wdXRlcikgPT4ge1xuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJCb2FyZFwiKS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGkgLyAxMCk7XG4gICAgY29uc3QgeCA9IGkgJSAxMDtcbiAgICBjb25zdCBuZXdWYWwgPSBjb21wdXRlci5ib2FyZC5ib2FyZFt5XVt4XTtcbiAgICBjb25zdCBib3ggPSBib3hlc1tpXTtcbiAgICBib3guY2xhc3NOYW1lID0gXCJcIjtcbiAgICBzd2l0Y2ggKG5ld1ZhbCkge1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ3YXRlckJveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSFwiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpdEJveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm1pc3NCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ3YXRlckJveFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUNvbXB1dGVyQm9hcmQ7XG4iLCJjb25zdCB1cGRhdGVQbGF5ZXJCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllckJvYXJkXCIpLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDEwKTtcbiAgICBjb25zdCB4ID0gaSAlIDEwO1xuICAgIGNvbnN0IG5ld1ZhbCA9IHBsYXllci5ib2FyZC5ib2FyZFt5XVt4XTtcbiAgICBjb25zdCBib3ggPSBib3hlc1tpXTtcbiAgICBib3guY2xhc3NOYW1lID0gXCJcIjtcbiAgICBzd2l0Y2ggKG5ld1ZhbCkge1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ3YXRlckJveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSFwiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpdEJveFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm1pc3NCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaGlwQm94XCIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUGxheWVyQm9hcmQ7XG4iLCJjb25zdCB1cGRhdGVQbGF5ZXIxU2NvcmVib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3Qgc2NvcmVTaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJTY29yZUNvbnRhaW5lclwiKS5jaGlsZHJlbjtcbiAgbGV0IGNvdW50ID0gMDtcbiAgcGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwVG9rZW5zID0gc2NvcmVTaGlwc1tjb3VudF0uY2hpbGRyZW47XG4gICAgY291bnQrKztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0SGl0cygpOyBpKyspIHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHNoaXBUb2tlbnNbaV0uY2xhc3NMaXN0LmFkZChcInN1bmtUb2tlblwiKTtcbiAgICAgIH0gZWxzZSBzaGlwVG9rZW5zW2ldLmNsYXNzTGlzdC5hZGQoXCJoaXRUb2tlblwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdXBkYXRlUGxheWVyMlNjb3JlYm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHNjb3JlU2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllclNjb3JlQ29udGFpbmVyXCIpLmNoaWxkcmVuO1xuICBsZXQgY291bnQgPSAwO1xuICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBUb2tlbnMgPSBzY29yZVNoaXBzW2NvdW50XS5jaGlsZHJlbjtcbiAgICBjb3VudCsrO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRIaXRzKCk7IGkrKykge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc2hpcFRva2Vuc1tpXS5jbGFzc0xpc3QuYWRkKFwic3Vua1Rva2VuXCIpO1xuICAgICAgfSBlbHNlIHNoaXBUb2tlbnNbaV0uY2xhc3NMaXN0LmFkZChcImhpdFRva2VuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVQbGF5ZXIxU2NvcmVib2FyZCwgdXBkYXRlUGxheWVyMlNjb3JlYm9hcmQgfTtcbiIsImNvbnN0IHZhbGlkUG9zc2l0aW9uID0gKGksIGosIGJvYXJkLCBzaGlwTGVuZ3RoKSA9PiB7XG4gIGxldCBjb3VudCA9IGo7XG4gIGxldCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIGlmIChib2FyZFtpXVtjb3VudF0gIT09IFwiV1wiKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChqID4gMCAmJiBib2FyZFtpXVtjb3VudCAtIDFdICE9PSBcIldcIikge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaiA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgYm9hcmRbaV1bY291bnQgKyAxXSAhPT0gXCJXXCIpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGkgPiAwICYmIGJvYXJkW2kgLSAxXVtjb3VudF0gIT09IFwiV1wiKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChpIDwgYm9hcmQubGVuZ3RoIC0gMSAmJiBib2FyZFtpICsgMV1bY291bnRdICE9PSBcIldcIikge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoY291bnQgPj0gYm9hcmQubGVuZ3RoKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG4gICAgbGVuZ3RoLS07XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufTtcblxuY29uc3QgYWRkVG9DbGFzcyA9IChwb3NzaXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rpb25Cb2FyZFwiKS5jaGlsZHJlbjtcbiAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICB0aWxlc1twb3NzaXRpb25dLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wU2hpcFwiKTtcbiAgICBwb3NzaXRpb24rKztcbiAgICBsZW5ndGgtLTtcbiAgfVxufTtcblxuY29uc3QgYWRkVG9Cb2FyZCA9IChpLCBqLCBib2FyZCwgc2hpcExlbmd0aCkgPT4ge1xuICBsZXQgbGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgY29uc3Qgc2hpcCA9IFtdO1xuICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIHNoaXAucHVzaChbaSwgal0pO1xuICAgIGorKztcbiAgICBsZW5ndGgtLTtcbiAgfVxuICBib2FyZC5wbGFjZVNoaXAoc2hpcCk7XG59O1xuXG5leHBvcnQgeyB2YWxpZFBvc3NpdGlvbiwgYWRkVG9DbGFzcywgYWRkVG9Cb2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZVNlbGVjdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9nYW1lU2VsZWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluLmlkID0gXCJtYWluXCI7XG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xubWFpbi5hcHBlbmRDaGlsZChnYW1lU2VsZWN0KCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICh3aWR0aCkgPT4ge1xuICAvLyBDcmVhdGUgb25lIGRpbWVuc2lvbmFsIGFycmF5XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KHdpZHRoKTtcbiAgLy8gTG9vcCB0byBjcmVhdGUgMkQgYm9hcmQgYXJyYXkgdXNpbmcgMUQgYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KHdpZHRoKTtcbiAgfVxuICAvLyBpbnRpYWxpemUgYm9hcmQgd2l0aCBhbGwgVyBmb3Igd2F0ZXJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IFwiV1wiO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChib3hDb3JkcykgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGJveENvcmRzLmxlbmd0aCk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICBib3hDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9IHNoaXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb3JkKSA9PiB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuICAgIGlmIChib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9PT0gXCJXXCIpIGJvYXJkW2NvcmRbMF1dW2NvcmRbMV1dID0gXCJNXCI7XG4gICAgZWxzZSB7XG4gICAgICByZXQgPSB0cnVlO1xuICAgICAgYm9hcmRbY29yZFswXV1bY29yZFsxXV0uaGl0KCk7XG4gICAgICBpZiAoYm9hcmRbY29yZFswXV1bY29yZFsxXV0uaXNTdW5rKCkpIHtcbiAgICAgICAgYm9hcmRbY29yZFswXV1bY29yZFsxXV0gPSBcIkhcIjtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICAgICAgcXVldWUucHVzaChjb3JkKTtcbiAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICAgIGlmIChib2FyZFt0ZW1wWzBdXVt0ZW1wWzFdXSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0ZW1wWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IHRlbXBbMV07XG4gICAgICAgICAgICBpZiAoeSA+IDAgJiYgIXNldC5oYXMoW3kgLSAxLCB4XS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5IC0gMSwgeF0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3kgLSAxLCB4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgIXNldC5oYXMoW3kgKyAxLCB4XS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5ICsgMSwgeF0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3kgKyAxLCB4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCA+IDAgJiYgIXNldC5oYXMoW3ksIHggLSAxXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5LCB4IC0gMV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3ksIHggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgIXNldC5oYXMoW3ksIHggKyAxXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5LCB4ICsgMV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3ksIHggKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3RlbXBbMF1dW3RlbXBbMV1dID0gXCJNXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFNhbmsgPSAoKSA9PiB7XG4gICAgbGV0IHJldCA9IHRydWU7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgYWxsU2FuayxcbiAgICBib2FyZCxcbiAgICBzaGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICh3aWR0aCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCh3aWR0aCk7XG5cbiAgY29uc3QgbWFrZU1vdmUgPSAoY29yZCwgZW5lbXlCb2FyZCkgPT4ge1xuICAgIGNvbnN0IHJldCA9IGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcbiAgICB3aGlsZSAoZW5lbXlCb2FyZC5ib2FyZFt5XVt4XSA9PT0gXCJIXCIgfHwgZW5lbXlCb2FyZC5ib2FyZFt5XVt4XSA9PT0gXCJNXCIpIHtcbiAgICAgIGlmICgoeCArIDEpIC8gd2lkdGggPT09IDEpIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICAgIGlmICgoeSArIDEpIC8gd2lkdGggPT09IDEpIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhbeSwgeF0pO1xuICB9O1xuXG4gIHJldHVybiB7IG1ha2VNb3ZlLCBtYWtlUmFuZG9tTW92ZSwgYm9hcmQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBoaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBsZW5ndGggPT09IGhpdHM7XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaGl0cyxcbiAgICBnZXRIaXRzLFxuICAgIGlzU3VuayxcbiAgICBsZW5ndGgsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9