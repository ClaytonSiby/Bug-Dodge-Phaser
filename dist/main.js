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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_GameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/GameLogic */ \"./src/modules/GameLogic.js\");\n\r\n\r\n_modules_GameLogic__WEBPACK_IMPORTED_MODULE_0__.default.game();\r\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/index.js?");

/***/ }),

/***/ "./src/modules/EndScene.js":
/*!*********************************!*\
  !*** ./src/modules/EndScene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _GameScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameScene */ \"./src/modules/GameScene.js\");\n\r\n\r\nclass EndScene extends Phaser.Scene {\r\n  constructor () {\r\n    super({ key: 'EndScene' })\r\n  }\r\n\r\n  create () {\r\n    this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: 'red' })\r\n    this.add.text(152, 270, 'Click to Restart', {\r\n      fontSize: '15px',\r\n      fill: '#000000'\r\n    })\r\n\r\n    this.input.on('pointerup', () => {\r\n      this.scene.stop('EndScene')\r\n      this.scene.start('GameScene')\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndScene);\r\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/modules/EndScene.js?");

/***/ }),

/***/ "./src/modules/GameLogic.js":
/*!**********************************!*\
  !*** ./src/modules/GameLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _StartScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartScene */ \"./src/modules/StartScene.js\");\n/* harmony import */ var _GameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameScene */ \"./src/modules/GameScene.js\");\n/* harmony import */ var _EndScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndScene */ \"./src/modules/EndScene.js\");\n\r\n\r\n\r\n\r\nconst GameLogic = (() => {\r\n\r\n  const config = {\r\n    type: Phaser.AUTO,\r\n    width: 450,\r\n    height: 500,\r\n    backgroundColor: 'b9eaff',\r\n    physics: {\r\n      default: 'arcade',\r\n      arcade: {\r\n        gravity: { y: 200 },\r\n        enableBody: true\r\n      }\r\n    },\r\n    scene: [ _StartScene__WEBPACK_IMPORTED_MODULE_0__.default, _GameScene__WEBPACK_IMPORTED_MODULE_1__.default, _EndScene__WEBPACK_IMPORTED_MODULE_2__.default ]\r\n  }\r\n\r\n  const game = new Phaser.Game(config)\r\n\r\n  return { game }\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLogic);\r\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/modules/GameLogic.js?");

/***/ }),

/***/ "./src/modules/GameScene.js":
/*!**********************************!*\
  !*** ./src/modules/GameScene.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass GameScene extends Phaser.Scene {\r\n  constructor () {\r\n    super({ key: 'GameScene' })\r\n\r\n    this.gameState = { score: 0 }\r\n  }\r\n\r\n  preload () {\r\n    this.load.image(\r\n      'bug1',\r\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png'\r\n    )\r\n    this.load.image(\r\n      'bug2',\r\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png'\r\n    )\r\n    this.load.image(\r\n      'bug3',\r\n      'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png'\r\n    )\r\n    this.load.image(\r\n      'platform',\r\n      'https://content.codecademy.com/courses/learn-phaser/physics/platform.png'\r\n    )\r\n    this.load.image(\r\n      'codey',\r\n      'https://content.codecademy.com/courses/learn-phaser/physics/codey.png'\r\n    )\r\n  }\r\n\r\n  create () {\r\n    // Add your code below:\r\n    this.gameState.player = this.physics.add.sprite(225, 440, 'codey').setScale(0.5)\r\n\r\n    // set cursor object in the this.gameState object\r\n    this.gameState.cursors = this.input.keyboard.createCursorKeys()\r\n\r\n    const platforms = this.physics.add.staticGroup()\r\n    platforms.create(225, 510, 'platform')\r\n\r\n    this.gameState.player.setCollideWorldBounds(true)\r\n    this.physics.add.collider(this.gameState.player, platforms)\r\n\r\n    // create a group for enemy objects.\r\n    const bugs = this.physics.add.group()\r\n\r\n    // buglist\r\n    const bugList = ['bug1', 'bug2', 'bug3']\r\n\r\n    // callback to randomly place enemy objects on the game platform\r\n    function bugGen () {\r\n      const xCoordinate = Math.random() * 450\r\n      let randomBug = bugList[Math.floor(Math.random() * 3)]\r\n\r\n      bugs.create(xCoordinate, 10, randomBug)\r\n    }\r\n\r\n    // object for that timely calls the bugGen method.\r\n    const bugObject = {\r\n      callback: bugGen,\r\n      delay: 150,\r\n      callbackScope: this,\r\n      loop: true\r\n    }\r\n\r\n    // call the .addEvent() & pass in the bugObject timely calling the bugs.\r\n    const bugGenLoop = this.time.addEvent(bugObject)\r\n\r\n    // display initial score: 0 text.\r\n    this.gameState.scoreText = this.add.text(195, 485, 'Score: 0', {\r\n      fontSize: '15px',\r\n      fill: '#000000'\r\n    })\r\n\r\n    // add a collider object between bugs & platforms. Destroy the bug as it hits the platform.\r\n    this.physics.add.collider(bugs, platforms, bug => {\r\n      bug.destroy()\r\n\r\n      this.gameState.score += 10\r\n      this.gameState.scoreText.setText(`Score: ${this.gameState.score}`)\r\n    })\r\n\r\n    this.physics.add.collider(this.gameState.player, bugs, () => {\r\n      bugGenLoop.destroy()\r\n\r\n      this.physics.pause()\r\n\r\n      this.input.on('pointerup', () => {\r\n        this.gameState.score = 0\r\n        this.scene.restart()\r\n      })\r\n\r\n      this.scene.stop('GameScene');\r\n      this.scene.start('EndScene');\r\n    })\r\n  }\r\n\r\n  update () {\r\n    if (this.gameState.cursors.left.isDown) {\r\n      this.gameState.player.setVelocityX(-160)\r\n    } else if (this.gameState.cursors.right.isDown) {\r\n      this.gameState.player.setVelocityX(160)\r\n    } else {\r\n      this.gameState.player.setVelocityX(0)\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameScene);\r\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/modules/GameScene.js?");

/***/ }),

/***/ "./src/modules/StartScene.js":
/*!***********************************!*\
  !*** ./src/modules/StartScene.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass StartScene extends Phaser.Scene {\r\n  constructor () {\r\n    super({ key: 'StartScene' })\r\n  }\r\n\r\n  create () {\r\n    this.add.text(130, 250, 'Click to start!', {\r\n      fill: '#000000',\r\n      fontSize: '20px'\r\n    })\r\n\r\n    this.input.on('pointerdown', () => {\r\n      this.scene.stop('StartScene')\r\n      this.scene.start('GameScene')\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartScene);\r\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/modules/StartScene.js?");

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