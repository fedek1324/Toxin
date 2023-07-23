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

/***/ "./blocks/form-elements-blocks/input-field/b-input-field.js":
/*!******************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/b-input-field.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputField: () => (/* binding */ InputField)\n/* harmony export */ });\nclass InputField {\n  static initDropdowns() {\n    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {\n      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];\n      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');\n      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');\n      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');\n      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');\n      dropdownContent.hidden = true;\n      input.setAttribute('readonly', '');\n      let enabled = false;\n      dropdownContent.style.width = `${input.offsetWidth}px`;\n      inputWrapper.onpointerdown = onclick;\n      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {\n        onclick();\n      }\n      function onclick(event) {\n        event?.preventDefault();\n        enabled = !enabled;\n        input.classList.toggle('b-input-field__e-input_active-dropdown');\n        dropdownContent.hidden = !enabled;\n        document.addEventListener('pointerdown', handleDocumentClick, {\n          passive: true\n        });\n      }\n      function handleDocumentClick(event) {\n        const isInside = inputBlock.contains(event.target);\n        if (!isInside) {\n          enabled = false;\n          input.classList.remove('b-input-field__e-input_active-dropdown');\n          dropdownContent.hidden = true;\n          document.removeEventListener('pointerdown', handleDocumentClick, {\n            passive: true\n          });\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/b-input-field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/form-elements-blocks/input-field/b-input-field.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;