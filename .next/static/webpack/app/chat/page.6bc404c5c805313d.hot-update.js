"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/chat/page.tsx":
/*!***************************!*\
  !*** ./app/chat/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.module.css */ \"(app-pages-browser)/./app/chat/chat.module.css\");\n/* harmony import */ var _chat_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chat_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_send_query_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/send-query.png */ \"(app-pages-browser)/./resources/send-query.png\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatPage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"authenticated\");\n        if (!token) {\n            window.location.href = \"/\";\n        }\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().maincontainer),\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chats)\n                }, void 0, false, {\n                    fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chat),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatheader)\n                        }, void 0, false, {\n                            fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatbody)\n                        }, void 0, false, {\n                            fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatfooter),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatinput),\n                                    type: \"text\",\n                                    value: query,\n                                    placeholder: \"Send a message\",\n                                    onChange: (e)=>setQuery(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatsend),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _resources_send_query_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        id: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendbutton),\n                                        width: 30,\n                                        height: 30,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 25\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatPage, \"xrDyzFMDRZgjHXjrvXiKylLFqZg=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVpRDtBQUNiO0FBQ0w7QUFDd0I7QUFDdkI7QUFFakIsU0FBU007O0lBRXBCTixnREFBU0EsQ0FBRTtRQUNQLE1BQU1PLFFBQVFGLGlEQUFPQSxDQUFDRyxHQUFHLENBQUU7UUFDM0IsSUFBSSxDQUFDRCxPQUFPO1lBQ1JFLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1FBQzNCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFFO0lBQ3hDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBRTtJQUVwQyxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBV2YsdUVBQWtCO2tCQUM3QlUseUJBQVcsOERBQUNJO1lBQUlDLFdBQVdmLG1FQUFjOzs4QkFDdEMsOERBQUNjO29CQUFJQyxXQUFXZiwrREFBVTs7Ozs7OzhCQUcxQiw4REFBQ2M7b0JBQUlDLFdBQVdmLDhEQUFTOztzQ0FDckIsOERBQUNjOzRCQUFJQyxXQUFXZixvRUFBZTs7Ozs7O3NDQUUvQiw4REFBQ2M7NEJBQUlDLFdBQVdmLGtFQUFhOzs7Ozs7c0NBRzdCLDhEQUFDYzs0QkFBSUMsV0FBV2Ysb0VBQWU7OzhDQUMzQiw4REFBQ3VCO29DQUNHUixXQUFXZixtRUFBYztvQ0FDekJ5QixNQUFLO29DQUNMQyxPQUFPZDtvQ0FDUGUsYUFBWTtvQ0FDWkMsVUFBVSxDQUFDQyxJQUFNaEIsU0FBVWdCLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSzs7Ozs7OzhDQUU3Qyw4REFBQ1o7b0NBQUlDLFdBQVdmLGtFQUFhOzhDQUN6Qiw0RUFBQ0MsbURBQUtBO3dDQUNGK0IsS0FBSzlCLGlFQUFVQTt3Q0FDZitCLElBQUlqQyxvRUFBZTt3Q0FDbkJtQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBDO0dBOUN3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UudHN4PzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9jaGF0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU2VuZEJ1dHRvbiBmcm9tICcuLi8uLi9yZXNvdXJjZXMvc2VuZC1xdWVyeS5wbmcnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSAoKSB7XG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCAoJ2F1dGhlbnRpY2F0ZWQnKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSAodHJ1ZSk7XG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSAoJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NoYXQubWFpbmNvbnRhaW5lcn0+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXRzfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jaGF0aGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXRib2R5fT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NoYXQuY2hhdGZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDaGF0LmNoYXRpbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VuZCBhIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeSAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXRzZW5kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17U2VuZEJ1dHRvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtDaGF0LnNlbmRidXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXQiLCJJbWFnZSIsIlNlbmRCdXR0b24iLCJDb29raWVzIiwiQ2hhdFBhZ2UiLCJ0b2tlbiIsImdldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicXVlcnkiLCJzZXRRdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5jb250YWluZXIiLCJjb250YWluZXIiLCJjaGF0cyIsImNoYXQiLCJjaGF0aGVhZGVyIiwiY2hhdGJvZHkiLCJjaGF0Zm9vdGVyIiwiaW5wdXQiLCJjaGF0aW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNoYXRzZW5kIiwic3JjIiwiaWQiLCJzZW5kYnV0dG9uIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.tsx\n"));

/***/ })

});