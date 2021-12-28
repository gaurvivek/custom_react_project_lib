"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var React = _interopRequireWildcard(require("react"));

var _helper = require("./helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Icon(_ref) {
  let {
    Fill,
    Width,
    Height
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", {
    width: Width,
    height: Height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.9531 13.5719C15.8094 13.8062 15.8547 14.1578 16.0453 14.3484L19.6484 17.9515C20.1172 18.4203 20.1172 19.1797 19.6484 19.6484C19.1797 20.1172 18.4203 20.1172 17.9515 19.6484L14.3484 16.0453C14.1547 15.8516 13.8047 15.8125 13.5672 15.9547C13.5672 15.9547 13.4781 16.0203 13.2016 16.1562C12.3547 16.5687 11.4047 16.8 10.4 16.8C6.86564 16.8 4 13.9344 4 10.4C4 6.86564 6.86564 4 10.4 4C13.9344 4 16.8 6.86564 16.8 10.4C16.8 11.4078 16.5672 12.3609 16.1516 13.2094C16.0172 13.4844 15.9531 13.5719 15.9531 13.5719ZM10.3999 14.3999C12.6093 14.3999 14.3999 12.6092 14.3999 10.3999C14.3999 8.19051 12.6093 6.39987 10.3999 6.39987C8.19054 6.39987 6.3999 8.19051 6.3999 10.3999C6.3999 12.6092 8.19054 14.3999 10.3999 14.3999Z",
    fill: Fill
  }));
}

Icon.propTypes = _helper.PropRules;
Icon.defaultProps = _objectSpread(_objectSpread({}, _helper.PropDefaults), {}, {
  Width: '24',
  Height: '24'
});