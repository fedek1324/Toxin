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

/***/ "./blocks/form-elements-blocks/counter/b-counter.js":
/*!**********************************************************!*\
  !*** ./blocks/form-elements-blocks/counter/b-counter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\r\n  static initCounters() {\r\n    function checkEdgeValues() {\r\n\r\n    }\r\n    // TODO FIX CHECKS\r\n    const counters = document.querySelectorAll('.b-counter');\r\n    counters.forEach((counter) => {\r\n      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');\r\n      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');\r\n      const value = counter.querySelector('.b-counter__e-value');\r\n      const counterMax = counter.dataset.maxValue;\r\n      const counterMin = counter.dataset.minValue;\r\n      if (+value.textContent <= counterMin) {\r\n        value.textContent = counterMin;\r\n        minusBtn.classList.add('.b-counter__e-button_disabled');\r\n        minusBtn.style.opacity = \"0.38\";\r\n        minusBtn.disabled = true;\r\n      }\r\n      if (+value.textContent >= counterMax) {\r\n        value.textContent = counterMax;\r\n        minusBtn.classList.add('.b-counter__e-button_disabled');\r\n        minusBtn.disabled = true;\r\n      }\r\n      minusBtn.onpointerdown = () => {\r\n        if (+value.textContent <= counterMin) {\r\n          value.textContent = counterMin;\r\n          minusBtn.classList.add('b-counter__e-button_disabled');\r\n          minusBtn.disabled = true;\r\n        } else {\r\n          value.textContent = +value.textContent - 1;\r\n          minusBtn.classList.remove('b-counter__e-button_disabled');\r\n          minusBtn.disabled = false;\r\n        }\r\n      };\r\n      plusBtn.onpointerdown = () => {\r\n        if (+value.textContent >= counterMax) {\r\n          value.textContent = counterMax;\r\n          plusBtn.classList.add('b-counter__e-button_disabled');\r\n          plusBtn.disabled = true;\r\n        } else {\r\n          value.textContent = +value.textContent + 1;\r\n          plusBtn.classList.remove('b-counter__e-button_disabled');\r\n          plusBtn.disabled = false;\r\n        }\r\n      };\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/counter/b-counter.js?");

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
/******/ 	__webpack_modules__["./blocks/form-elements-blocks/counter/b-counter.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;