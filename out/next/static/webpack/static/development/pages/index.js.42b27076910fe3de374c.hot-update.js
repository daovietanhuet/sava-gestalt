webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gestalt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gestalt */ "./node_modules/gestalt/dist/gestalt.es.js");





var _jsxFileName = "/home/daovietanh99/Documents/sava-gestalt/components/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        weight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "H\xE3y kh\xE1m ph\xE1 c\xE1c g\xF3i b\u1EA1n \u0111\xE3 mua. C\xE1c g\xF3i \u0111\u01B0\u1EE3c ph\xE2n lo\u1EA1i theo t\u1EEBng ch\u1EE7 \u0111\u1EC1, h\xE3y ch\u1ECDn m\u1ED9t ch\u1EE7 \u0111\u1EC1 v\xE0 b\u1EAFt \u0111\u1EA7u kh\xE1m ph\xE1!")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        size: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "G\xF3i tr\xF2 ch\u01A1i ch\u1EE7 \u0111\u1EC1 gia \u0111\xECnh")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: "100%",
        overflow: "scrollX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        direction: "row",
        height: "50vh",
        width: "max-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.familyPackages.map(function (value) {
        if (_this.props.buy["" + value + ""]) return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          padding: 3,
          display: "inlineBlock",
          width: "60vw",
          key: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
          mouseCursor: "zoomIn",
          shape: "rounded",
          onTouch: function onTouch(e) {
            return _this.props.onGoInfo(value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
          shape: "rounded",
          willChangeTransform: false,
          width: "100%",
          height: "60%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          alt: "sava",
          src: _this.props.allPackages[value].packageImage,
          naturalHeight: 1,
          naturalWidth: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          paddingY: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
          size: "xs",
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, " ", _this.props.allPackages[value].packageTitle, " ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, _this.props.allPackages[value].packageDescription))));
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        display: "inlineBlock",
        width: "60vw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
        mouseCursor: "zoomIn",
        shape: "rounded",
        onTouch: function onTouch(e) {
          return _this.props.onGoShopping();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
        shape: "rounded",
        willChangeTransform: false,
        width: "100%",
        height: "40vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "lightGray",
        height: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "add",
        size: 40,
        accessibilityLabel: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })))))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        size: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "G\xF3i tr\xF2 ch\u01A1i ch\u1EE7 \u0111\u1EC1 tr\u1EBB em")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: "100%",
        overflow: "scrollX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        direction: "row",
        height: "50vh",
        width: "max-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.props.childrenPackages.map(function (value) {
        if (_this.props.buy["" + value + ""]) return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          padding: 3,
          display: "inlineBlock",
          width: "60vw",
          key: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
          mouseCursor: "zoomIn",
          shape: "rounded",
          onTouch: function onTouch(e) {
            return _this.props.onGoInfo(value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
          shape: "rounded",
          willChangeTransform: false,
          width: "100%",
          height: "60%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          alt: "Antelope Canyon",
          src: _this.props.allPackages[value].packageImage,
          naturalHeight: 1,
          naturalWidth: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          paddingY: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
          size: "xs",
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, " ", _this.props.allPackages[value].packageTitle, " ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, _this.props.allPackages[value].packageDescription))));
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        display: "inlineBlock",
        width: "60vw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
        mouseCursor: "zoomIn",
        shape: "rounded",
        onTouch: function onTouch(e) {
          return _this.props.onGoShopping();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
        shape: "rounded",
        willChangeTransform: false,
        width: "100%",
        height: "40vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "lightGray",
        height: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "add",
        size: 40,
        accessibilityLabel: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        size: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "G\xF3i gi\u1EA3i tr\xED")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: "100%",
        overflow: "scrollX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        direction: "row",
        height: "50vh",
        width: "max-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, this.props.entertainmentPackages.map(function (value) {
        if (_this.props.buy["" + value + ""]) return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          padding: 3,
          display: "inlineBlock",
          width: "60vw",
          key: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
          mouseCursor: "zoomIn",
          shape: "rounded",
          onTouch: function onTouch(e) {
            return _this.props.onGoInfo(value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
          shape: "rounded",
          willChangeTransform: false,
          width: "100%",
          height: "60%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          alt: "Antelope Canyon",
          src: _this.props.allPackages[value].packageImage,
          naturalHeight: 1,
          naturalWidth: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          paddingY: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
          size: "xs",
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, " ", _this.props.allPackages[value].packageTitle, " ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, _this.props.allPackages[value].packageDescription))));
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        display: "inlineBlock",
        width: "60vw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
        mouseCursor: "zoomIn",
        shape: "rounded",
        onTouch: function onTouch(e) {
          return _this.props.onGoShopping();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
        shape: "rounded",
        willChangeTransform: false,
        width: "100%",
        height: "40vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "lightGray",
        height: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "add",
        size: 40,
        accessibilityLabel: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })))))))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        weight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "H\xE3y th\u1EED s\u1EE9c thi \u0111\u1EA5u ch\u1EE9ng t\u1ECF kh\u1EA3 n\u0103ng b\u1EA3n th\xE2n \u0111i n\xE0o !!!")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        size: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "G\xF3i solo")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        width: "100%",
        overflow: "scrollX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        direction: "row",
        height: "50vh",
        width: "max-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, this.props.competitionPackages.map(function (value) {
        if (_this.props.buy["" + value + ""]) return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          padding: 3,
          display: "inlineBlock",
          width: "60vw",
          key: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
          mouseCursor: "zoomIn",
          shape: "rounded",
          onTouch: function onTouch(e) {
            return _this.props.onGoInfo(value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
          shape: "rounded",
          willChangeTransform: false,
          width: "100%",
          height: "60%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          alt: "Antelope Canyon",
          src: _this.props.allPackages[value].packageImage,
          naturalHeight: 1,
          naturalWidth: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          paddingY: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
          size: "xs",
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, " ", _this.props.allPackages[value].packageTitle, " ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          truncate: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, _this.props.allPackages[value].packageDescription))));
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        padding: 3,
        display: "inlineBlock",
        width: "60vw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Touchable"], {
        mouseCursor: "zoomIn",
        shape: "rounded",
        onTouch: function onTouch(e) {
          return _this.props.onGoShopping();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
        shape: "rounded",
        willChangeTransform: false,
        width: "100%",
        height: "40vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "lightGray",
        height: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "add",
        size: 40,
        accessibilityLabel: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      })))))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.42b27076910fe3de374c.hot-update.js.map