/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import FormButton from '../form/FormButton';
import classes from '../../assets/css/table.module.scss';
import Loader from '../Loader';
import Search from '../Icon/Search';

function TableNoRecord({ colSpan, show, isLoading }) {
  if (!show || isLoading) {
    return null;
  }
  return (
    <tr>
      <td colSpan={colSpan}>
        <span className={classes.noDataFoundContainer}>
          <span className={classes.noRecordIconContainer}>
            <Search Fill="#9A9A9A" Height={40} Width={40} />
          </span>
          <span className={classes.errorMessage}>
            No Results Found
          </span>
          <span className={classes.errorMessageInfo}>
            Try adjusting your search to find what you’re looking for.
          </span>
        </span>
      </td>
    </tr>
  );
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

export default function DataTable({
  isReponsive,
  isHover,
  headerClass,
  isLoadMore,
  isLoading,
  rowInfo,
  handleLoadMore,
  tableSchema,
  tableBody,
}) {
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
    header = tableSchema.map((content) => content.header);
    bodyExtractor = tableSchema.map((content) => content.body);
  }
  return (
    <>
      {isLoading && <Loader />}
      <div className={classes.tableContainer}>
        <Table responsive={isReponsive} hover={isHover}>
          <thead>
            <tr className={headerClass || ''}>
              {header.map((headerObj, i) => (
                <th
                  key={i}
                  colSpan={headerObj.colSpan || undefined}
                  className={`td-th-prop ${headerObj.className ? headerObj.className : ''}`}
                >
                  {headerObj.renderHeader()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="device-list-tbody">
            {!isLoading
            && tableBody.map((row, j) => (
              <tr
                key={j}
                onClick={(e) => rowInfo.onClick(e, row, j)}
                className={rowInfo.className(row)}
              >
                {bodyExtractor.map((extractor, k) => (
                  <td
                    key={k}
                    style={extractor.style || undefined}
                    onClick={extractor.onClick ? (e) => extractor.onClick(e, row) : undefined}
                  >
                    {extractor.render(row, j)}
                  </td>
                ))}
              </tr>
            ))}
            <TableNoRecord
              colSpan={header.length}
              show={tableBody.length < 1}
              isLoading={isLoading}
            />
          </tbody>
        </Table>

        {isLoadMore && !isLoading && (
          <div className={classes.loadMore}>
            <FormButton
              disabled={false}
              type="button"
              otherProps={{ className: 'fw-bold sign-in' }}
              btnText="Load More"
              onClick={loadMore}
              variant="outline-primary"
            />
          </div>
        )}
      </div>

    </>
  );
}

DataTable.propTypes = {
  isReponsive: PropTypes.bool,
  isHover: PropTypes.bool,
  headerClass: PropTypes.string,
  isLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool,
  rowInfo: PropTypes.shape({
    onClick: PropTypes.oneOfType([
      PropTypes.func,
    ]),
    className: PropTypes.func,
  }),
  handleLoadMore: PropTypes.func,
  tableSchema: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.shape({
        renderHeader: PropTypes.func,
      }),
      body: PropTypes.shape({
        render: PropTypes.func,
      }),
    }),
  ),
  tableBody: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

DataTable.defaultProps = {
  isReponsive: true,
  isHover: true,
  headerClass: '',
  isLoadMore: false,
  isLoading: false,
  rowInfo: {
    onClick: () => { },
    className: () => { },
  },
  handleLoadMore: () => { },
  tableSchema: [],
  tableBody: [],
};

TableNoRecord.propTypes = {
  show: PropTypes.bool,
  isLoading: PropTypes.bool,
  colSpan: PropTypes.number.isRequired,
};
TableNoRecord.defaultProps = {
  show: false,
  isLoading: false,
};
