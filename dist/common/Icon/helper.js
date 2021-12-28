"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropRules = exports.PropDefaults = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropRules = {
  Fill: _propTypes.default.string,
  Width: _propTypes.default.string || _propTypes.default.number,
  Height: _propTypes.default.string || _propTypes.default.number
};
exports.PropRules = PropRules;
const PropDefaults = {
  Fill: '#333333',
  Width: 32,
  Height: 32
};
exports.PropDefaults = PropDefaults;