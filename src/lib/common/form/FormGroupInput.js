import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { Eye, EyeSlash } from 'react-bootstrap-icons';

import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormFeedback from './FormFeedback';
import EyeSlash from '../Icon/EyeSlash';
import Eye from '../Icon/Eye';

// For email, password & text input
export default function FormGroupInput({
  groupProps,
  labelProps,
  inputProps,
  feedBackProps,
}) {
  const { labelText } = labelProps;
  const {
    type, value,
    onChange, placeholder,
    isInvalid, otherProps,
  } = inputProps;
  const { type: feedbackType, message } = feedBackProps;
  const [passwordCtrlType, setPasswordCtrlType] = useState(
    type === 'password' ? 'password' : type,
  );
  const togglePasswordType = () => {
    const ptype = (passwordCtrlType === 'password') ? 'text' : 'password';
    setPasswordCtrlType(ptype);
  };

  return (
    <Form.Group {...groupProps}>
      <FormLabel labelText={labelText} />
      <FormInput
        type={passwordCtrlType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        otherProps={type === 'password' ? { ...otherProps, className: 'ccw-password' } : { ...otherProps }}
      />
      {
        type === 'password' && (
          <div className="show-hide-pass">
            <span className="toggle-password" data-testid="toggle-password" onClick={() => togglePasswordType()}>
              {(passwordCtrlType === 'password') ? <EyeSlash size={70} /> : <Eye size={70} />}
            </span>
          </div>
        )
      }
      <FormFeedback
        type={feedbackType}
        message={message}
      />
    </Form.Group>
  );
}

FormGroupInput.propTypes = {
  groupProps: PropTypes.shape({
    controlId: PropTypes.string,
  }),
  labelProps: PropTypes.shape({
    labelText: PropTypes.oneOfType([
      PropTypes.elementType,
      PropTypes.string,
    ]),
    disabled: PropTypes.bool,
  }),
  inputProps: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isInvalid: PropTypes.bool,
    otherProps: PropTypes.shape({}),
  }),
  feedBackProps: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
};

FormGroupInput.defaultProps = {
  groupProps: {},
  labelProps: {
    labelText: '',
    disabled: false,
  },
  inputProps: {
    value: '',
    placeholder: '',
    type: 'text',
    isInvalid: false,
    otherProps: {},
  },
  feedBackProps: {
    type: '',
    message: '',
  },
};
