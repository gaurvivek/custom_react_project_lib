"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactInfo;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _createAdminModule = _interopRequireDefault(require("../assets/css/createAdmin.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContactInfo(_ref) {
  let {
    formFieldArr
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _createAdminModule.default.block
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _createAdminModule.default.blockTitle
  }, "Contact Information"), formFieldArr.map(_ref2 => {
    let {
      key,
      fieldArr
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, {
      key: key
    }, fieldArr.map(_ref3 => {
      let {
        FormFieldType,
        key: colKey,
        props
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        key: colKey,
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/_react.default.createElement(FormFieldType, props));
    }));
  }));
}

ContactInfo.propTypes = {
  formFieldArr: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    fieldArr: _propTypes.default.arrayOf(_propTypes.default.shape({
      key: _propTypes.default.string
    }))
  })).isRequired
};