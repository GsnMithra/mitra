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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.module.css */ \"(app-pages-browser)/./app/chat/chat.module.css\");\n/* harmony import */ var _chat_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chat_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_send_query_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/send-query.png */ \"(app-pages-browser)/./resources/send-query.png\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatPage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"authenticated\");\n        if (!token) {\n            window.location.href = \"/\";\n        }\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().maincontainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chats)\n            }, void 0, false, {\n                fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chat),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatheader)\n                    }, void 0, false, {\n                        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatbody)\n                    }, void 0, false, {\n                        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatfooter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatinput),\n                                type: \"text\",\n                                value: query,\n                                placeholder: \"Send a message\",\n                                onChange: (e)=>setQuery(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatsend),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _resources_send_query_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    id: (_chat_module_css__WEBPACK_IMPORTED_MODULE_5___default().sendbutton),\n                                    width: 30,\n                                    height: 30,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gsnmithra/Documents/CodeMatrix/Projects/mitra/app/chat/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatPage, \"xrDyzFMDRZgjHXjrvXiKylLFqZg=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVpRDtBQUNiO0FBQ0w7QUFDd0I7QUFDdkI7QUFFakIsU0FBU007O0lBRXBCTixnREFBU0EsQ0FBRTtRQUNQLE1BQU1PLFFBQVFGLGlEQUFPQSxDQUFDRyxHQUFHLENBQUU7UUFDM0IsSUFBSSxDQUFDRCxPQUFPO1lBQ1JFLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1FBQzNCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFFO0lBQ3hDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBRTtJQUVwQyxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBV2YsdUVBQWtCOzswQkFDOUIsOERBQUNjO2dCQUFJQyxXQUFXZiwrREFBVTs7Ozs7OzBCQUcxQiw4REFBQ2M7Z0JBQUlDLFdBQVdmLDhEQUFTOztrQ0FDckIsOERBQUNjO3dCQUFJQyxXQUFXZixvRUFBZTs7Ozs7O2tDQUUvQiw4REFBQ2M7d0JBQUlDLFdBQVdmLGtFQUFhOzs7Ozs7a0NBRzdCLDhEQUFDYzt3QkFBSUMsV0FBV2Ysb0VBQWU7OzBDQUMzQiw4REFBQ3NCO2dDQUNHUCxXQUFXZixtRUFBYztnQ0FDekJ3QixNQUFLO2dDQUNMQyxPQUFPYjtnQ0FDUGMsYUFBWTtnQ0FDWkMsVUFBVSxDQUFDQyxJQUFNZixTQUFVZSxFQUFFQyxNQUFNLENBQUNKLEtBQUs7Ozs7OzswQ0FFN0MsOERBQUNYO2dDQUFJQyxXQUFXZixrRUFBYTswQ0FDekIsNEVBQUNDLG1EQUFLQTtvQ0FDRjhCLEtBQUs3QixpRUFBVUE7b0NBQ2Y4QixJQUFJaEMsb0VBQWU7b0NBQ25Ca0MsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEM7R0E1Q3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvcGFnZS50c3g/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuL2NoYXQubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTZW5kQnV0dG9uIGZyb20gJy4uLy4uL3Jlc291cmNlcy9zZW5kLXF1ZXJ5LnBuZydcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlICgpIHtcblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0ICgnYXV0aGVudGljYXRlZCcpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlICh0cnVlKTtcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlICgnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5tYWluY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXRzfT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jaGF0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jaGF0aGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jaGF0Ym9keX0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2hhdC5jaGF0Zm9vdGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtDaGF0LmNoYXRpbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VuZCBhIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5IChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDaGF0LmNoYXRzZW5kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1NlbmRCdXR0b259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtDaGF0LnNlbmRidXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhdCIsIkltYWdlIiwiU2VuZEJ1dHRvbiIsIkNvb2tpZXMiLCJDaGF0UGFnZSIsInRva2VuIiwiZ2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJxdWVyeSIsInNldFF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbmNvbnRhaW5lciIsImNoYXRzIiwiY2hhdCIsImNoYXRoZWFkZXIiLCJjaGF0Ym9keSIsImNoYXRmb290ZXIiLCJpbnB1dCIsImNoYXRpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2hhdHNlbmQiLCJzcmMiLCJpZCIsInNlbmRidXR0b24iLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.tsx\n"));

/***/ })

});