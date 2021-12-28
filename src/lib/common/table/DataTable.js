/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import FormButton from '../form/FormButton';
import classes from '../../assets/css/table.module.scss';
import Loader from '../Loader';
import Search from '../Icon/Search';

const AppTable = ({
  isReponsive,
  isHover,
  headerClass,
  tableSchema,
  tableBody,
  rowInfo,
  isLoading,
  isLoadMore,
  handleLoadMore
}) => {
  let header = [];
  let bodyExtractor = [];
  if (Array.isArray(tableSchema)) {
    header = tableSchema.map((content) => content.header);
    bodyExtractor = tableSchema.map((content) => content.body);
  }
  return (
    <>
      {isLoading && <Loader />}
      <>
        <div className={classes.tableContainer}>
          <Table responsive={isReponsive} hover={isHover}>
            <thead>
              <tr className={headerClass || ''}>
                {header.map((headerObj, i) => (
                  <th
                    key={i}
                    colSpan={headerObj.colSpan || undefined}
                    className={headerObj.className ? headerObj.className : ''}
                  >
                    {headerObj.renderHeader()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.length ? tableBody.map((row, j) => (
                <tr
                  data-testid="table-row"
                  key={j}
                  onClick={(e) => rowInfo.onClick(e, row, j)}
                  className={rowInfo.className(row)}
                >
                  {bodyExtractor.map((extractor, k) => (
                    <td
                      data-testid="table-data-column"
                      key={k}
                      style={extractor.style || undefined}
                      onClick={extractor.onClick ? (e) => extractor.onClick(e, row) : undefined}
                    >
                      {extractor.render(row, j)}
                    </td>
                  ))}
                </tr>
              ))
                : !isLoading &&
                <tr>
                  <td colSpan={header.length}>
                    <div className={classes.noDataFoundContainer}>
                      <div className={classes.noRecordIconContainer}>
                        <Search Fill="#9A9A9A" Height={40} Width={40} />
                      </div>
                      <div className={classes.errorMessage}>
                        No Results Found
                      </div>
                      <div className={classes.errorMessageInfo}>
                        Try adjusting your search to find what you’re looking for.
                      </div>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </Table>
        </div>
        {tableBody.length > 0 && isLoadMore &&
          <div className={classes.loadMore}>
            <FormButton
              type="button"
              btnText="Load More"
              onClick={handleLoadMore}
              variant="outline-primary"
            />
          </div>
        }
      </>
    </>
  )
}
AppTable.propTypes = {
  isReponsive: PropTypes.bool,
  isHover: PropTypes.bool,
  headerClass: PropTypes.string,
  isLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool,
  rowInfo: PropTypes.shape({
    onClick: PropTypes.func,
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

AppTable.defaultProps = {
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

export default AppTable;
