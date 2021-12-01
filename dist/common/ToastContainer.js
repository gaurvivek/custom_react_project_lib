"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToastContainerFn;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToastContainerFn(_ref) {
  let {
    position,
    autoClose,
    hideProgressBar,
    newestOnTop,
    closeOnClick,
    rtl,
    pauseOnFocusLoss,
    draggable,
    pauseOnHover,
    transition,
    closeButton,
    icon
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    newestOnTop: newestOnTop,
    closeOnClick: closeOnClick,
    rtl: rtl,
    pauseOnFocusLoss: pauseOnFocusLoss,
    draggable: draggable,
    pauseOnHover: pauseOnHover,
    transition: transition,
    closeButton: closeButton,
    icon: icon
  });
}

ToastContainerFn.propTypes = {
  position: _propTypes.default.string,
  autoClose: _propTypes.default.number,
  hideProgressBar: _propTypes.default.bool,
  pauseOnHover: _propTypes.default.bool,
  pauseOnFocusLoss: _propTypes.default.bool,
  closeOnClick: _propTypes.default.bool,
  newestOnTop: _propTypes.default.bool,
  draggable: _propTypes.default.bool,
  icon: _propTypes.default.bool,
  closeButton: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  transition: _propTypes.default.node
};
ToastContainerFn.defaultProps = {
  position: "top-center",
  transition: _reactToastify.Flip,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  icon: false,
  closeButton: false
};