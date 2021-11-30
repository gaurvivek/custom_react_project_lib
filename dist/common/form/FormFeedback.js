"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormFeedback;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormFeedback(_ref) {
  let {
    type,
    message
  } = _ref;

  if (!['valid', 'invalid'].includes(type)) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control.Feedback, {
    type: type
  }, message);
}

FormFeedback.propTypes = {
  type: _propTypes.default.string,
  message: _propTypes.default.string
};
FormFeedback.defaultProps = {
  type: 'invalid',
  message: ''
};