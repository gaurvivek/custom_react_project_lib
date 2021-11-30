"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormGroupSelect;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _FormFeedback = _interopRequireDefault(require("./FormFeedback"));

var _FormDropdown = _interopRequireDefault(require("./FormDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For select dropdown
function FormGroupSelect(_ref) {
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
    options,
    value,
    onChange,
    placeholder,
    isInvalid
  } = inputProps;
  const {
    type: feedbackType,
    message
  } = feedBackProps;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, groupProps, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    labelText: labelText
  }), /*#__PURE__*/_react.default.createElement(_FormDropdown.default, {
    options: options,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    isInvalid: isInvalid
  }), /*#__PURE__*/_react.default.createElement(_FormFeedback.default, {
    type: feedbackType,
    message: message
  }));
}

FormGroupSelect.propTypes = {
  groupProps: _propTypes.default.shape({
    controlId: _propTypes.default.string
  }),
  labelProps: _propTypes.default.shape({
    labelText: _propTypes.default.oneOfType([_propTypes.default.elementType, _propTypes.default.string])
  }),
  inputProps: _propTypes.default.shape({
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      key: _propTypes.default.string,
      value: _propTypes.default.string
    })).isRequired,
    value: _propTypes.default.string,
    onChange: _propTypes.default.func.isRequired,
    placeholder: _propTypes.default.string,
    type: _propTypes.default.string,
    isInvalid: _propTypes.default.bool
  }),
  feedBackProps: _propTypes.default.shape({
    type: _propTypes.default.string,
    message: _propTypes.default.string
  })
};
FormGroupSelect.defaultProps = {
  groupProps: {},
  labelProps: {
    labelText: ''
  },
  inputProps: {
    options: [],
    placeholder: '',
    type: 'text',
    isInvalid: false,
    value: ''
  },
  feedBackProps: {
    type: '',
    message: ''
  }
};