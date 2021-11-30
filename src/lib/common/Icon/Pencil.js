import React from 'react';
import PropTypes from 'prop-types';
import { MENU_ICON_SIZE } from '../../constants';

export default function Pencil({ name, color, size }) {
  return (
    <svg className={`icon icon-${name}`} width={`${size}`} height={`${size}`} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 13.8125V17.25H4.1875L14.3258 7.11167L10.8883 3.67417L0.75 13.8125ZM16.9842 4.45334C17.3417 4.09584 17.3417 3.51834 16.9842 3.16084L14.8392 1.01584C14.4817 0.658336 13.9042 0.658336 13.5467 1.01584L11.8692 2.69334L15.3067 6.13084L16.9842 4.45334Z" fill={color} />
    </svg>
  );
}

Pencil.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

Pencil.defaultProps = {
  name: 'PencilIcon',
  color: '#008ABC',
  size: MENU_ICON_SIZE,
};
