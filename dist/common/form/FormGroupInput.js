"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormGroupInput;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _FormInput = _interopRequireDefault(require("./FormInput"));

var _FormFeedback = _interopRequireDefault(require("./FormFeedback"));

var _EyeSlash = _interopRequireDefault(require("../Icon/EyeSlash"));

var _Eye = _interopRequireDefault(require("../Icon/Eye"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// For email, password & text input
function FormGroupInput(_ref) {
  let {
    groupProps,
    labelProps,
    inputProps,
    feedBackProps
  } = _ref;
  const {
    labelText
  } = labelProps;
  const {
    type,
    value,
    onChange,
    placeholder,
    isInvalid,
    otherProps
  } = inputProps;
  const {
    type: feedbackType,
    message
  } = feedBackProps;
  const [passwordCtrlType, setPasswordCtrlType] = (0, _react.useState)(type === 'password' ? 'password' : type);

  const togglePasswordType = () => {
    const ptype = passwordCtrlType === 'password' ? 'text' : 'password';
    setPasswordCtrlType(ptype);
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, groupProps, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    labelText: labelText
  }), /*#__PURE__*/_react.default.createElement(_FormInput.default, {
    type: passwordCtrlType,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    isInvalid: isInvalid,
    otherProps: type === 'password' ? _objectSpread(_objectSpread({}, otherProps), {}, {
      className: 'ccw-password'
    }) : _objectSpread({}, otherProps)
  }), type === 'password' && /*#__PURE__*/_react.default.createElement("div", {
    className: "show-hide-pass"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle-password",
    "data-testid": "toggle-password",
    onClick: () => togglePasswordType()
  }, passwordCtrlType === 'password' ? /*#__PURE__*/_react.default.createElement(_EyeSlash.default, {
    size: 70
  }) : /*#__PURE__*/_react.default.createElement(_Eye.default, {
    size: 70
  }))), /*#__PURE__*/_react.default.createElement(_FormFeedback.default, {
    type: feedbackType,
    message: message
  }));
}

FormGroupInput.propTypes = {
  groupProps: _propTypes.default.shape({
    controlId: _propTypes.default.string
  }),
  labelProps: _propTypes.default.shape({
    labelText: _propTypes.default.oneOfType([_propTypes.default.elementType, _propTypes.default.string]),
    disabled: _propTypes.default.bool
  }),
  inputProps: _propTypes.default.shape({
    value: _propTypes.default.string,
    onChange: _propTypes.default.func.isRequired,
    placeholder: _propTypes.default.string,
    type: _propTypes.default.string,
    isInvalid: _propTypes.default.bool,
    otherProps: _propTypes.default.shape({})
  }),
  feedBackProps: _propTypes.default.shape({
    type: _propTypes.default.string,
    message: _propTypes.default.string
  })
};
FormGroupInput.defaultProps = {
  groupProps: {},
  labelProps: {
    labelText: '',
    disabled: false
  },
  inputProps: {
    value: '',
    placeholder: '',
    type: 'text',
    isInvalid: false,
    otherProps: {}
  },
  feedBackProps: {
    type: '',
    message: ''
  }
};