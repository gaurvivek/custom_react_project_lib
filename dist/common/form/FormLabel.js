"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormLabel;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormLabel(_ref) {
  let {
    labelText,
    styleClasses,
    otherProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, _extends({
    className: styleClasses
  }, otherProps), labelText);
}

FormLabel.propTypes = {
  styleClasses: _propTypes.default.string,
  labelText: _propTypes.default.oneOfType([_propTypes.default.elementType, _propTypes.default.string]),
  otherProps: _propTypes.default.shape({})
};
FormLabel.defaultProps = {
  styleClasses: 'form-label-bold',
  labelText: '',
  otherProps: {}
};