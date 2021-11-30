"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormDropDown;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormDropDown(_ref) {
  let {
    placeholder,
    options,
    isInvalid,
    value,
    onChange,
    size
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Select, {
    "aria-label": placeholder,
    size: size,
    value: value,
    onChange: onChange,
    isInvalid: isInvalid
  }, /*#__PURE__*/_react.default.createElement("option", null, placeholder), options && options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.key,
    value: option.key
  }, option.value))));
}

FormDropDown.propTypes = {
  isInvalid: _propTypes.default.bool,
  size: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })).isRequired,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string
};
FormDropDown.defaultProps = {
  isInvalid: false,
  size: 'lg',
  placeholder: '',
  value: ''
};