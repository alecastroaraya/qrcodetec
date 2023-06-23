"use strict";
(() => {
var exports = {};
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7117);

/*
req es un objeto que contiene información sobre la solicitud HTTP 
  que disparó el evento de la función.

res es un objeto que contiene información sobre la respuesta HTTP 
  que se enviará cuando finalice la función.
*/ /**
 * Agrega un código QR a la base de datos.
 *
 * @param req El request realizado
 * @param res La respuesta al request realizado
 * @return El JSON del código QR que se acaba de agregar
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
        // Nos dice cual es la base de datos de mongo que usaremos, en este caso "qrcodes"
        const db = client.db("qrcodes");
        /////////////////////////////////////////////////////////////////////////
        // AQUI, en esta parte podemos crear el url nuevo para que 
        // envie al usuario a nuestro servidor y no a la pagina de qrcode
        // Obtenemos los valores que ingreso el usuario en el formulario
        let { name , description , urlFinal  } = req.body;
        const url = urlFinal;
        console.log(urlFinal);
        console.log(url);
        // Le hacemos INSERT del QR nuevo a la base de datos
        const qrCode = await db.collection("qrcodes").insertOne({
            name,
            description,
            url
        });
        // Regresamos al frontend el QR que acabamos de crear
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
var __webpack_exports__ = __webpack_require__.X(0, [117], () => (__webpack_exec__(1827)));
module.exports = __webpack_exports__;

})();