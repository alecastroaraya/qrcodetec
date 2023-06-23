"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Layout.tsx


/**
 * El layout de React de la página web
 *
 * @return Los hijos de los props de la página web renderizada
 */ function Layout(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: props.children
    });
}

;// CONCATENATED MODULE: ./pages/index.tsx





const QRCode = __webpack_require__(1121);
async function getServerSideProps() {
    try {
        let response = await fetch("http://127.0.0.1:3000/api/getQRs");
        let qrCodes = await response.json();
        console.log(JSON.parse(JSON.stringify(qrCodes)));
        return {
            props: {
                qrCodes: JSON.parse(JSON.stringify(qrCodes))
            }
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                qrCodes: JSON.parse(JSON.stringify({
                    length: 0
                }))
            }
        };
    }
}
function Home(props) {
    const [qrCodes, setQRCodes] = (0,external_react_.useState)(props.qrCodes);
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const handleSearch = ()=>{
        fetch(`/api/getQRsbyName?name=${searchValue}`).then((response)=>response.json()).then((data)=>{
            setQRCodes(data);
        }).catch((error)=>{
            console.error("Error al intentar obtener los c\xf3digos QR:", error);
        });
    };
    const handleDeleteQR = async (QR_Id)=>{
        try {
            const confirmed = window.confirm("Seguro que quiere borrar este c\xf3digo QR?");
            if (!confirmed) {
                return;
            }
            let response = await fetch(`/api/deleteQR?id=${QR_Id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });
            response = await response.json();
            window.location.reload();
        } catch (error) {
            console.log("Un error ocurri\xf3 al intentar borrar el c\xf3digo QR ", error);
        }
    };
    function redirectEditPage(qrCodeId) {
        window.location.href = "/editar?id=" + qrCodeId;
    }
    function redirectProvinceGraphPage(qrUrl) {
        window.location.href = "/grafico_provincias?qrUrl=" + qrUrl;
    }
    function redirectCantonGraphPage(qrUrl) {
        window.location.href = "/pag_estadistica_canton?qrUrl=" + qrUrl;
    }
    async function generateQRCodeDataURL(url, fileName) {
        try {
            const qrCodeDataURL = await QRCode.toDataURL(url);
            console.log("C\xf3digo QR generado como DataURL");
            console.log(qrCodeDataURL);
            const anchor = document.createElement("a");
            anchor.href = qrCodeDataURL;
            anchor.download = fileName + ".png";
            anchor.click();
            return qrCodeDataURL;
        } catch (err) {
            console.error(err);
            throw new Error("No se pudo generar el DataURL del c\xf3digo QR");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "QRCodeTEC"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: ""
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ui fixed borderless huge menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "ui tiny image",
                            src: "/iei_logo.jpg"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "header item",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Instituto de Educaci\xf3n Integral"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ui container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "ui header header-text",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("u", {
                            children: "Generador de c\xf3digos"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ui container border-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ui container fluid",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ui inverted segment",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Nombre de la p\xe1gina"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ui container border-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "ui vertically divided bottom aligned grid",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "four column row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "one wide column"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "one wide column",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "ui icon button",
                                                onClick: handleSearch,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "ui mini image",
                                                    src: "/search-icon.png"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "eleven wide column go-bottom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ui fluid large icon input",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Buscar nombre de la pagina",
                                                    value: searchValue,
                                                    onChange: (event)=>setSearchValue(event.target.value)
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "one wide column",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "ui small button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/RegistrarEditar",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Registrar"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        qrCodes.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "qrcodes-list",
                            children: qrCodes.map((qrCode, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ui container border-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ui vertically divided bottom aligned grid",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "four column row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "one wide column"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "seven wide column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ui middle aligned mini message",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "middle aligned header",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                children: qrCode.name
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "two wide column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "ui tiny icon button",
                                                        onClick: ()=>redirectEditPage(qrCode._id),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "ui tiny image",
                                                            src: "/pencil-icon.png"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "two wide column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "ui tiny icon button",
                                                        onClick: ()=>generateQRCodeDataURL(qrCode.url, qrCode.name),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "ui tiny image",
                                                            src: "/download-icon.png"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "two wide column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ui tiny fluid menu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "ui tiny simple fluid dropdown item",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    className: "ui tiny fluid image",
                                                                    src: "/stats-icon.png"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "menu",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: `/grafico_provincias?qrUrl=${qrCode.url.split("=")[1]}`,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                children: "Por provincias"
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "two wide column",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "ui tiny icon button",
                                                        onClick: ()=>handleDeleteQR(qrCode._id),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "ui tiny image",
                                                            src: "/trash-icon.png"
                                                        })
                                                    })
                                                })
                                            ]
                                        }, index)
                                    })
                                });
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "qrcodes-body-heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                children: "No se encontraron c\xf3digos QR."
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1121:
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(882));
module.exports = __webpack_exports__;

})();