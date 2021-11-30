"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMessage = ToastMessage;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactToastify = require("react-toastify");

var _CheckedCircleFill = _interopRequireDefault(require("./Icon/CheckedCircleFill"));

var _ExclamationTriangleFill = _interopRequireDefault(require("./Icon/ExclamationTriangleFill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToastMessage(_ref) {
  let {
    message,
    type
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-ccw-container"
  }, type === 'success' && /*#__PURE__*/_react.default.createElement("span", {
    className: "toast-icon"
  }, /*#__PURE__*/_react.default.createElement(_CheckedCircleFill.default, {
    color: "#4F8309",
    size: 100
  })), type === 'error' && /*#__PURE__*/_react.default.createElement("span", {
    className: "toast-icon"
  }, /*#__PURE__*/_react.default.createElement(_ExclamationTriangleFill.default, {
    color: "#E00932",
    size: 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "toast-ccw-message"
  }, message));
}

class Toast {
  static success(message) {
    return (0, _reactToastify.toast)( /*#__PURE__*/_react.default.createElement(ToastMessage, {
      message: message
    }));
  }

  static error(message) {
    return _reactToastify.toast.error( /*#__PURE__*/_react.default.createElement(ToastMessage, {
      message: message,
      type: "error"
    }));
  }

}

exports.default = Toast;
ToastMessage.propTypes = {
  message: _propTypes.default.string,
  type: _propTypes.default.oneOf(['success', 'error'])
};
ToastMessage.defaultProps = {
  message: 'Success!!!',
  type: 'success'
};