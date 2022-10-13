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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  background-color: black;\n  color: white;\n  padding: 15px;\n  text-align: center;\n}\n\n.main {\n  height: 100%;\n  background-color: navy;\n  display: flex;\n  justify-content: space-around;\n}\n\n.gameSelectContainer {\n  margin: 20%;\n  background-color: grey;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.boardsContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px;\n}\n\n.playerBoard {\n  background-color: grey;\n  border-style: solid;\n  border-width: 5px;\n  border-color: grey;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n.computerBoard {\n  background-color: grey;\n  border-style: solid;\n  border-width: 5px;\n  border-color: grey;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n  border-style: solid;\n}\nbutton:hover.waterBox {\n  z-index: 2;\n  border-style: solid;\n  border-width: 5px;\n  border-color: red;\n  outline-style: solid;\n  outline-width: 5px;\n  outline-color: red;\n  background-color: red;\n  clip-path: polygon(\n    40% 24%,\n    23% 41%,\n    43% 48%,\n    22% 59%,\n    36% 73%,\n    49% 59%,\n    59% 71%,\n    73% 57%,\n    56% 48%,\n    72% 38%,\n    59% 26%,\n    49% 39%\n  );\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-width: 5px;\n  border-color: grey;\n  border-style: solid;\n}\n.waterBox {\n  background-color: white;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: darkblue;\n}\n.shipBox {\n  background-color: black;\n  border-color: black;\n}\n\n.selectionBoard {\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 5px;\n}\n\n.emptyBox {\n  background-color: blue;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;AACxC;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB;;;;;;;;;;;;;GAaC;AACH;;AAEA;;;;EAIE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,QAAQ;AACV;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,qBAAqB;AACvB","sourcesContent":["body,\nhtml {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.header {\n  background-color: black;\n  color: white;\n  padding: 15px;\n  text-align: center;\n}\n\n.main {\n  height: 100%;\n  background-color: navy;\n  display: flex;\n  justify-content: space-around;\n}\n\n.gameSelectContainer {\n  margin: 20%;\n  background-color: grey;\n  outline-style: solid;\n  outline-color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.boardsContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-content: space-between;\n  width: 80%;\n  height: 100%;\n  gap: 30px;\n}\n\n.playerBoard {\n  background-color: grey;\n  border-style: solid;\n  border-width: 5px;\n  border-color: grey;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n.computerBoard {\n  background-color: grey;\n  border-style: solid;\n  border-width: 5px;\n  border-color: grey;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.computerBoard:hover {\n  cursor: crosshair;\n}\n\n.computerBoard > button {\n  cursor: crosshair;\n  border-style: solid;\n}\nbutton:hover.waterBox {\n  z-index: 2;\n  border-style: solid;\n  border-width: 5px;\n  border-color: red;\n  outline-style: solid;\n  outline-width: 5px;\n  outline-color: red;\n  background-color: red;\n  clip-path: polygon(\n    40% 24%,\n    23% 41%,\n    43% 48%,\n    22% 59%,\n    36% 73%,\n    49% 59%,\n    59% 71%,\n    73% 57%,\n    56% 48%,\n    72% 38%,\n    59% 26%,\n    49% 39%\n  );\n}\n\n.waterBox,\n.hitBox,\n.shipBox,\n.missBox {\n  border-width: 5px;\n  border-color: grey;\n  border-style: solid;\n}\n.waterBox {\n  background-color: white;\n}\n.hitBox {\n  background-color: red;\n}\n.missBox {\n  background-color: darkblue;\n}\n.shipBox {\n  background-color: black;\n  border-color: black;\n}\n\n.selectionBoard {\n  height: 80%;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 5px;\n}\n\n.emptyBox {\n  background-color: blue;\n}\n.tempShip {\n  background-color: lightgreen;\n}\n.invalidPossition {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _singlePlayerGameSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singlePlayerGameSetup */ "./src/functions/singlePlayerGameSetup.js");
/* harmony import */ var _deleteMainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteMainContent */ "./src/functions/deleteMainContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");




const gameSelect = () => {
  const gameSelectContainer = document.createElement("div");
  gameSelectContainer.classList.add("gameSelectContainer");
  const singlePlayerButton = document.createElement("button");
  singlePlayerButton.innerHTML = "Single player";
  singlePlayerButton.classList.add("gameSelectButton");
  singlePlayerButton.addEventListener("click", () => {
    (0,_deleteMainContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_singlePlayerGameSetup__WEBPACK_IMPORTED_MODULE_0__["default"])(10, []);
  });
  gameSelectContainer.appendChild(singlePlayerButton);
  return gameSelectContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameSelect);


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

  boardsContainer.append(playerBoard);
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



const singlePlayerGameLoop = (cords, player, computer) => {
  // player attacks
  const playerHit = player.makeMove(cords, computer.board);
  (0,_updateComputerBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);
  // check if game over
  if (computer.board.allSank()) {
    alert("game over, player won");
  }

  if (!playerHit) {
    // computer attacks
    while (true) {
      if (!computer.makeRandomMove(player.board)) {
        (0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
        break;
      }
      (0,_updatePlayerBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(player);
      // check if game over
      if (player.board.allSank()) {
        alert("game Over, computer won");
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
      // ship 1
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
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
      // ship 6
      [4, 9],
      [5, 9],
    ],
    [
      // ship 7
      [5, 3],
    ],
    [
      // ship 8
      [1, 5],
    ],
    [
      // ship 9
      [5, 7],
    ],
    [
      // ship 10
      [7, 8],
    ],
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
main.appendChild((0,_functions_gameSelect__WEBPACK_IMPORTED_MODULE_0__["default"])());
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

  return { hit, hits, isSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGVzs7QUFFcEM7QUFDQSxnQkFBZ0Isc0RBQVM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvQnRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZGVsZXRlTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvZ2FtZVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9wbGF5ZXJQbGFjZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3NpbmdsZVBsYXllckRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvc2luZ2xlUGxheWVyR2FtZVNldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL3VwZGF0ZUNvbXB1dGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlUGxheWVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mdW5jdGlvbnMvdmFsaWRQb3NzaXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29iamVjdHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ2FtZVNlbGVjdENvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ib2FyZHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uY29tcHV0ZXJCb2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jb21wdXRlckJvYXJkOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbmJ1dHRvbjpob3Zlci53YXRlckJveCB7XFxuICB6LWluZGV4OiAyO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmUtd2lkdGg6IDVweDtcXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgNDAlIDI0JSxcXG4gICAgMjMlIDQxJSxcXG4gICAgNDMlIDQ4JSxcXG4gICAgMjIlIDU5JSxcXG4gICAgMzYlIDczJSxcXG4gICAgNDklIDU5JSxcXG4gICAgNTklIDcxJSxcXG4gICAgNzMlIDU3JSxcXG4gICAgNTYlIDQ4JSxcXG4gICAgNzIlIDM4JSxcXG4gICAgNTklIDI2JSxcXG4gICAgNDklIDM5JVxcbiAgKTtcXG59XFxuXFxuLndhdGVyQm94LFxcbi5oaXRCb3gsXFxuLnNoaXBCb3gsXFxuLm1pc3NCb3gge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ud2F0ZXJCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5oaXRCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4ubWlzc0JveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuLnNoaXBCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2VsZWN0aW9uQm9hcmQge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmVtcHR5Qm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi50ZW1wU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uaW52YWxpZFBvc3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckI7Ozs7Ozs7Ozs7Ozs7R0FhQztBQUNIOztBQUVBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSxcXG5odG1sIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmdhbWVTZWxlY3RDb250YWluZXIge1xcbiAgbWFyZ2luOiAyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm9hcmRzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLnBsYXllckJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmNvbXB1dGVyQm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY29tcHV0ZXJCb2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvbXB1dGVyQm9hcmQgPiBidXR0b24ge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5idXR0b246aG92ZXIud2F0ZXJCb3gge1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxuICBvdXRsaW5lLXdpZHRoOiA1cHg7XFxuICBvdXRsaW5lLWNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDQwJSAyNCUsXFxuICAgIDIzJSA0MSUsXFxuICAgIDQzJSA0OCUsXFxuICAgIDIyJSA1OSUsXFxuICAgIDM2JSA3MyUsXFxuICAgIDQ5JSA1OSUsXFxuICAgIDU5JSA3MSUsXFxuICAgIDczJSA1NyUsXFxuICAgIDU2JSA0OCUsXFxuICAgIDcyJSAzOCUsXFxuICAgIDU5JSAyNiUsXFxuICAgIDQ5JSAzOSVcXG4gICk7XFxufVxcblxcbi53YXRlckJveCxcXG4uaGl0Qm94LFxcbi5zaGlwQm94LFxcbi5taXNzQm94IHtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLndhdGVyQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uaGl0Qm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLm1pc3NCb3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcbi5zaGlwQm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNlbGVjdGlvbkJvYXJkIHtcXG4gIGhlaWdodDogODAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5lbXB0eUJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4udGVtcFNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuLmludmFsaWRQb3NzaXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRlbGV0ZU1haW5Db250ZW50ID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZU1haW5Db250ZW50O1xuIiwiaW1wb3J0IHNpbmdsZVBsYXllckdhbWUgZnJvbSBcIi4vc2luZ2xlUGxheWVyR2FtZVNldHVwXCI7XG5pbXBvcnQgZGVsZXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4vZGVsZXRlTWFpbkNvbnRlbnRcIjtcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBnYW1lU2VsZWN0ID0gKCkgPT4ge1xuICBjb25zdCBnYW1lU2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2FtZVNlbGVjdENvbnRhaW5lclwiKTtcbiAgY29uc3Qgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIHBsYXllclwiO1xuICBzaW5nbGVQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImdhbWVTZWxlY3RCdXR0b25cIik7XG4gIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gICAgc2luZ2xlUGxheWVyR2FtZSgxMCwgW10pO1xuICB9KTtcbiAgZ2FtZVNlbGVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzaW5nbGVQbGF5ZXJCdXR0b24pO1xuICByZXR1cm4gZ2FtZVNlbGVjdENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVTZWxlY3Q7XG4iLCJpbXBvcnQgZGVsZXRlTWFpbkNvbnRlbnQgZnJvbSBcIi4vZGVsZXRlTWFpbkNvbnRlbnRcIjtcbmltcG9ydCB7IHZhbGlkUG9zc2l0aW9uLCBhZGRUb0NsYXNzLCBhZGRUb0JvYXJkIH0gZnJvbSBcIi4vdmFsaWRQb3NzaXRpb25cIjtcbmltcG9ydCBzaW5nbGVQbGF5ZXJEaXNwbGF5IGZyb20gXCIuL3NpbmdsZVBsYXllckRpc3BsYXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL29iamVjdHMvcGxheWVyXCI7XG5cbmNvbnN0IHBsYXllclBsYWNlU2hpcHMgPSAoY29tcHV0ZXIsIHBsYXllciwgc2hpcFNpemVzKSA9PiB7XG4gIGRlbGV0ZU1haW5Db250ZW50KCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgY29uc3Qgc2VsZWN0aW9uQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxlY3Rpb25Cb2FyZC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0aW9uQm9hcmRcIik7XG4gIHNlbGVjdGlvbkJvYXJkLmlkID0gXCJzZWxlY3Rpb25Cb2FyZFwiO1xuXG4gIGNvbnN0IHNoaXAgPSBzaGlwU2l6ZXMucG9wKCk7XG4gIC8vIGdlbmVyYXRlIGJvYXJkOlxuICAvLyBzaGlwU2l6ZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCB0ZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN3aXRjaCAocGxheWVyLmJvYXJkLmJvYXJkW2ldW2pdKSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlCb3hcIik7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aWxlc1RvUmVtb3ZlID1cbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICBpZiAodGlsZXNUb1JlbW92ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIEFycmF5LmZyb20odGlsZXNUb1JlbW92ZSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRlbXBTaGlwXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRQb3NzaXRpb25cIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZXNUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZW1wU2hpcFwiKTtcbiAgICAgICAgICAgIGlmICh0aWxlc1RvUmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aWxlc1RvUmVtb3ZlKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGVtcFNoaXBcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFBvc3NpdGlvblwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRQb3NzaXRpb24oaSwgaiwgcGxheWVyLmJvYXJkLmJvYXJkLCBzaGlwKSkge1xuICAgICAgICAgICAgICBjb25zdCBwb3NzdGlvbiA9IGkgKiAxMCArIGo7XG4gICAgICAgICAgICAgIGFkZFRvQ2xhc3MocG9zc3Rpb24sIHNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFBvc3NpdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0ZW1wQm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0ZW1wQm94LmNsYXNzTGlzdC5jb250YWlucyhcInRlbXBTaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgYWRkVG9Cb2FyZChpLCBqLCBwbGF5ZXIuYm9hcmQsIHNoaXApO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwU2l6ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgcGxheWVyUGxhY2VTaGlwcyhjb21wdXRlciwgcGxheWVyLCBzaGlwU2l6ZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzaW5nbGVQbGF5ZXJEaXNwbGF5KHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJzaGlwQm94XCIpO1xuICAgICAgfVxuICAgICAgc2VsZWN0aW9uQm9hcmQuYXBwZW5kQ2hpbGQodGVtcEJveCk7XG4gICAgfVxuICB9XG4gIC8vIH0pO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQm9hcmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyUGxhY2VTaGlwcztcbiIsImltcG9ydCBzaW5nbGVQbGF5ZXJHYW1lTG9vcCBmcm9tIFwiLi9zaW5nbGVQbGF5ZXJHYW1lTG9vcFwiO1xuXG5jb25zdCBzaW5nbGVQbGF5ZXJEaXNwbGF5ID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkc0NvbnRhaW5lclwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRcIik7XG4gIHBsYXllckJvYXJkLmlkID0gXCJwbGF5ZXJCb2FyZFwiO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJCb2FyZFwiKTtcbiAgY29tcHV0ZXJCb2FyZC5pZCA9IFwiY29tcHV0ZXJCb2FyZFwiO1xuXG4gIHBsYXllci5ib2FyZC5ib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN3aXRjaCAoYm94KSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwiaGl0Qm94XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHRlbXBCb3guY2xhc3NMaXN0LmFkZChcIm1pc3NCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwic2hpcEJveFwiKTtcbiAgICAgIH1cbiAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHRlbXBCb3gpO1xuICAgIH0pO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlci5ib2FyZC5ib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzd2l0Y2ggKGNvbXB1dGVyLmJvYXJkLmJvYXJkW2ldW2pdKSB7XG4gICAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgICAgdGVtcEJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBzaW5nbGVQbGF5ZXJHYW1lTG9vcChbaSwgal0sIHBsYXllciwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJoaXRCb3hcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgdGVtcEJveC5jbGFzc0xpc3QuYWRkKFwibWlzc0JveFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZW1wQm94LmNsYXNzTGlzdC5hZGQoXCJ3YXRlckJveFwiKTtcbiAgICAgICAgICB0ZW1wQm94LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHNpbmdsZVBsYXllckdhbWVMb29wKFtpLCBqXSwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZCh0ZW1wQm94KTtcbiAgICB9XG4gIH1cblxuICBib2FyZHNDb250YWluZXIuYXBwZW5kKHBsYXllckJvYXJkKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZChjb21wdXRlckJvYXJkKTtcbiAgbWFpbi5hcHBlbmQoYm9hcmRzQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZVBsYXllckRpc3BsYXk7XG4iLCJpbXBvcnQgdXBkYXRlUGxheWVyQm9hcmQgZnJvbSBcIi4vdXBkYXRlUGxheWVyQm9hcmRcIjtcbmltcG9ydCB1cGRhdGVDb21wdXRlckJvYXJkIGZyb20gXCIuL3VwZGF0ZUNvbXB1dGVyQm9hcmRcIjtcblxuY29uc3Qgc2luZ2xlUGxheWVyR2FtZUxvb3AgPSAoY29yZHMsIHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgLy8gcGxheWVyIGF0dGFja3NcbiAgY29uc3QgcGxheWVySGl0ID0gcGxheWVyLm1ha2VNb3ZlKGNvcmRzLCBjb21wdXRlci5ib2FyZCk7XG4gIHVwZGF0ZUNvbXB1dGVyQm9hcmQoY29tcHV0ZXIpO1xuICAvLyBjaGVjayBpZiBnYW1lIG92ZXJcbiAgaWYgKGNvbXB1dGVyLmJvYXJkLmFsbFNhbmsoKSkge1xuICAgIGFsZXJ0KFwiZ2FtZSBvdmVyLCBwbGF5ZXIgd29uXCIpO1xuICB9XG5cbiAgaWYgKCFwbGF5ZXJIaXQpIHtcbiAgICAvLyBjb21wdXRlciBhdHRhY2tzXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICghY29tcHV0ZXIubWFrZVJhbmRvbU1vdmUocGxheWVyLmJvYXJkKSkge1xuICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAvLyBjaGVjayBpZiBnYW1lIG92ZXJcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYWxsU2FuaygpKSB7XG4gICAgICAgIGFsZXJ0KFwiZ2FtZSBPdmVyLCBjb21wdXRlciB3b25cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGVQbGF5ZXJHYW1lTG9vcDtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL29iamVjdHMvcGxheWVyXCI7XG5pbXBvcnQgcGxheWVyUGxhY2VTaGlwcyBmcm9tIFwiLi9wbGF5ZXJQbGFjZVNoaXBzXCI7XG5cbmNvbnN0IHNpbmdsZVBsYXllckdhbWUgPSAoYm9hcmRXaWR0aCwgc2hpcFNpemVzKSA9PiB7XG4gIGNvbnN0IHBsYXllciA9IFBsYXllcihib2FyZFdpZHRoKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoYm9hcmRXaWR0aCk7XG5cbiAgY29uc3Qgc2hpcENvcmRzID0gW1xuICAgIFtcbiAgICAgIC8vIHNoaXAgMVxuICAgICAgWzksIDBdLFxuICAgICAgWzksIDFdLFxuICAgICAgWzksIDJdLFxuICAgICAgWzksIDNdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCAyXG4gICAgICBbMCwgMl0sXG4gICAgICBbMSwgMl0sXG4gICAgICBbMiwgMl0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDNcbiAgICAgIFs3LCA1XSxcbiAgICAgIFs4LCA1XSxcbiAgICAgIFs5LCA1XSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgNFxuICAgICAgWzAsIDhdLFxuICAgICAgWzEsIDhdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCA1XG4gICAgICBbMiwgMF0sXG4gICAgICBbMywgMF0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDZcbiAgICAgIFs0LCA5XSxcbiAgICAgIFs1LCA5XSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgN1xuICAgICAgWzUsIDNdLFxuICAgIF0sXG4gICAgW1xuICAgICAgLy8gc2hpcCA4XG4gICAgICBbMSwgNV0sXG4gICAgXSxcbiAgICBbXG4gICAgICAvLyBzaGlwIDlcbiAgICAgIFs1LCA3XSxcbiAgICBdLFxuICAgIFtcbiAgICAgIC8vIHNoaXAgMTBcbiAgICAgIFs3LCA4XSxcbiAgICBdLFxuICBdO1xuXG4gIC8vIENvbXB1dGVyIHBsYWNlcyBzaGlwc1xuICBzaGlwQ29yZHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfSk7XG5cbiAgcGxheWVyUGxhY2VTaGlwcyhjb21wdXRlciwgcGxheWVyLCBbNCwgMywgMywgMiwgMiwgMSwgMV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2luZ2xlUGxheWVyR2FtZTtcbiIsImNvbnN0IHVwZGF0ZUNvbXB1dGVyQm9hcmQgPSAoY29tcHV0ZXIpID0+IHtcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyQm9hcmRcIikuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gMTApO1xuICAgIGNvbnN0IHggPSBpICUgMTA7XG4gICAgY29uc3QgbmV3VmFsID0gY29tcHV0ZXIuYm9hcmQuYm9hcmRbeV1beF07XG4gICAgY29uc3QgYm94ID0gYm94ZXNbaV07XG4gICAgYm94LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgc3dpdGNoIChuZXdWYWwpIHtcbiAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaXRCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJtaXNzQm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDb21wdXRlckJvYXJkO1xuIiwiY29uc3QgdXBkYXRlUGxheWVyQm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJCb2FyZFwiKS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGkgLyAxMCk7XG4gICAgY29uc3QgeCA9IGkgJSAxMDtcbiAgICBjb25zdCBuZXdWYWwgPSBwbGF5ZXIuYm9hcmQuYm9hcmRbeV1beF07XG4gICAgY29uc3QgYm94ID0gYm94ZXNbaV07XG4gICAgYm94LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgc3dpdGNoIChuZXdWYWwpIHtcbiAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwid2F0ZXJCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaXRCb3hcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJtaXNzQm94XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hpcEJveFwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVBsYXllckJvYXJkO1xuIiwiY29uc3QgdmFsaWRQb3NzaXRpb24gPSAoaSwgaiwgYm9hcmQsIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IGNvdW50ID0gajtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgaWYgKGJvYXJkW2ldW2NvdW50XSAhPT0gXCJXXCIpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGNvdW50ID49IGJvYXJkLmxlbmd0aCkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCsrO1xuICAgIGxlbmd0aC0tO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG5cbmNvbnN0IGFkZFRvQ2xhc3MgPSAocG9zc2l0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gIGxldCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0aW9uQm9hcmRcIikuY2hpbGRyZW47XG4gIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgdGlsZXNbcG9zc2l0aW9uXS5jbGFzc0xpc3QuYWRkKFwidGVtcFNoaXBcIik7XG4gICAgcG9zc2l0aW9uKys7XG4gICAgbGVuZ3RoLS07XG4gIH1cbn07XG5cbmNvbnN0IGFkZFRvQm9hcmQgPSAoaSwgaiwgYm9hcmQsIHNoaXBMZW5ndGgpID0+IHtcbiAgbGV0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG4gIGNvbnN0IHNoaXAgPSBbXTtcbiAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICBzaGlwLnB1c2goW2ksIGpdKTtcbiAgICBqKys7XG4gICAgbGVuZ3RoLS07XG4gIH1cbiAgYm9hcmQucGxhY2VTaGlwKHNoaXApO1xufTtcblxuZXhwb3J0IHsgdmFsaWRQb3NzaXRpb24sIGFkZFRvQ2xhc3MsIGFkZFRvQm9hcmQgfTtcbiIsImltcG9ydCBnYW1lU2VsZWN0IGZyb20gXCIuL2Z1bmN0aW9ucy9nYW1lU2VsZWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluLmlkID0gXCJtYWluXCI7XG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xubWFpbi5hcHBlbmRDaGlsZChnYW1lU2VsZWN0KCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICh3aWR0aCkgPT4ge1xuICAvLyBDcmVhdGUgb25lIGRpbWVuc2lvbmFsIGFycmF5XG4gIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KHdpZHRoKTtcbiAgLy8gTG9vcCB0byBjcmVhdGUgMkQgYm9hcmQgYXJyYXkgdXNpbmcgMUQgYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KHdpZHRoKTtcbiAgfVxuICAvLyBpbnRpYWxpemUgYm9hcmQgd2l0aCBhbGwgVyBmb3Igd2F0ZXJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IFwiV1wiO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChib3hDb3JkcykgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGJveENvcmRzLmxlbmd0aCk7XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICBib3hDb3Jkcy5mb3JFYWNoKChjb3JkKSA9PiB7XG4gICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9IHNoaXA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb3JkKSA9PiB7XG4gICAgbGV0IHJldCA9IGZhbHNlO1xuICAgIGlmIChib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9PT0gXCJXXCIpIGJvYXJkW2NvcmRbMF1dW2NvcmRbMV1dID0gXCJNXCI7XG4gICAgZWxzZSB7XG4gICAgICByZXQgPSB0cnVlO1xuICAgICAgYm9hcmRbY29yZFswXV1bY29yZFsxXV0uaGl0KCk7XG4gICAgICBpZiAoYm9hcmRbY29yZFswXV1bY29yZFsxXV0uaXNTdW5rKCkpIHtcbiAgICAgICAgYm9hcmRbY29yZFswXV1bY29yZFsxXV0gPSBcIkhcIjtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICAgICAgcXVldWUucHVzaChjb3JkKTtcbiAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICAgIGlmIChib2FyZFt0ZW1wWzBdXVt0ZW1wWzFdXSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSB0ZW1wWzBdO1xuICAgICAgICAgICAgY29uc3QgeCA9IHRlbXBbMV07XG4gICAgICAgICAgICBpZiAoeSA+IDAgJiYgIXNldC5oYXMoW3kgLSAxLCB4XS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5IC0gMSwgeF0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3kgLSAxLCB4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgIXNldC5oYXMoW3kgKyAxLCB4XS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5ICsgMSwgeF0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3kgKyAxLCB4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCA+IDAgJiYgIXNldC5oYXMoW3ksIHggLSAxXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5LCB4IC0gMV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3ksIHggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeCA8IGJvYXJkLmxlbmd0aCAtIDEgJiYgIXNldC5oYXMoW3ksIHggKyAxXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICBzZXQuYWRkKFt5LCB4ICsgMV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgIHF1ZXVlLnB1c2goW3ksIHggKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3RlbXBbMF1dW3RlbXBbMV1dID0gXCJNXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZFtjb3JkWzBdXVtjb3JkWzFdXSA9IFwiSFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFNhbmsgPSAoKSA9PiB7XG4gICAgbGV0IHJldCA9IHRydWU7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgYWxsU2FuayxcbiAgICBib2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICh3aWR0aCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCh3aWR0aCk7XG5cbiAgY29uc3QgbWFrZU1vdmUgPSAoY29yZCwgZW5lbXlCb2FyZCkgPT4ge1xuICAgIGNvbnN0IHJldCA9IGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhjb3JkKTtcbiAgICBjb25zb2xlLmxvZyhyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcbiAgICB3aGlsZSAoZW5lbXlCb2FyZC5ib2FyZFt5XVt4XSA9PT0gXCJIXCIgfHwgZW5lbXlCb2FyZC5ib2FyZFt5XVt4XSA9PT0gXCJNXCIpIHtcbiAgICAgIGlmICgoeCArIDEpIC8gd2lkdGggPT09IDEpIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICAgIGlmICgoeSArIDEpIC8gd2lkdGggPT09IDEpIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjaWV2ZUF0dGFjayhbeSwgeF0pO1xuICB9O1xuXG4gIHJldHVybiB7IG1ha2VNb3ZlLCBtYWtlUmFuZG9tTW92ZSwgYm9hcmQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGxldCBoaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBsZW5ndGggPT09IGhpdHM7XG5cbiAgcmV0dXJuIHsgaGl0LCBoaXRzLCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=