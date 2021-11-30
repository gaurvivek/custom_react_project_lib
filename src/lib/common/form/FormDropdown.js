import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormDropDown({
  placeholder, options, isInvalid,
  value, onChange, size,
}) {
  return (
    <>
      <Form.Select
        aria-label={placeholder}
        size={size}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
      >
        <option>{placeholder}</option>
        {options && options.map((option) => <option key={option.key} value={option.key}>{option.value}</option>)}
      </Form.Select>
    </>
  );
}

FormDropDown.propTypes = {
  isInvalid: PropTypes.bool,
  size: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormDropDown.defaultProps = {
  isInvalid: false,
  size: 'lg',
  placeholder: '',
  value: '',
};
