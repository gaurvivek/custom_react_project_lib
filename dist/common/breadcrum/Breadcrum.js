"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreadCrumbs;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _breadcrumModule = _interopRequireDefault(require("../../assets/css/breadcrum.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BreadCrumbs(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "breadcrum-head",
    className: _breadcrumModule.default.breadCrumbWrapper
  }, data && data.map((item, i) => /*#__PURE__*/_react.default.createElement("span", {
    className: item.link ? "".concat(_breadcrumModule.default.bitem, " ").concat(_breadcrumModule.default.hasLink) : _breadcrumModule.default.bitem,
    key: item.label
  }, item.link ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: {
      pathname: item.path
    }
  }, ' ', item.label, ' ') : item.label, data.length !== i + 1 ? /*#__PURE__*/_react.default.createElement("i", null, " / ") : '')));
}

BreadCrumbs.propTypes = {
  data: _propTypes.default.array
};
BreadCrumbs.defaultProps = {
  data: []
};