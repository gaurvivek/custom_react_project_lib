"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CCWModal;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _FormButton = _interopRequireDefault(require("./form/FormButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CCWModal(_ref) {
  let {
    show,
    title,
    body,
    closeBtnHandler,
    okBtnHandler
  } = _ref;

  const [isSubmitting, setIsSubmitting] = _react.default.useState(false);

  const confirmHandler = () => {
    setIsSubmitting(true);
    okBtnHandler();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    centered: true,
    size: "lg",
    show: show,
    onHide: closeBtnHandler
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, {
    as: "span",
    bsPrefix: "fw-bold"
  }, title)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, body), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    disabled: isSubmitting,
    variant: "link",
    type: "button",
    btnText: "Cancel",
    otherProps: {
      onClick: () => closeBtnHandler()
    },
    dataTestId: "modal-cancel"
  }), /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    disabled: isSubmitting,
    type: "button",
    btnText: "Confirm",
    otherProps: {
      onClick: () => confirmHandler()
    },
    dataTestId: "modal-confirm"
  }))));
}

CCWModal.propTypes = {
  show: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  body: _propTypes.default.string.isRequired,
  closeBtnHandler: _propTypes.default.func.isRequired,
  okBtnHandler: _propTypes.default.func.isRequired
};
CCWModal.defaultProps = {
  show: false
};