"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormInput;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormInput(_ref) {
  let {
    size,
    type,
    placeholder,
    otherProps,
    onChange,
    value,
    isInvalid
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, _extends({
    size: size,
    type: type,
    placeholder: placeholder,
    isInvalid: isInvalid,
    onChange: onChange,
    value: value
  }, otherProps));
}

FormInput.propTypes = {
  size: _propTypes.default.string,
  type: _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  otherProps: _propTypes.default.shape({}),
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string
};
FormInput.defaultProps = {
  size: 'lg',
  type: 'text',
  isInvalid: false,
  placeholder: '',
  otherProps: {},
  value: ''
};