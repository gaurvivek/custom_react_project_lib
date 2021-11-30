import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import FormLabel from './FormLabel';
import FormFeedback from './FormFeedback';
import FormDropDown from './FormDropdown';

// For select dropdown
export default function FormGroupSelect({
  groupProps,
  labelProps,
  inputProps,
  feedBackProps,
}) {
  const { labelText } = labelProps;
  const {
    options,
    value,
    onChange,
    placeholder,
    isInvalid,
  } = inputProps;
  const { type: feedbackType, message } = feedBackProps;

  return (
    <Form.Group {...groupProps}>
      <FormLabel labelText={labelText} />
      <FormDropDown
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
      <FormFeedback
        type={feedbackType}
        message={message}
      />
    </Form.Group>
  );
}

FormGroupSelect.propTypes = {
  groupProps: PropTypes.shape({
    controlId: PropTypes.string,
  }),
  labelProps: PropTypes.shape({
    labelText: PropTypes.oneOfType([
      PropTypes.elementType,
      PropTypes.string,
    ]),
  }),
  inputProps: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string,
      }),
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isInvalid: PropTypes.bool,
  }),
  feedBackProps: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

FormGroupSelect.defaultProps = {
  groupProps: {},
  labelProps: {
    labelText: '',
  },
  inputProps: {
    options: [],
    placeholder: '',
    type: 'text',
    isInvalid: false,
    value: '',
  },
  feedBackProps: {
    type: '',
    message: '',
  },
};
