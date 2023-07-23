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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Counter: () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\n  static initCounters() {\n    function checkEdgeValues() {}\n    // TODO FIX CHECKS\n    const counters = document.querySelectorAll('.b-counter');\n    counters.forEach(counter => {\n      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');\n      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');\n      const value = counter.querySelector('.b-counter__e-value');\n      const counterMax = counter.dataset.maxValue;\n      const counterMin = counter.dataset.minValue;\n      if (+value.textContent <= counterMin) {\n        value.textContent = counterMin;\n        minusBtn.classList.add('.b-counter__e-button_disabled');\n        minusBtn.style.opacity = \"0.38\";\n        minusBtn.disabled = true;\n      }\n      if (+value.textContent >= counterMax) {\n        value.textContent = counterMax;\n        minusBtn.classList.add('.b-counter__e-button_disabled');\n        minusBtn.disabled = true;\n      }\n      minusBtn.onpointerdown = () => {\n        if (+value.textContent <= counterMin) {\n          value.textContent = counterMin;\n          minusBtn.classList.add('b-counter__e-button_disabled');\n          minusBtn.disabled = true;\n        } else {\n          value.textContent = +value.textContent - 1;\n          minusBtn.classList.remove('b-counter__e-button_disabled');\n          minusBtn.disabled = false;\n        }\n      };\n      plusBtn.onpointerdown = () => {\n        if (+value.textContent >= counterMax) {\n          value.textContent = counterMax;\n          plusBtn.classList.add('b-counter__e-button_disabled');\n          plusBtn.disabled = true;\n        } else {\n          value.textContent = +value.textContent + 1;\n          plusBtn.classList.remove('b-counter__e-button_disabled');\n          plusBtn.disabled = false;\n        }\n      };\n    });\n  }\n}\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/counter/b-counter.js?");

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