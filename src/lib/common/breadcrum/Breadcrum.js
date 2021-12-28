import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from '../../assets/css/breadcrum.module.scss';

export default function BreadCrumbs({ data }) {
  return (
    <div data-testid="breadcrum-head" className={classes.breadCrumbWrapper}>
      {
              data && data.map((item, i) => (
                <span className={item.link ? `${classes.bitem} ${classes.hasLink}` : classes.bitem} key={item.label}>
                  {((item.link) ? (
                    <Link to={{ pathname: item.path }}>
                      {' '}
                      {item.label}
                      {' '}
                    </Link>
                  ) : item.label)}
                  {
                          ((data.length !== (i + 1)) ? <i> / </i> : '')
                        }
                </span>
              ))
            }
    </div>
  );
}

BreadCrumbs.propTypes = {
  data: PropTypes.array,
};

BreadCrumbs.defaultProps = {
  data: [],
};
