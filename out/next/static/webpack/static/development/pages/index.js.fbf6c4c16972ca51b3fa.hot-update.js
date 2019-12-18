webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/hammerjs/hammer.js":
false,

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/components/PullDownContent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/components/PullDownContent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.PullDownContent = function (_a) {
    var _b = _a.height, height = _b === void 0 ? "200px" : _b, _c = _a.background, background = _c === void 0 ? "none" : _c, _d = _a.label, label = _d === void 0 ? "Pull down to refresh" : _d;
    return (React.createElement("div", { id: "container2" },
        React.createElement("div", { id: "arrow" }),
        React.createElement("span", null, label),
        React.createElement("style", null, "\n                #container2 {\n                    background: " + background + ";\n                    height: " + height + ";\n                    text-align: center;\n                }\n                #arrow {\n                    margin: 10px auto;\n                    border-left: 15px solid transparent;\n                    border-right: 15px solid transparent;\n                    border-top: 15px solid #666666;\n                    height: 0;\n                    width: 0;\n                    -webkit-animation: fadein 1.5s infinite;\n                    animation: fadein 1.5s infinite;\n                }\n                @keyframes fadein {\n                    0%, 100% {\n                        opacity: 0;\n                    }\n                    45%, 55% {\n                        opacity: 1;\n                    }\n                }\n            ")));
};
//# sourceMappingURL=PullDownContent.js.map

/***/ }),

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/components/PullToRefresh.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/components/PullToRefresh.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var isScrollable_1 = __webpack_require__(/*! ../isScrollable */ "./node_modules/react-js-pull-to-refresh/dist/src/isScrollable.js");
var PullToRefresh = /** @class */ (function (_super) {
    __extends(PullToRefresh, _super);
    function PullToRefresh(props) {
        var _this = _super.call(this, props) || this;
        _this.dragging = false;
        _this.startY = 0;
        _this.currentY = 0;
        _this.state = {
            pullToRefreshThresholdBreached: false,
            maxPullDownDistance: 0,
            onRefreshing: false,
        };
        _this.containerRef = _this.containerRef.bind(_this);
        _this.pullDownRef = _this.pullDownRef.bind(_this);
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    PullToRefresh.prototype.containerRef = function (container) {
        this.container = container;
    };
    PullToRefresh.prototype.pullDownRef = function (pullDown) {
        this.pullDown = pullDown;
        var maxPullDownDistance = this.pullDown && this.pullDown.firstChild && this.pullDown.firstChild["getBoundingClientRect"]
            ? this.pullDown.firstChild["getBoundingClientRect"]().height : 0;
        this.setState({ maxPullDownDistance: maxPullDownDistance });
    };
    PullToRefresh.prototype.componentDidMount = function () {
        if (!this.container) {
            return;
        }
        this.container.addEventListener("touchstart", this.onTouchStart);
        this.container.addEventListener("touchmove", this.onTouchMove);
        this.container.addEventListener("touchend", this.onEnd);
        this.container.addEventListener("mousedown", this.onTouchStart);
        this.container.addEventListener("mousemove", this.onTouchMove);
        this.container.addEventListener("mouseup", this.onEnd);
    };
    PullToRefresh.prototype.componentWillUnmount = function () {
        if (!this.container) {
            return;
        }
        this.container.removeEventListener("touchstart", this.onTouchStart);
        this.container.removeEventListener("touchmove", this.onTouchMove);
        this.container.removeEventListener("touchend", this.onEnd);
        this.container.removeEventListener("mousedown", this.onTouchStart);
        this.container.removeEventListener("mousemove", this.onTouchMove);
        this.container.removeEventListener("mouseup", this.onEnd);
    };
    PullToRefresh.prototype.onTouchStart = function (e) {
        var _a = this.props.triggerHeight, triggerHeight = _a === void 0 ? 40 : _a;
        this.startY = e["pageY"] || e.touches[0].pageY;
        this.currentY = this.startY;
        if (triggerHeight === "auto") {
            var target = e.target;
            var container = this.container;
            if (!container) {
                return;
            }
            // an element we're touching can be scrolled up, so gesture is going to be a scroll gesture
            if (e.type === "touchstart" && isScrollable_1.isTreeScrollable(target, isScrollable_1.DIRECTION.up)) {
                return;
            }
            // even though we're not scrolling, the pull-to-refresh isn't visible to the user so cancel
            if (container.getBoundingClientRect().top < 0) {
                return;
            }
        }
        else {
            var top_1 = this.container.getBoundingClientRect().top || this.container.getBoundingClientRect().y || 0;
            if (this.startY - top_1 > triggerHeight) {
                return;
            }
        }
        this.dragging = true;
        this.container.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
        this.pullDown.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
    };
    PullToRefresh.prototype.onTouchMove = function (e) {
        if (!this.dragging) {
            return;
        }
        this.currentY = e["pageY"] || e.touches[0].pageY;
        if (this.currentY < this.startY) {
            return;
        }
        e.preventDefault();
        if ((this.currentY - this.startY) >= this.props.pullDownThreshold) {
            this.setState({
                pullToRefreshThresholdBreached: true,
            });
        }
        if (this.currentY - this.startY > this.state.maxPullDownDistance) {
            return;
        }
        this.container.style.overflow = "visible";
        this.container.style.transform = "translate(0px, " + (this.currentY - this.startY) + "px)";
        this.pullDown.style.visibility = "visible";
    };
    PullToRefresh.prototype.onEnd = function () {
        var _this = this;
        this.dragging = false;
        this.startY = 0;
        this.currentY = 0;
        if (!this.state.pullToRefreshThresholdBreached) {
            this.pullDown.style.visibility = this.props.startInvisible ? "hidden" : "visible";
            this.initContainer();
            return;
        }
        this.container.style.overflow = "visible";
        this.container.style.transform = "translate(0px, " + this.props.pullDownThreshold + "px)";
        this.setState({
            onRefreshing: true,
        }, function () {
            _this.props.onRefresh().then(function () {
                _this.initContainer();
                setTimeout(function () {
                    _this.setState({
                        onRefreshing: false,
                        pullToRefreshThresholdBreached: false,
                    });
                }, 200);
            });
        });
    };
    PullToRefresh.prototype.initContainer = function () {
        var _this = this;
        requestAnimationFrame(function () {
            if (_this.container) {
                _this.container.style.overflow = "auto";
                _this.container.style.transform = "none";
            }
        });
    };
    PullToRefresh.prototype.renderPullDownContent = function () {
        var _a = this.props, releaseContent = _a.releaseContent, pullDownContent = _a.pullDownContent, refreshContent = _a.refreshContent, startInvisible = _a.startInvisible;
        var _b = this.state, onRefreshing = _b.onRefreshing, pullToRefreshThresholdBreached = _b.pullToRefreshThresholdBreached;
        var content = onRefreshing ? refreshContent : pullToRefreshThresholdBreached ? releaseContent : pullDownContent;
        var contentStyle = {
            position: "absolute",
            overflow: "hidden",
            left: 0,
            right: 0,
            top: 0,
            visibility: startInvisible ? "hidden" : "visible",
        };
        return (React.createElement("div", { style: contentStyle, ref: this.pullDownRef }, content));
    };
    PullToRefresh.prototype.render = function () {
        var backgroundColor = this.props.backgroundColor;
        var containerStyle = {
            height: "auto",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            position: "relative",
            zIndex: 1,
        };
        if (backgroundColor) {
            containerStyle.backgroundColor = backgroundColor;
        }
        return (React.createElement("div", { style: containerStyle },
            this.renderPullDownContent(),
            React.createElement("div", { ref: this.containerRef, style: containerStyle }, this.props.children)));
    };
    return PullToRefresh;
}(React.Component));
exports.PullToRefresh = PullToRefresh;
//# sourceMappingURL=PullToRefresh.js.map

/***/ }),

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/components/RefreshContent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/components/RefreshContent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.RefreshContent = function (_a) {
    var _b = _a.height, height = _b === void 0 ? "200px" : _b, _c = _a.background, background = _c === void 0 ? "none" : _c;
    return (React.createElement("div", { id: "container" },
        React.createElement("div", { className: "sk-fading-circle" },
            React.createElement("div", { className: "sk-circle1 sk-circle" }),
            React.createElement("div", { className: "sk-circle2 sk-circle" }),
            React.createElement("div", { className: "sk-circle3 sk-circle" }),
            React.createElement("div", { className: "sk-circle4 sk-circle" }),
            React.createElement("div", { className: "sk-circle5 sk-circle" }),
            React.createElement("div", { className: "sk-circle6 sk-circle" }),
            React.createElement("div", { className: "sk-circle7 sk-circle" }),
            React.createElement("div", { className: "sk-circle8 sk-circle" }),
            React.createElement("div", { className: "sk-circle9 sk-circle" }),
            React.createElement("div", { className: "sk-circle10 sk-circle" }),
            React.createElement("div", { className: "sk-circle11 sk-circle" }),
            React.createElement("div", { className: "sk-circle12 sk-circle" })),
        React.createElement("style", null, "\n            #container {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                background: " + background + ";\n                height: " + height + ";\n            }\n            .sk-fading-circle {\n                width: 40px;\n                height: 40px;\n                position: relative;\n                margin: auto;\n            }\n            .sk-fading-circle .sk-circle {\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .sk-fading-circle .sk-circle:before {\n                content: '';\n                display: block;\n                margin: 0 auto;\n                width: 15%;\n                height: 15%;\n                background-color: #333;\n                border-radius: 100%;\n                -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n                animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n            }\n            .sk-fading-circle .sk-circle2 {\n                -webkit-transform: rotate(30deg);\n                -ms-transform: rotate(30deg);\n                transform: rotate(30deg);\n            }\n            .sk-fading-circle .sk-circle3 {\n                -webkit-transform: rotate(60deg);\n                -ms-transform: rotate(60deg);\n                transform: rotate(60deg);\n            }\n            .sk-fading-circle .sk-circle4 {\n                -webkit-transform: rotate(90deg);\n                -ms-transform: rotate(90deg);\n                transform: rotate(90deg);\n            }\n            .sk-fading-circle .sk-circle5 {\n                -webkit-transform: rotate(120deg);\n                -ms-transform: rotate(120deg);\n                transform: rotate(120deg);\n            }\n            .sk-fading-circle .sk-circle6 {\n                -webkit-transform: rotate(150deg);\n                -ms-transform: rotate(150deg);\n                transform: rotate(150deg);\n            }\n            .sk-fading-circle .sk-circle7 {\n                -webkit-transform: rotate(180deg);\n                -ms-transform: rotate(180deg);\n                transform: rotate(180deg);\n            }\n            .sk-fading-circle .sk-circle8 {\n                -webkit-transform: rotate(210deg);\n                -ms-transform: rotate(210deg);\n                transform: rotate(210deg);\n            }\n            .sk-fading-circle .sk-circle9 {\n                -webkit-transform: rotate(240deg);\n                -ms-transform: rotate(240deg);\n                transform: rotate(240deg);\n            }\n            .sk-fading-circle .sk-circle10 {\n                -webkit-transform: rotate(270deg);\n                -ms-transform: rotate(270deg);\n                transform: rotate(270deg);\n            }\n            .sk-fading-circle .sk-circle11 {\n                -webkit-transform: rotate(300deg);\n                -ms-transform: rotate(300deg);\n                transform: rotate(300deg);\n            }\n            .sk-fading-circle .sk-circle12 {\n                -webkit-transform: rotate(330deg);\n                -ms-transform: rotate(330deg);\n                transform: rotate(330deg);\n            }\n            .sk-fading-circle .sk-circle2:before {\n                -webkit-animation-delay: -1.1s;\n                animation-delay: -1.1s;\n            }\n            .sk-fading-circle .sk-circle3:before {\n                -webkit-animation-delay: -1s;\n                animation-delay: -1s;\n            }\n            .sk-fading-circle .sk-circle4:before {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n            .sk-fading-circle .sk-circle5:before {\n                -webkit-animation-delay: -0.8s;\n                animation-delay: -0.8s;\n            }\n            .sk-fading-circle .sk-circle6:before {\n                -webkit-animation-delay: -0.7s;\n                animation-delay: -0.7s;\n            }\n            .sk-fading-circle .sk-circle7:before {\n                -webkit-animation-delay: -0.6s;\n                animation-delay: -0.6s;\n            }\n            .sk-fading-circle .sk-circle8:before {\n                -webkit-animation-delay: -0.5s;\n                animation-delay: -0.5s;\n            }\n            .sk-fading-circle .sk-circle9:before {\n                -webkit-animation-delay: -0.4s;\n                animation-delay: -0.4s;\n            }\n            .sk-fading-circle .sk-circle10:before {\n                -webkit-animation-delay: -0.3s;\n                animation-delay: -0.3s;\n            }\n            .sk-fading-circle .sk-circle11:before {\n                -webkit-animation-delay: -0.2s;\n                animation-delay: -0.2s;\n            }\n            .sk-fading-circle .sk-circle12:before {\n                -webkit-animation-delay: -0.1s;\n                animation-delay: -0.1s;\n            }\n            @-webkit-keyframes sk-circleFadeDelay {\n                0%, 39%, 100% {\n                    opacity: 0;\n                }\n                40% {\n                    opacity: 1;\n                }\n            }\n            @keyframes sk-circleFadeDelay {\n                0%, 39%, 100% {\n                  opacity: 0;\n                }\n                40% {\n                  opacity: 1;\n                }\n            }\n        ")));
};
//# sourceMappingURL=RefreshContent.js.map

/***/ }),

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/components/ReleaseContent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/components/ReleaseContent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.ReleaseContent = function (_a) {
    var _b = _a.height, height = _b === void 0 ? "200px" : _b, _c = _a.background, background = _c === void 0 ? "none" : _c, _d = _a.label, label = _d === void 0 ? "Release to refresh" : _d;
    return (React.createElement("div", { id: "container" },
        React.createElement("div", { id: "arrow" }),
        React.createElement("span", null, label),
        React.createElement("style", null, "\n            #container {\n                background: " + (background || "none") + ";\n                height: " + (height || "200px") + ";\n                text-align: center;\n            }\n            #arrow {\n                margin: 10px auto;\n                border-left: 15px solid transparent;\n                border-right: 15px solid transparent;\n                border-bottom: 15px solid #666666;\n                height: 0;\n                width: 0;\n\n                -webkit-animation: fadein 1.5s infinite;\n                animation: fadein 1.5s infinite;\n            }\n            @keyframes fadein {\n                0%, 100% {\n                    opacity: 0;\n                }\n                45%, 55% {\n                    opacity: 1;\n                }\n            }\n        ")));
};
//# sourceMappingURL=ReleaseContent.js.map

/***/ }),

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PullToRefresh_1 = __webpack_require__(/*! ./components/PullToRefresh */ "./node_modules/react-js-pull-to-refresh/dist/src/components/PullToRefresh.js");
exports.PullToRefresh = PullToRefresh_1.PullToRefresh;
var RefreshContent_1 = __webpack_require__(/*! ./components/RefreshContent */ "./node_modules/react-js-pull-to-refresh/dist/src/components/RefreshContent.js");
exports.RefreshContent = RefreshContent_1.RefreshContent;
var PullDownContent_1 = __webpack_require__(/*! ./components/PullDownContent */ "./node_modules/react-js-pull-to-refresh/dist/src/components/PullDownContent.js");
exports.PullDownContent = PullDownContent_1.PullDownContent;
var ReleaseContent_1 = __webpack_require__(/*! ./components/ReleaseContent */ "./node_modules/react-js-pull-to-refresh/dist/src/components/ReleaseContent.js");
exports.ReleaseContent = ReleaseContent_1.ReleaseContent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-js-pull-to-refresh/dist/src/isScrollable.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-js-pull-to-refresh/dist/src/isScrollable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DIRECTION = Object.freeze({
    up: -1,
    down: 1,
});
function isOverflowScrollable(element) {
    var overflowType = getComputedStyle(element).overflowY;
    if (element === document.scrollingElement && overflowType === "visible") {
        return true;
    }
    if (overflowType !== "scroll" && overflowType !== "auto") {
        return false;
    }
    return true;
}
/**
 * Returns whether a given element is scrollable in a given direction.
 * This only checks this element, not any of its ancestors.
 *
 * @param {!Element} element The DOM element to check
 * @param {!number} direction The direction (see {@link DIRECTION})
 * @returns {!boolean} Whether the element is scrollable
 */
function isScrollable(element, direction) {
    if (!isOverflowScrollable(element)) {
        return false;
    }
    if (direction === exports.DIRECTION.down) {
        var bottomScroll = element.scrollTop + element.clientHeight;
        return bottomScroll < element.scrollHeight;
    }
    if (direction === exports.DIRECTION.up) {
        return element.scrollTop > 0;
    }
    throw new Error("unsupported direction");
}
/**
 * Returns whether a given element or any of its ancestors (up to rootElement) is scrollable in a given direction.
 *
 * @param {!Element} element The leaf of the DOM tree to check
 * @param {!number} dir The direction (see {@link DIRECTION})
 * @returns {!boolean} Whether the element or one of its ancestors is scrollable.
 */
function isTreeScrollable(element, dir) {
    if (isScrollable(element, dir)) {
        return true;
    }
    // if a body is overflow: hidden, scrolling will be disabled even though scrollingElement will report that it is not.
    if (element === document.body && getComputedStyle(document.body).overflowY === "hidden") {
        return false;
    }
    if (element.parentElement == null) {
        return false;
    }
    return isTreeScrollable(element.parentElement, dir);
}
exports.isTreeScrollable = isTreeScrollable;
//# sourceMappingURL=isScrollable.js.map

/***/ }),

/***/ "./node_modules/react-pull-to-refresh/lib/components/ReactPullToRefresh.js":
false,

/***/ "./node_modules/react-pull-to-refresh/lib/index.js":
false,

/***/ "./node_modules/react-pull-to-refresh/lib/pull-to-refresh/wptr.1.1.js":
false,

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
      });else return __jsx(react_js_pull_to_refresh__WEBPACK_IMPORTED_MODULE_11__["ReactPullToRefresh"], {
        onRefresh: function onRefresh(s) {
          _this4.refresh();

          s();
        },
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
//# sourceMappingURL=index.js.fbf6c4c16972ca51b3fa.hot-update.js.map