webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gestalt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gestalt */ "./node_modules/gestalt/dist/gestalt.es.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_js_pull_to_refresh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-js-pull-to-refresh */ "./node_modules/react-js-pull-to-refresh/dist/src/index.js");
/* harmony import */ var react_js_pull_to_refresh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_js_pull_to_refresh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home */ "./components/home.js");
/* harmony import */ var _components_ranking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ranking */ "./components/ranking.js");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/event */ "./components/event.js");
/* harmony import */ var _components_mission__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/mission */ "./components/mission.js");
/* harmony import */ var _components_shopping__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/shopping */ "./components/shopping.js");
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/profile */ "./components/profile.js");
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/info */ "./components/info.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/game */ "./components/game.js");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! gestalt/dist/gestalt.css */ "./node_modules/gestalt/dist/gestalt.css");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_22__);








var _jsxFileName = "/home/daovietanh99/Documents/sava-gestalt/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;















var Main =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Main, _React$Component);

  function Main(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Main);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Main).call(this, props));
    _this.state = {
      page: "main",
      route: "home",
      id: "",
      data: [],
      name: "",
      family: "Book Family",
      rank: "",
      score: 0,
      avatar: "",
      cover: "",
      allPackages: [],
      familyPackages: [],
      childrenPackages: [],
      competitionPackages: [],
      entertainmentPackages: [],
      events: [],
      buy: {
        "1": true
      },
      show: true,
      choosePackage: null,
      mission: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.verify();
    }
  }, {
    key: "buyPackage",
    value: function buyPackage(index) {
      this.setState(function (prevState) {
        prevState["" + index + ""] = true;
        return {
          buy: prevState
        };
      });
    }
  }, {
    key: "choosePackage",
    value: function choosePackage(index) {
      this.setState({
        choosePackage: index
      });
    }
  }, {
    key: "verify",
    value: function verify() {
      var _this2 = this;

      var token = localStorage.getItem('token');

      if (token) {
        fetch('https://savacloud.herokuapp.com/verify', {
          method: "GET",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': token
          }
        }).then(function (result) {
          if (result.status === 200) return result.json();else throw Error("lỗi đăng nhập");
        }).then(function (result) {
          if (result.error) throw Error("lỗi token");

          _this2.fetchData();
        })["catch"](function (e) {
          localStorage.removeItem('token');

          _this2.setState({
            page: 'login'
          });
        });
      } else this.setState({
        page: 'login'
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this3 = this;

      var decode = atob(window.localStorage.getItem('token').split('.')[1]);
      var info = JSON.parse(decode);
      this.setState({
        id: info.userId,
        data: [{
          label: "Khả năng",
          backgroundColor: "rgb(145, 229, 246, 0.5)",
          borderColor: 'rgb(54, 162, 235)',
          data: [info.info.math, info.info.physic, info.info.chemistry, info.info.literature, info.info.history, info.info.geography, info.info.skill, info.info.linked],
          fill: 'origin'
        }],
        name: decodeURIComponent(escape(info.info.name)),
        family: "Book Family",
        rank: "",
        score: info.info.scores,
        avatar: info.info.avatar,
        cover: info.info.cover
      });

      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all([fetch('https://script.google.com/macros/s/AKfycbxXAz_BiTl-g4fVcN_5_HwouklaD1XMrF1CXMYWO4dp0VgHi10/exec').then(function (result) {
        return result.json();
      }).then(function (result) {
        _this3.setState({
          ads: result.result
        });
      }), fetch('https://script.google.com/macros/s/AKfycbxhPOYd6asdd_w9c6iB3CCdzsg4VYzFh7qKgZiNi-IKlcOo665O/exec').then(function (result) {
        return result.json();
      }).then(function (result) {
        _this3.setState({
          events: result.result
        });
      }), fetch('https://script.google.com/macros/s/AKfycbwgXrL-ZO5fryEonD6VWLJhsaxZg2VtaH-A9rLIoNZLLkQWTfM/exec').then(function (result) {
        return result.json();
      }).then(function (result) {
        _this3.setState({
          allPackages: result.result,
          familyPackages: [],
          childrenPackages: [],
          competitionPackages: [],
          entertainmentPackages: []
        });

        result.result.map(function (ele, index) {
          switch (ele.packageType) {
            case 'FAMILY':
              _this3.setState({
                familyPackages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.state.familyPackages), [index])
              });

              break;

            case 'CHILDREN':
              _this3.setState({
                childrenPackages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.state.childrenPackages), [index])
              });

              break;

            case 'COMPETITION':
              _this3.setState({
                competitionPackages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.state.competitionPackages), [index])
              });

              break;

            case 'ENTERTAINMENT':
              _this3.setState({
                entertainmentPackages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.state.entertainmentPackages), [index])
              });

              break;
          }
        });
      })]).then(function (result) {
        _this3.setState({
          show: false
        });
      });
    }
  }, {
    key: "changeRoute",
    value: function changeRoute(route) {
      this.setState({
        route: route
      });
    }
  }, {
    key: "changePage",
    value: function changePage(route) {
      this.setState({
        page: route,
        route: 'home'
      });
      if (route === "main") this.verify();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.setState({
        show: true
      });
      this.verify();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.page === 'login') return __jsx(_components_login__WEBPACK_IMPORTED_MODULE_19__["default"], {
        changeRoute: function changeRoute(route) {
          return _this4.changePage(route);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      });else if (this.state.page === 'game') return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_20__["default"], {
        changeRoute: function changeRoute(route) {
          return _this4.changePage(route);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      });else if (this.state.page === 'register') return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_20__["default"], {
        changeRoute: function changeRoute(route) {
          return _this4.changePage(route);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      });else if (this.state.page === 'fogot') return __jsx(_components_game__WEBPACK_IMPORTED_MODULE_20__["default"], {
        changeRoute: function changeRoute(route) {
          return _this4.changePage(route);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      });else return __jsx(react_js_pull_to_refresh__WEBPACK_IMPORTED_MODULE_11__["PullToRefresh"], {
        onRefresh: function onRefresh(s) {
          _this4.refresh();
        },
        pullDownThreshold: 200,
        o: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        height: "100vh",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, this.state.route === "info" ? __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        width: "100%",
        height: "4rem",
        paddingY: 2,
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        icon: "arrow-back",
        onClick: function onClick(e) {
          _this4.changeRoute('home');
        },
        accessibilityLabel: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        text: "Tham gia",
        color: "blue",
        onClick: function onClick(e) {
          _this4.changePage('game');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })))) : this.state.route === "profile" ? __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        width: "100%",
        height: "4rem",
        paddingY: 2,
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        icon: "arrow-back",
        onClick: function onClick(e) {
          _this4.changeRoute('home');
        },
        accessibilityLabel: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        text: "\u0110\u0103ng xu\u1EA5t",
        color: "red",
        onClick: function onClick(e) {
          localStorage.removeItem('token'), _this4.changePage('login');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })))) : this.state.route === "infoshop" ? __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        width: "100%",
        height: "4rem",
        paddingY: 2,
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        icon: "arrow-back",
        onClick: function onClick(e) {
          _this4.changeRoute('shopping');
        },
        accessibilityLabel: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        text: this.state.buy["" + this.state.choosePackage + ""] ? "Đã mua" : "Mua ngay",
        onClick: function onClick(e) {
          return _this4.buyPackage(_this4.state.choosePackage);
        },
        color: this.state.buy["" + this.state.choosePackage + ""] ? "blue" : "gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      })))) : __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        alignItems: "center",
        direction: "row",
        display: "flex",
        width: "100%",
        height: "3rem",
        paddingY: 2,
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 2,
        width: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("div", {
        onClick: function onClick(e) {
          return _this4.changeRoute('profile');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Avatar"], {
        name: this.state.name,
        size: "sm",
        src: this.state.avatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, " xin ch\xE0o ")), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        paddingX: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        weight: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, " ", this.state.name, " "))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        margin: 2,
        display: this.state.show ? "block" : "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
        accessibilityLabel: "data spinner",
        show: this.state.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        height: this.state.route === "profile" || this.state.route === "info" || this.state.route === "infoshop" ? "calc(100vh - 4rem - 3.8rem)" : "calc(100vh - 3rem - 3.8rem)",
        width: "100%",
        overflow: "scrollY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, this.state.route === "home" ? __jsx(_components_home__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onGoShopping: function onGoShopping() {
          return _this4.changeRoute('shopping');
        },
        onGoInfo: function onGoInfo(index) {
          _this4.changeRoute('info');

          _this4.choosePackage(index);
        }
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      })) : this.state.route === "ranking" ? __jsx(_components_ranking__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      })) : this.state.route === "event" ? __jsx(_components_event__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })) : this.state.route === "mission" ? __jsx(_components_mission__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      })) : this.state.route === "shopping" ? __jsx(_components_shopping__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        buyPackage: function buyPackage(value) {
          return _this4.buyPackage(value);
        },
        onGoInfo: function onGoInfo(index) {
          _this4.changeRoute('infoshop');

          _this4.choosePackage(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      })) : this.state.route === "profile" ? __jsx(_components_profile__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      })) : __jsx(_components_info__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        position: "fixed",
        bottom: true,
        left: true,
        direction: "row",
        display: "flex",
        width: "100%",
        height: "3.6rem",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        justifyContent: "center",
        width: "20%",
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiHomeOutline"], {
        size: "27",
        color: this.state.route === "home" ? "#59a5d8" : "#8e8e8e",
        onClick: function onClick(e) {
          return _this4.changeRoute('home');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        justifyContent: "center",
        width: "20%",
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiChartAreaOutline"], {
        size: "27",
        color: this.state.route === "ranking" ? "#59a5d8" : "#8e8e8e",
        onClick: function onClick(e) {
          return _this4.changeRoute('ranking');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        justifyContent: "center",
        width: "20%",
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiCalendarOutline"], {
        size: "27",
        color: this.state.route === "event" ? "#59a5d8" : "#8e8e8e",
        onClick: function onClick(e) {
          return _this4.changeRoute('event');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        justifyContent: "center",
        width: "20%",
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiTags"], {
        size: "27",
        color: this.state.route === "mission" ? "#59a5d8" : "#8e8e8e",
        onClick: function onClick(e) {
          return _this4.changeRoute('mission');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        justifyContent: "center",
        width: "20%",
        display: "flex",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_10__["TiShoppingCart"], {
        size: "27",
        color: this.state.route === "shopping" ? "#59a5d8" : "#8e8e8e",
        onClick: function onClick(e) {
          return _this4.changeRoute('shopping');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      })))));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.17e25d5b3d3883672e23.hot-update.js.map