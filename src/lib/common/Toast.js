import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import CheckedCircleFill from './Icon/CheckedCircleFill';
import ExclamationTriangleFill from './Icon/ExclamationTriangleFill';

export function ToastMessage({ message, type }) {
  return (
    <div className="toast-ccw-container">
      {type === 'success' && (<span className="toast-icon"><CheckedCircleFill color="#4F8309" size={100} /></span>)}
      {type === 'error' && <span className="toast-icon"><ExclamationTriangleFill color="#E00932" size={100} /></span>}
      <span className="toast-ccw-message">
        {message}
      </span>
    </div>
  );
}

export default class Toast {
  static success(message) {
    return toast(<ToastMessage message={message} />);
  }

  static error(message) {
    return toast.error(<ToastMessage message={message} type="error" />);
  }
}

ToastMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error']),
};

ToastMessage.defaultProps = {
  message: 'Success!!!',
  type: 'success',
};
