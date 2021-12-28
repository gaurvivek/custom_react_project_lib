"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _SearchIcon = _interopRequireDefault(require("../Icon/SearchIcon"));

var _FormGroupSelect = _interopRequireDefault(require("../form/FormGroupSelect"));

var _FormInput = _interopRequireDefault(require("../form/FormInput"));

require("../../assets/css/SearchBar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchBar(_ref) {
  let {
    filterProps,
    serachInputProps,
    handleSubmit
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "searchbar",
    className: "searchbar-container"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
    onSubmit: handleSubmit,
    "data-testid": "searchForm"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup, {
    size: "lg"
  }, /*#__PURE__*/_react.default.createElement(_FormGroupSelect.default, filterProps), /*#__PURE__*/_react.default.createElement(_FormInput.default, serachInputProps), /*#__PURE__*/_react.default.createElement(_reactBootstrap.InputGroup.Text, {
    onClick: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_SearchIcon.default, {
    Fill: "#9A9A9A"
  })))));
}

SearchBar.propTypes = {
  filterProps: _propTypes.default.objectOf(_propTypes.default.shape({
    inputProps: _propTypes.default.objectOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      placeholder: _propTypes.default.string,
      options: _propTypes.default.arrayOf(_propTypes.default.shape({
        key: _propTypes.default.string,
        value: _propTypes.default.string
      })),
      onChange: _propTypes.default.func.isRequired
    }))
  })),
  serachInputProps: _propTypes.default.objectOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    type: _propTypes.default.string,
    placeholder: _propTypes.default.string,
    value: _propTypes.default.string,
    onChange: _propTypes.default.func.isRequired,
    isInvalid: _propTypes.default.bool
  })),
  handleSubmit: _propTypes.default.func.isRequired
};
SearchBar.defaultProps = {
  filterProps: {
    inputProps: {
      placeholder: 'All',
      options: [{
        key: 'filter',
        value: 'Search Filter'
      }],
      value: ''
    }
  },
  serachInputProps: {
    type: 'text',
    placeholder: 'Search',
    value: '',
    isInvalid: false
  }
};