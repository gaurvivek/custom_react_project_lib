"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pencil;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pencil(_ref) {
  let {
    name,
    color,
    size
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon icon-".concat(name),
    width: "".concat(size),
    height: "".concat(size),
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0.75 13.8125V17.25H4.1875L14.3258 7.11167L10.8883 3.67417L0.75 13.8125ZM16.9842 4.45334C17.3417 4.09584 17.3417 3.51834 16.9842 3.16084L14.8392 1.01584C14.4817 0.658336 13.9042 0.658336 13.5467 1.01584L11.8692 2.69334L15.3067 6.13084L16.9842 4.45334Z",
    fill: color
  }));
}

Pencil.propTypes = {
  name: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
Pencil.defaultProps = {
  name: 'PencilIcon',
  color: '#008ABC',
  size: _constants.MENU_ICON_SIZE
};