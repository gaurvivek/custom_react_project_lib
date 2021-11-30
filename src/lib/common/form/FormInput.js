import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormInput({
  size, type, placeholder, otherProps,
  onChange, value, isInvalid,
}) {
  return (
    <Form.Control
      size={size}
      type={type}
      placeholder={placeholder}
      isInvalid={isInvalid}
      onChange={onChange}
      value={value}
      {...otherProps}
    />
  );
}

FormInput.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  isInvalid: PropTypes.bool,
  placeholder: PropTypes.string,
  otherProps: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  size: 'lg',
  type: 'text',
  isInvalid: false,
  placeholder: '',
  otherProps: {},
  value: '',
};
