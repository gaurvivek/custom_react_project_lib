"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExclamationTriangleFill;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExclamationTriangleFill(_ref) {
  let {
    name,
    color,
    size
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon icon-".concat(name),
    width: "".concat(size, "%"),
    height: "".concat(size, "%"),
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("ellipse", {
    cx: "12",
    cy: "13.5",
    rx: "4",
    ry: "6.5",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.4366 18.6726L13.6477 4.12546C12.7429 2.62485 11.259 2.62485 10.3524 4.12546L1.5635 18.6726C0.656208 20.1732 1.39862 21.4 3.21236 21.4H20.7883C22.602 21.4 23.3431 20.1725 22.4366 18.6726ZM12.2761 15.8775H11.7265C10.99 11.6553 10.623 9.37327 10.623 9.03938C10.623 8.63292 10.7634 8.30402 11.0492 8.05432C11.3283 7.80302 11.6521 7.68018 12.0064 7.68018C12.3878 7.68018 12.7108 7.80947 12.9797 8.07857C13.2435 8.34444 13.3788 8.66039 13.3788 9.02403C13.3788 9.36828 13.0135 11.6553 12.2761 15.8775ZM12.0072 19.0707C12.3403 19.0707 12.6202 18.9568 12.8629 18.7289C13.0988 18.4994 13.218 18.2231 13.218 17.9006C13.218 17.5839 13.0988 17.3115 12.8629 17.0829C12.6202 16.8533 12.3404 16.7378 12.0072 16.7378C11.6681 16.7378 11.3773 16.8542 11.1405 17.0829C10.9046 17.3115 10.7803 17.5839 10.7803 17.9006C10.7803 18.2239 10.9046 18.5002 11.1405 18.7289C11.3772 18.956 11.6681 19.0707 12.0072 19.0707Z",
    fill: color
  }));
}

ExclamationTriangleFill.propTypes = {
  name: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
ExclamationTriangleFill.defaultProps = {
  name: 'ExclamationTriangleFill',
  color: _constants.MENU_ICON_COLOR,
  size: _constants.MENU_ICON_SIZE
};