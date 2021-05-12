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

/***/ "./source/calculation.js":
/*!*******************************!*\
  !*** ./source/calculation.js ***!
  \*******************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  exports.add = add;\n  exports.subtract = subtract;\n  exports.multiply = multiply;\n\n  function add(a, b) {\n    return a + b;\n  }\n\n  function subtract(a, b) {\n    return a - b;\n  }\n\n  function multiply(a, b) {\n    return a * b;\n  }\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://my-app/./source/calculation.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./calculation */ \"./source/calculation.js\"), __webpack_require__(/*! ./person */ \"./source/person.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_calculation, _person) {\n  \"use strict\";\n\n  // console.log('running in browser runtime....')\n  // console.log(add(10, 20))\n  // console.log(subtract(10, 5))\n  // console.log(multiply(10, 5))\n  function display() {\n    document.getElementById('addSpan').innerText = (0, _calculation.add)(10, 20);\n    document.getElementById('subSpan').innerText = (0, _calculation.subtract)(10, 20);\n    document.getElementById('multiSpan').innerText = (0, _calculation.multiply)(10, 20);\n    var anilPerson = new _person.person('anil', 101, 200000); //console.log(anilPerson)\n\n    document.getElementById('nameSpan').innerText = anilPerson.personName;\n    document.getElementById('idSpan').innerText = anilPerson.personId;\n    document.getElementById('salarySpan').innerText = anilPerson.personSalary;\n  }\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://my-app/./source/index.js?");

/***/ }),

/***/ "./source/person.js":
/*!**************************!*\
  !*** ./source/person.js ***!
  \**************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  exports.person = person;\n\n  function person(name, id, salary) {\n    this.personName = name;\n    this.personId = id;\n    this.personSalary = salary;\n\n    this.show = function () {\n      return this.personName + ', ' + this.personId + ', ' + this.personSalary;\n    };\n  }\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack://my-app/./source/person.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/index.js");
/******/ 	
/******/ })()
;