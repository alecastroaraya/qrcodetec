"use strict";
(() => {
var exports = {};
exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 4062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7117);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Actualiza las estadísticas (ubicación y cantidad de visitas) de un código QR que se visitó
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON del código QR visitado
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        const db = client.db("qrcodes");
        const { id  } = req.query;
        const { name , description , url  } = req.body;
        const qrCode = await db.collection("qrcodes").updateOne({
            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)
        }, {
            $set: {
                name: name,
                description: description,
                url: url
            }
        });
        res.json(qrCode);
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
var __webpack_exports__ = __webpack_require__.X(0, [117], () => (__webpack_exec__(4062)));
module.exports = __webpack_exports__;

})();