"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataTable;

require("core-js/modules/es.promise.js");

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
function TableNoRecord(_ref) {
  let {
    colSpan,
    show,
    isLoading
  } = _ref;

  if (!show || isLoading) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: colSpan
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _tableModule.default.noDataFoundContainer
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _tableModule.default.noRecordIconContainer
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    Fill: "#9A9A9A",
    Height: 40,
    Width: 40
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _tableModule.default.errorMessage
  }, "No Results Found"), /*#__PURE__*/_react.default.createElement("span", {
    className: _tableModule.default.errorMessageInfo
  }, "Try adjusting your search to find what you\u2019re looking for."))));
}
/**
 * @param {*} :
 *    columnData: data/content of table
  *   columnCount: pagesizre of table
  *   tableSchema: template of data table,
  *   loadMore: function to call api for load more data
  *   isResponsive/isHover for material ui table attribute accepts Boolean
  *   className attributes for header and columns
  *   noData: to show no data found
  *   headerClass : class name for header row i.e tr
  *   rowInfo: contains className and onClick function which are applied on columns
 */

/**
 * @param {*} :tableSchema
 * header:
 *    renderHeader render's component
 *    className: class for header column
 *    colSpan: class for header colSpan
 *
 * tableBody:
 *    render render's component
 *    className: class for cell
 *    onClick: click function for column
 *    style: style for one cell
 */


function DataTable(_ref2) {
  let {
    isReponsive,
    isHover,
    headerClass,
    isLoadMore,
    isLoading,
    rowInfo,
    handleLoadMore,
    tableSchema,
    tableBody
  } = _ref2;

  const loadMore = async () => {
    //   const columnCount = this.state.columnCount + 20;
    //   this.setState({
    //     columnCount,
    //     filteredData: this.props.columnData.slice(0, columnCount),
    //   });
    if (handleLoadMore) {
      handleLoadMore();
    }
  };

  let header = [];
  let bodyExtractor = [];

  if (Array.isArray(tableSchema)) {
    header = tableSchema.map(content => content.header);
    bodyExtractor = tableSchema.map(content => content.body);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isLoading && /*#__PURE__*/_react.default.createElement(_Loader.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.tableContainer
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {
    responsive: isReponsive,
    hover: isHover
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: headerClass || ''
  }, header.map((headerObj, i) => /*#__PURE__*/_react.default.createElement("th", {
    key: i,
    colSpan: headerObj.colSpan || undefined,
    className: "td-th-prop ".concat(headerObj.className ? headerObj.className : '')
  }, headerObj.renderHeader())))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: "device-list-tbody"
  }, !isLoading && tableBody.map((row, j) => /*#__PURE__*/_react.default.createElement("tr", {
    key: j,
    onClick: e => rowInfo.onClick(e, row, j),
    className: rowInfo.className(row)
  }, bodyExtractor.map((extractor, k) => /*#__PURE__*/_react.default.createElement("td", {
    key: k,
    style: extractor.style || undefined,
    onClick: extractor.onClick ? e => extractor.onClick(e, row) : undefined
  }, extractor.render(row, j))))), /*#__PURE__*/_react.default.createElement(TableNoRecord, {
    colSpan: header.length,
    show: tableBody.length < 1,
    isLoading: isLoading
  }))), isLoadMore && !isLoading && /*#__PURE__*/_react.default.createElement("div", {
    className: _tableModule.default.loadMore
  }, /*#__PURE__*/_react.default.createElement(_FormButton.default, {
    disabled: false,
    type: "button",
    otherProps: {
      className: 'fw-bold sign-in'
    },
    btnText: "Load More",
    onClick: loadMore,
    variant: "outline-primary"
  }))));
}

DataTable.propTypes = {
  isReponsive: _propTypes.default.bool,
  isHover: _propTypes.default.bool,
  headerClass: _propTypes.default.string,
  isLoadMore: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  rowInfo: _propTypes.default.shape({
    onClick: _propTypes.default.oneOfType([_propTypes.default.func]),
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
DataTable.defaultProps = {
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
TableNoRecord.propTypes = {
  show: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  colSpan: _propTypes.default.number.isRequired
};
TableNoRecord.defaultProps = {
  show: false,
  isLoading: false
};