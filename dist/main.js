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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_GameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GameLogic */ \"./src/modules/GameLogic.js\");\n\n\n_modules_GameLogic__WEBPACK_IMPORTED_MODULE_0__.default.game;\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/index.js?");

/***/ }),

/***/ "./src/modules/GameLogic.js":
/*!**********************************!*\
  !*** ./src/modules/GameLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst GameLogic = (() => {\n  function preload() {\n    this.load.image(\n      'bug1',\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png',\n    );\n    this.load.image(\n      'bug2',\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png',\n    );\n    this.load.image(\n      'bug3',\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png',\n    );\n    this.load.image(\n      'platform',\n      'https://content.codecademy.com/courses/learn-phaser/physics/platform.png',\n    );\n    this.load.image(\n      'codey',\n      'https://content.codecademy.com/courses/learn-phaser/physics/codey.png',\n    );\n  }\n\n  const gameState = {};\n\n  function create() {\n    // Add your code below:\n    gameState.player = this.physics.add.sprite(150, 70, 'codey');\n\n    const platforms = this.physics.add.staticGroup();\n    platforms.create(225, 510, 'platform');\n\n    gameState.player.setCollideWorldBounds(true);\n    this.physics.add.collider(gameState.player, platforms);\n  }\n\n  function update() {}\n\n  const config = {\n    type: Phaser.AUTO,\n    width: 450,\n    height: 500,\n    backgroundColor: 'b9eaff',\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: { y: 200 },\n        enableBody: true,\n        // debug: true,\n      },\n    },\n    scene: {\n      preload,\n      create,\n      update,\n    },\n  };\n\n  const game = new Phaser.Game(config);\n\n  return { game };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLogic);\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/modules/GameLogic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;