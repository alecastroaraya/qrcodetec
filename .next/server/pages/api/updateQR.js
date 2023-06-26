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
exports.id = "pages/api/updateQR";
exports.ids = ["pages/api/updateQR"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sK0NBQThDO0FBQ2hFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwyQ0FBMEM7QUFDNUQsQ0FBQztBQUVELElBQUlILElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJUSxrQkFBa0JDO0lBR3RCLElBQUksQ0FBQ0QsZ0JBQWdCRSxtQkFBbUIsRUFBRTtRQUN4Q0osU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0s7UUFDekJJLGdCQUFnQkUsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDdEQsQ0FBQztJQUNESixnQkFBZ0JDLGdCQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xcmNvZGV0ZWMvLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpXHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgbGV0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcclxuICAgIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XHJcbiAgfVxyXG4gIGlmICghZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpXHJcbiAgICBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsV2l0aE1vbmdvIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/updateQR.js":
/*!*******************************!*\
  !*** ./pages/api/updateQR.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\r\n * Actualiza las estadísticas (ubicación y cantidad de visitas) de un código QR que se visitó\r\n *\r\n * @param req El request realizado\r\n * @param res La respuesta al request realizado\r\n * @return El JSON del código QR visitado\r\n */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"qrcodes\");\n        const { id  } = req.query;\n        const { name , description , url  } = req.body;\n        const qrCode = await db.collection(\"qrcodes\").updateOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n        }, {\n            $set: {\n                name: name,\n                description: description,\n                url: url\n            }\n        });\n        res.json(qrCode);\n    } catch (e) {\n        console.error(e);\n        throw new Error(e).message;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlUVIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUNYO0FBRW5DOzs7Ozs7Q0FNQyxHQUNELGlFQUFlLE9BQU9FLEtBQUtDLE1BQVE7SUFDakMsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTUosb0RBQWFBO1FBQ2xDLE1BQU1LLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUNyQixNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHSixJQUFJSyxLQUFLO1FBQ3hCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLElBQUcsRUFBRSxHQUFHUixJQUFJUyxJQUFJO1FBRTNDLE1BQU1DLFNBQVMsTUFBTVAsR0FBR1EsVUFBVSxDQUFDLFdBQVdDLFNBQVMsQ0FDckQ7WUFDRUMsS0FBSyxJQUFJZCw2Q0FBUUEsQ0FBQ0s7UUFDcEIsR0FDQTtZQUNFVSxNQUFNO2dCQUNKUixNQUFNQTtnQkFDTkMsYUFBYUE7Z0JBQ2JDLEtBQUtBO1lBQ1A7UUFDRjtRQUdGUCxJQUFJYyxJQUFJLENBQUNMO0lBQ1gsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxNQUFNLElBQUlHLE1BQU1ILEdBQUdJLE9BQU8sQ0FBQztJQUM3QjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xcmNvZGV0ZWMvLi9wYWdlcy9hcGkvdXBkYXRlUVIuanM/OGQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLyoqXHJcbiAqIEFjdHVhbGl6YSBsYXMgZXN0YWTDrXN0aWNhcyAodWJpY2FjacOzbiB5IGNhbnRpZGFkIGRlIHZpc2l0YXMpIGRlIHVuIGPDs2RpZ28gUVIgcXVlIHNlIHZpc2l0w7NcclxuICpcclxuICogQHBhcmFtIHJlcSBFbCByZXF1ZXN0IHJlYWxpemFkb1xyXG4gKiBAcGFyYW0gcmVzIExhIHJlc3B1ZXN0YSBhbCByZXF1ZXN0IHJlYWxpemFkb1xyXG4gKiBAcmV0dXJuIEVsIEpTT04gZGVsIGPDs2RpZ28gUVIgdmlzaXRhZG9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJxcmNvZGVzXCIpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgdXJsIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCBxckNvZGUgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicXJjb2Rlc1wiKS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IG5ldyBPYmplY3RJZChpZCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXMuanNvbihxckNvZGUpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZSkubWVzc2FnZTtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJPYmplY3RJZCIsInJlcSIsInJlcyIsImNsaWVudCIsImRiIiwiaWQiLCJxdWVyeSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsImJvZHkiLCJxckNvZGUiLCJjb2xsZWN0aW9uIiwidXBkYXRlT25lIiwiX2lkIiwiJHNldCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateQR.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateQR.js"));
module.exports = __webpack_exports__;

})();