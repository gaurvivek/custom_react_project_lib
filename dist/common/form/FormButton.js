"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormButton;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormButton(_ref) {
  let {
    disabled,
    variant,
    type,
    btnText,
    otherProps,
    showLoader,
    size,
    dataTestId
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, _extends({
    size: size,
    disabled: disabled,
    variant: variant,
    type: type,
    "data-testid": dataTestId
  }, otherProps), btnText, showLoader && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Spinner, {
    className: "ms-1",
    animation: "border",
    size: "sm"
  }));
}

FormButton.propTypes = {
  size: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  variant: _propTypes.default.string,
  type: _propTypes.default.string,
  btnText: _propTypes.default.string,
  otherProps: _propTypes.default.shape({}),
  showLoader: _propTypes.default.bool,
  dataTestId: _propTypes.default.string
};
FormButton.defaultProps = {
  size: 'md',
  disabled: false,
  variant: 'primary',
  type: 'submit',
  btnText: '',
  otherProps: {},
  showLoader: false,
  dataTestId: 'form-button'
};