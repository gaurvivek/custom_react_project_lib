import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'react-bootstrap';
import classes from '../assets/css/createAdmin.module.scss';

export default function ContactInfo({ formFieldArr }) {
  return (
    <div className={classes.block}>
      <div className={classes.blockTitle}>Contact Information</div>
      {
          formFieldArr.map(({ key, fieldArr }) => (
            <Row key={key}>
              {fieldArr.map(({ FormFieldType, key: colKey, props }) => (
                <Col key={colKey} xs={12} sm={12} md={4}>
                  <FormFieldType {...props} />
                </Col>
              ))}
            </Row>
          ))
      }
    </div>
  );
}

ContactInfo.propTypes = {
  formFieldArr: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      fieldArr: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};
