/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("function preload() {\n  this.load.image('bug1', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png')\n  this.load.image('bug2', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png')\n  this.load.image('bug3', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png')\n  this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png')\n  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/physics/codey.png')\n}\n\nconst gameState = {};\n\nfunction create() {\n  // Add your code below: \n  this.physics.add.sprite(150, 70, 'codey');\n}\n\nfunction update() {\n}\n\nconst config = {\n  type: Phaser.AUTO,\n  width: 450,\n  height: 500,\n  backgroundColor: \"b9eaff\",\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: 200 },\n      enableBody: true,\n      debug: true\n    }\n  },\n  scene: {\n    preload,\n    create,\n    update\n  }\n}\n\nconst game = new Phaser.Game(config)\n\n\n//# sourceURL=webpack://intermediate-phaser/./src/index.js?");
/******/ })()
;