"use strict";
(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7117);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const provincia = req.body.provincia;
        const canton = req.body.canton;
        const qrUrl = req.body.qrUrl;
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        const db = client.db("qrcodes");
        await db.collection("qr_visits").updateOne({
            qrUrl,
            provincia,
            canton
        }, {
            $inc: {
                visits: 1
            }
        }, {
            upsert: true
        } // crear el registro si no existe
        );
        res.json({
            url: qrUrl
        });
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [117], () => (__webpack_exec__(9531)));
module.exports = __webpack_exports__;

})();