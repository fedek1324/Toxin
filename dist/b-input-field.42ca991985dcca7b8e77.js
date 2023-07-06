/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/form-elements-blocks/input-field/b-input-field.js":
/*!******************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/b-input-field.js ***!
  \******************************************************************/
/***/ (() => {

eval("console.log('hi im input')\r\n\r\nfor (let i = 0; i < document.getElementsByClassName(\"b-input-field__e-input_is-dropdown\").length; i++) {\r\n    const dropdownIcon = document.getElementsByClassName('b-input-field__e-icon_is-chevron-icon')[i];\r\n    const dropdownContent = document.getElementsByClassName('b-input-field__e-dropdown')[i];\r\n    const input = document.getElementsByClassName(\"b-input-field__e-input_is-dropdown\")[i];\r\n    dropdownContent.hidden = true;\r\n\r\n    let enabled = false;\r\n    dropdownContent.style.width = input.offsetWidth + \"px\";\r\n    dropdownIcon.onclick = function(event) {\r\n        event.preventDefault();\r\n        enabled = !enabled;\r\n        // dropdownContent.style.display = enabled ? '' : 'none';\r\n        input.classList.toggle(\"b-input-field__e-input_expanded\");\r\n        dropdownContent.hidden = !enabled;\r\n    };\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/b-input-field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/form-elements-blocks/input-field/b-input-field.js"]();
/******/ 	
/******/ })()
;