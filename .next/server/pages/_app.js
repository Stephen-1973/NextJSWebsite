"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./helpers/fonts.js":
/*!**************************!*\
  !*** ./helpers/fonts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Fonts = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {\n        styles: `\n  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Montserrat:wght@300&display=swap');`\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\blog\\\\helpers\\\\fonts.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2ZvbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUd2QyxLQUFLLENBQUNDLEtBQUssbUZBQ1JELGtEQUFNO1FBQUNFLE1BQU0sR0FBRzs2SEFDMEc7Ozs7Ozs7QUFFN0gsaUVBQWVELEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YmxvZy8uL2hlbHBlcnMvZm9udHMuanM/NzA4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcblxyXG5cclxuY29uc3QgRm9udHMgPSAoKSA9PiAoXHJcbiAgPEdsb2JhbCBzdHlsZXM9e2BcclxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NK1BMVVMrUm91bmRlZCsxYzp3Z2h0QDUwMCZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtgfSAvPlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IEZvbnRzIl0sIm5hbWVzIjpbIkdsb2JhbCIsIkZvbnRzIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/fonts.js\n");

/***/ }),

/***/ "./helpers/theme.js":
/*!**************************!*\
  !*** ./helpers/theme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    intialColorMode: 'light',\n    useSystemColorMode: false\n};\nconst styles = {\n    global: (props)=>{\n        body: {\n            bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#f027db', '#202023')(props);\n        }\n    }\n};\nconst components = {\n    Heading: {\n        variant: {\n            'page-title': {\n                fontFamily: \"'M PLUS Rounded 1c'\"\n            }\n        }\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles,\n    components,\n    fonts\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ0Q7QUFHN0MsS0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBQztJQUNkQyxlQUFlLEVBQUUsQ0FBTztJQUN4QkMsa0JBQWtCLEVBQUUsS0FBSztBQUMzQixDQUFDO0FBRUQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxNQUFNLEdBQUVDLEtBQUssR0FBSSxDQUFDO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBQztZQUNMQyxFQUFFLEVBQUVSLDREQUFJLENBQUMsQ0FBUyxVQUFDLENBQVMsVUFBRU0sS0FBSztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNHLFVBQVUsR0FBRyxDQUFDO0lBQ2xCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxPQUFPLEVBQUUsQ0FBQztZQUNSLENBQVksYUFBRSxDQUFDO2dCQUNiQyxVQUFVLEVBQUUsQ0FBcUI7WUFDbkMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFFLENBQXFCO0FBQ2hDLENBQUM7QUFFRCxLQUFLLENBQUNDLEtBQUssR0FBR2hCLDZEQUFXLENBQUMsQ0FBQztJQUFDRSxNQUFNO0lBQUNHLE1BQU07SUFBQ0ssVUFBVTtJQUFDSSxLQUFLO0FBQUMsQ0FBQztBQUU1RCxpRUFBZUUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRibG9nLy4vaGVscGVycy90aGVtZS5qcz8xY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnO1xyXG5cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBpbnRpYWxDb2xvck1vZGU6ICdsaWdodCcsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ2xvYmFsOiBwcm9wcyA9PiB7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJnOiBtb2RlKCcjZjAyN2RiJywnIzIwMjAyMycpKHByb3BzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICBIZWFkaW5nOiB7XHJcbiAgICB2YXJpYW50OiB7XHJcbiAgICAgICdwYWdlLXRpdGxlJzoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ00gUExVUyBSb3VuZGVkIDFjJ1wiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZyxzdHlsZXMsY29tcG9uZW50cyxmb250cyB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwiY29uZmlnIiwiaW50aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnQiLCJmb250RmFtaWx5IiwiZm9udHMiLCJoZWFkaW5nIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/theme */ \"./helpers/theme.js\");\n/* harmony import */ var _helpers_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/fonts */ \"./helpers/fonts.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _helpers_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CSSReset, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\blog\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_fonts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\blog\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\blog\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\blog\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ3RCO0FBQ0E7U0FHM0JJLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQUVOLDREQUFjO1FBQUNFLEtBQUssRUFBRUEsc0RBQUs7O3dGQUNoQ0Qsc0RBQVE7Ozs7O3dGQUNSRSxzREFBSzs7Ozs7d0ZBQ0hFLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7OztBQUU5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YmxvZy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlcixDU1NSZXNldCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vaGVscGVycy90aGVtZSc7XHJcbmltcG9ydCBGb250cyBmcm9tICcuLi9oZWxwZXJzL2ZvbnRzJztcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICA8Q1NTUmVzZXQgLz5cclxuICAgIDxGb250cy8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L0NoYWtyYVByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJDU1NSZXNldCIsInRoZW1lIiwiRm9udHMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();