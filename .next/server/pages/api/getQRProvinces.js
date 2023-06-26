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
exports.id = "pages/api/getQRProvinces";
exports.ids = ["pages/api/getQRProvinces"];
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

/***/ "(api)/./pages/api/getQRProvinces.js":
/*!*************************************!*\
  !*** ./pages/api/getQRProvinces.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n/**\r\n * Obtiene las provincias donde se ha visitado un código QR específico de la base de datos\r\n *\r\n * @param req El request realizado\r\n * @param res La respuesta al request realizado\r\n * @return El JSON con las provincias del código QR\r\n */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"qrcodes\");\n        const { qrUrl  } = req.query;\n        const qrCodes = await db.collection(\"qr_visits\").find({\n            qrUrl: qrUrl\n        }, {\n            provincia: 1,\n            canton: 0,\n            visits: 1,\n            _id: 0\n        }).toArray();\n        res.json(qrCodes);\n    } catch (e) {\n        console.error(e);\n        throw new Error(e).message;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UVJQcm92aW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFOUM7Ozs7OztDQU1DLEdBQ0QsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNSCxvREFBYUE7UUFDbEMsTUFBTUksS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdKLElBQUlLLEtBQUs7UUFFM0IsTUFBTUMsVUFBVSxNQUFNSCxHQUFHSSxVQUFVLENBQUMsYUFBYUMsSUFBSSxDQUFDO1lBQUVKLE9BQU9BO1FBQU0sR0FBRztZQUFFSyxXQUFXO1lBQUdDLFFBQVE7WUFBR0MsUUFBUTtZQUFHQyxLQUFLO1FBQUUsR0FBR0MsT0FBTztRQUUvSFosSUFBSWEsSUFBSSxDQUFDUjtJQUNYLEVBQUUsT0FBT1MsR0FBRztRQUNWQyxRQUFRQyxLQUFLLENBQUNGO1FBQ2QsTUFBTSxJQUFJRyxNQUFNSCxHQUFHSSxPQUFPLENBQUM7SUFDN0I7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXJjb2RldGVjLy4vcGFnZXMvYXBpL2dldFFSUHJvdmluY2VzLmpzPzQ2MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XHJcblxyXG4vKipcclxuICogT2J0aWVuZSBsYXMgcHJvdmluY2lhcyBkb25kZSBzZSBoYSB2aXNpdGFkbyB1biBjw7NkaWdvIFFSIGVzcGVjw61maWNvIGRlIGxhIGJhc2UgZGUgZGF0b3NcclxuICpcclxuICogQHBhcmFtIHJlcSBFbCByZXF1ZXN0IHJlYWxpemFkb1xyXG4gKiBAcGFyYW0gcmVzIExhIHJlc3B1ZXN0YSBhbCByZXF1ZXN0IHJlYWxpemFkb1xyXG4gKiBAcmV0dXJuIEVsIEpTT04gY29uIGxhcyBwcm92aW5jaWFzIGRlbCBjw7NkaWdvIFFSXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwicXJjb2Rlc1wiKTtcclxuICAgIGNvbnN0IHsgcXJVcmwgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBxckNvZGVzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInFyX3Zpc2l0c1wiKS5maW5kKHsgcXJVcmw6IHFyVXJsIH0sIHsgcHJvdmluY2lhOiAxLCBjYW50b246IDAsIHZpc2l0czogMSwgX2lkOiAwIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgICByZXMuanNvbihxckNvZGVzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGUpLm1lc3NhZ2U7XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJxclVybCIsInF1ZXJ5IiwicXJDb2RlcyIsImNvbGxlY3Rpb24iLCJmaW5kIiwicHJvdmluY2lhIiwiY2FudG9uIiwidmlzaXRzIiwiX2lkIiwidG9BcnJheSIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getQRProvinces.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getQRProvinces.js"));
module.exports = __webpack_exports__;

})();