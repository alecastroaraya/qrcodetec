"use strict";
(() => {
var exports = {};
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7117);

/**
 * Obtiene los cantones donde se ha visitado un código QR específico de la base de datos
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON con los cantones del código QR
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        const db = client.db("qrcodes");
        const { qrUrl  } = req.query;
        const qrCodes = await db.collection("qr_visits").find({
            qrUrl: qrUrl
        }, {
            provincia: 0,
            canton: 1,
            visits: 1,
            _id: 0
        }).toArray();
        res.json(qrCodes);
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
var __webpack_exports__ = __webpack_require__.X(0, [117], () => (__webpack_exec__(5266)));
module.exports = __webpack_exports__;

})();