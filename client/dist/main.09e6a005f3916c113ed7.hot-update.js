"use strict";
self["webpackHotUpdateportfolio"]("main",{

/***/ "./client/src/smallWidgets/TopBar.jsx":
/*!********************************************!*\
  !*** ./client/src/smallWidgets/TopBar.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cssModules/smallWidgetsStyles.module.css */ "./client/src/cssModules/smallWidgetsStyles.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var buttons = ['Home', 'Projects', 'About', 'Contact'];
var scrollPositions = {};
var sectionPositions = {
  Home: 0
};
var prevScrollPos = 0;
var scrollTo = function scrollTo(name) {
  window.scrollTo({
    top: sectionPositions[name],
    behavior: 'smooth'
  });
};
var TopBar = function TopBar() {
  var targetElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    buttonElements = _useState2[0],
    setButtonElements = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    barPosition = _useState4[0],
    setBarPosition = _useState4[1];
  var setPositions = function setPositions() {
    if (buttonElements.length < 1 && !scrollPositions.Home) {
      return;
    }
    window.scrollTo({
      top: 0
    });
    sectionPositions.Projects = document.getElementById('projects').getBoundingClientRect().top;
    sectionPositions.About = document.getElementById('about').getBoundingClientRect().top;
    sectionPositions.Contact = document.getElementById('contact').getBoundingClientRect().top;
    var elements = targetElementRef.current.children;
    for (var i = 0; i < elements.length; i++) {
      scrollPositions[elements[i].id] = elements[i].getBoundingClientRect().left;
    }
    setBarPosition(scrollPositions.Home);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var elements = [];
    buttons.forEach(function (name) {
      elements.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]['top-buttons'],
        id: name,
        onClick: function onClick() {
          return scrollTo(name);
        },
        children: name
      }, name));
      setButtonElements(elements);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var scrollPosition = window.scrollY;
      if (Math.abs(scrollPosition - prevScrollPos) < 100) {
        //For performance
        return;
      }
      prevScrollPos = scrollPosition;
      var min;
      var minKey;
      for (var key in sectionPositions) {
        var distance = Math.abs(sectionPositions[key] - scrollPosition);
        if (distance < min || min === undefined) {
          min = distance;
          minKey = key;
        }
      }
      if (min !== undefined) {
        setBarPosition(scrollPositions[minKey]);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setPositions);
    return function () {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setPositions);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(setPositions, [buttonElements]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]['top-element'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]['top-bar'],
      ref: targetElementRef,
      children: buttonElements
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
      id: _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"]['scroll-bar'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
        x: barPosition + 'px',
        id: _cssModules_smallWidgetsStyles_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].bar,
        fill: "#0073cf",
        rx: "4px",
        ry: "4px"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("682a9f494e73e79c959b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.09e6a005f3916c113ed7.hot-update.js.map