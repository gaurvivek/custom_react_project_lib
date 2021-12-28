"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _FormButton = _interopRequireDefault(require("../form/FormButton"));

var _tableModule = _interopRequireDefault(require("../../assets/css/table.module.scss"));

var _Loader = _interopRequireDefault(require("../Loader"));

var _Search = _interopRequireDefault(require("../Icon/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable react/no-array-index-key */
const AppTable = _ref => {
  let {
    isReponsive,
    isHover,
    headerClass,
    tableSchema,
    tableBody,
    rowInfo,
    isLoading,
    isLoadMore,
    handleLoadMore
  } = _ref;
  let header = [];
  let bodyExtractor = [];

  if (Array.isArray(tableSchema)) {
    header = tableSchema.map(content => content.header);
    bodyExtractor = tableSchema.map(content => content.body);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isLoading && /*#__PURE__*/_react.default.createElement(_Loader.default, null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.tableContainer
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    responsive: isReponsive,
    hover: isHover
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: headerClass || ''
  }, header.map((headerObj, i) => /*#__PURE__*/_react.default.createElement("th", {
    key: i,
    colSpan: headerObj.colSpan || undefined,
    className: headerObj.className ? headerObj.className : ''
  }, headerObj.renderHeader())))), /*#__PURE__*/_react.default.createElement("tbody", null, tableBody.length ? tableBody.map((row, j) => /*#__PURE__*/_react.default.createElement("tr", {
    "data-testid": "table-row",
    key: j,
    onClick: e => rowInfo.onClick(e, row, j),
    className: rowInfo.className(row)
  }, bodyExtractor.map((extractor, k) => /*#__PURE__*/_react.default.createElement("td", {
    "data-testid": "table-data-column",
    key: k,
    style: extractor.style || undefined,
    onClick: extractor.onClick ? e => extractor.onClick(e, row) : undefined
  }, extractor.render(row, j))))) : !isLoading && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: header.length
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.noDataFoundContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.noRecordIconContainer
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    Fill: "#9A9A9A",
    Height: 40,
    Width: 40
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.errorMessage
  }, "No Results Found"), /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.errorMessageInfo
  }, "Try adjusting your search to find what you\u2019re looking for."))))))), tableBody.length > 0 && isLoadMore && /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.loadMore
  }, /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    type: "button",
    btnText: "Load More",
    onClick: handleLoadMore,
    variant: "outline-primary"
  }))));
};

AppTable.propTypes = {
  isReponsive: _propTypes.default.bool,
  isHover: _propTypes.default.bool,
  headerClass: _propTypes.default.string,
  isLoadMore: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  rowInfo: _propTypes.default.shape({
    onClick: _propTypes.default.func,
    className: _propTypes.default.func
  }),
  handleLoadMore: _propTypes.default.func,
  tableSchema: _propTypes.default.arrayOf(_propTypes.default.shape({
    header: _propTypes.default.shape({
      renderHeader: _propTypes.default.func
    }),
    body: _propTypes.default.shape({
      render: _propTypes.default.func
    })
  })),
  tableBody: _propTypes.default.arrayOf(_propTypes.default.shape({}))
};
AppTable.defaultProps = {
  isReponsive: true,
  isHover: true,
  headerClass: '',
  isLoadMore: false,
  isLoading: false,
  rowInfo: {
    onClick: () => {},
    className: () => {}
  },
  handleLoadMore: () => {},
  tableSchema: [],
  tableBody: []
};
var _default = AppTable;
exports.default = _default;