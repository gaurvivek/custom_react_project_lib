"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormDropDown;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

const _excluded = ["name", "placeholder", "options", "isInvalid", "value", "onChange", "size", "dataTestId"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormDropDown(_ref) {
  let {
    name,
    placeholder,
    options,
    isInvalid,
    value,
    onChange,
    size,
    dataTestId
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Select, _extends({
    "aria-label": placeholder,
    size: size,
    value: value,
    name: name,
    onChange: onChange,
    isInvalid: isInvalid,
    "data-testid": dataTestId,
    defaultValue: value
  }, otherProps), /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    key: ""
  }, placeholder), options && options.map(option => /*#__PURE__*/_react.default.createElement("option", {
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
  name: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  otherProps: _propTypes.default.shape({}),
  defaultValue: _propTypes.default.string,
  dataTestId: _propTypes.default.string
};
FormDropDown.defaultProps = {
  isInvalid: false,
  size: 'lg',
  placeholder: '',
  value: '',
  otherProps: {},
  defaultValue: '',
  dataTestId: 'form-select'
};