"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _spinner = _interopRequireDefault(require("../assets/spinner.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loaderStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var _default = () => /*#__PURE__*/_react.default.createElement("div", {
  style: loaderStyle
}, /*#__PURE__*/_react.default.createElement("img", {
  src: _spinner.default,
  alt: "loading"
}));

exports.default = _default;