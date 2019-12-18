webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/info.js":
/*!****************************!*\
  !*** ./components/info.js ***!
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
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");





var _jsxFileName = "/home/daovietanh99/Documents/sava-gestalt/components/info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Info =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Info, _React$Component);

  function Info() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Info);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Info).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Info, [{
    key: "render",
    value: function render() {
      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        height: "40vh",
        paddingY: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Mask"], {
        shape: "rounded",
        height: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Image"], {
        alt: "",
        src: this.props.allPackages[this.props.choosePackage].packageImage,
        naturalHeight: 1,
        naturalWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "G\xF3i d\u1EEF li\u1EC7u t\u1EEB"), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        weight: "bold",
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, " app.sava.google.drive")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        size: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.allPackages[this.props.choosePackage].packageTitle)), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        paddingX: 2,
        marginTop: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, " ", this.props.allPackages[this.props.choosePackage].packageDescription, " ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        paddingX: 2,
        marginTop: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_6__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " ", this.props.allPackages[this.props.choosePackage].packageLongDescription)));
    }
  }]);

  return Info;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ })

})
//# sourceMappingURL=index.js.fcc18a40d1ece1639e8f.hot-update.js.map