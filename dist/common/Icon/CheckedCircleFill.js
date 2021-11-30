"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckedCircleFill;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckedCircleFill(_ref) {
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
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.078 2.03976C8.54312 2.2751 6.19347 3.46761 4.50701 5.37548C2.82149 7.28331 1.92661 9.76231 2.00471 12.3063C2.08378 14.8514 3.12934 17.2698 4.92922 19.0706C6.7301 20.8705 9.14869 21.916 11.6936 21.9951C14.2378 22.0732 16.7168 21.1783 18.6245 19.4928C20.5323 17.8063 21.7249 15.4567 21.9602 12.9218C22.2244 9.96282 21.163 7.03835 19.0626 4.93709C16.9613 2.83671 14.0371 1.77567 11.078 2.03976ZM17.3719 9.75303L11.4445 15.6179C11.0752 15.9779 10.4855 15.9779 10.1162 15.6179L6.62232 12.2813C6.51395 12.1771 6.43547 12.0535 6.38715 11.9212C6.34026 11.7928 6.32178 11.6563 6.33191 11.5213C6.34794 11.3081 6.43541 11.0989 6.59534 10.9325C6.95997 10.5529 7.56369 10.5399 7.94415 10.9055L10.7636 13.6104L16.0407 8.3975C16.4174 8.04402 17.0071 8.05426 17.3708 8.42262C17.4202 8.47265 17.463 8.52683 17.4991 8.58403C17.5601 8.68072 17.602 8.78606 17.6249 8.89464C17.6253 8.89674 17.6257 8.89884 17.6262 8.90093C17.6273 8.90659 17.6284 8.91226 17.6295 8.91793C17.6547 9.0548 17.6499 9.1962 17.615 9.33145C17.5753 9.48503 17.4967 9.63068 17.3792 9.75279L17.3719 9.75303Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6262 8.90093C17.6257 8.89884 17.6253 8.89674 17.6249 8.89464C17.602 8.78606 17.5601 8.68072 17.4991 8.58403C17.5612 8.68259 17.6036 8.79011 17.6262 8.90093Z",
    fill: color
  }));
}

CheckedCircleFill.propTypes = {
  name: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
CheckedCircleFill.defaultProps = {
  name: 'CheckedCircleFillIcon',
  color: _constants.MENU_ICON_COLOR,
  size: _constants.MENU_ICON_SIZE
};