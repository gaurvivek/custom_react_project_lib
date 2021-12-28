"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TitleBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchBar = _interopRequireDefault(require("../searchBar/SearchBar"));

var _FormButton = _interopRequireDefault(require("../form/FormButton"));

require("../../assets/css/TitleBar.scss");

var _Breadcrum = _interopRequireDefault(require("../breadcrum/Breadcrum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TitleBar(_ref) {
  let {
    title,
    searchBar,
    serachBarProps,
    actionBtn,
    action,
    breadCrumsProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Breadcrum.default, {
    data: breadCrumsProps
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "titlebar-container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, title), searchBar && /*#__PURE__*/_react.default.createElement(_SearchBar.default, serachBarProps), actionBtn && /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    btnText: actionBtn,
    onClick: action,
    otherProps: {
      className: 'fw-bold title-btn',
      alt: 'create-user',
      'data-testid': 'titlebar-button'
    }
  })));
}

TitleBar.propTypes = {
  title: _propTypes.default.string.isRequired,
  searchBar: _propTypes.default.bool,
  serachBarProps: _propTypes.default.object,
  actionBtn: _propTypes.default.string,
  action: _propTypes.default.func,
  breadCrums: _propTypes.default.bool,
  breadCrumsProps: _propTypes.default.array
};
TitleBar.defaultProps = {
  searchBar: false,
  serachBarProps: {
    filterProps: {},
    serachInputProps: {}
  },
  actionBtn: '',
  action: () => null,
  breadCrums: false,
  breadCrumsProps: []
};