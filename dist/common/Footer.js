"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterModule = _interopRequireDefault(require("../assets/css/Footer.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line react/prop-types
const Footer = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.FoooterContainer
  }, children));
};

var _default = Footer;
exports.default = _default;