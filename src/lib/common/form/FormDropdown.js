import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormDropDown({
  name, placeholder, options, isInvalid,
  value, onChange, size, dataTestId, ...otherProps
}) {
  return (
    <>
      <Form.Select
        aria-label={placeholder}
        size={size}
        value={value}
        name={name}
        onChange={onChange}
        isInvalid={isInvalid}
        data-testid={dataTestId}
        defaultValue={value}
        {...otherProps}
      >
        <option value="" key="">{placeholder}</option>
        {options && options.map((option) => (
          <option
            key={option.key}
            value={option.key}
          >
            {option.value}
          </option>
        ))}
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  otherProps: PropTypes.shape({}),
  defaultValue: PropTypes.string,
  dataTestId: PropTypes.string,
};

FormDropDown.defaultProps = {
  isInvalid: false,
  size: 'lg',
  placeholder: '',
  value: '',
  otherProps: {},
  defaultValue: '',
  dataTestId: 'form-select',
};
