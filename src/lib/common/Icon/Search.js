import React from 'react';
import PropTypes from 'prop-types';
import { MENU_ICON_SIZE } from '../../constants';

export default function Search({ name, color, size }) {
  return (
    <svg className={`icon icon-${name}`} width={`${size}%`} height={`${size}%`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9531 13.5719C15.8094 13.8062 15.8547 14.1578 16.0453 14.3484L19.6484 17.9515C20.1172 18.4203 20.1172 19.1797 19.6484 19.6484C19.1797 20.1172 18.4203 20.1172 17.9515 19.6484L14.3484 16.0453C14.1547 15.8516 13.8047 15.8125 13.5672 15.9547C13.5672 15.9547 13.4781 16.0203 13.2016 16.1562C12.3547 16.5687 11.4047 16.8 10.4 16.8C6.86564 16.8 4 13.9344 4 10.4C4 6.86564 6.86564 4 10.4 4C13.9344 4 16.8 6.86564 16.8 10.4C16.8 11.4078 16.5672 12.3609 16.1516 13.2094C16.0172 13.4844 15.9531 13.5719 15.9531 13.5719ZM10.3999 14.3999C12.6093 14.3999 14.3999 12.6092 14.3999 10.3999C14.3999 8.19051 12.6093 6.39987 10.3999 6.39987C8.19054 6.39987 6.3999 8.19051 6.3999 10.3999C6.3999 12.6092 8.19054 14.3999 10.3999 14.3999Z" fill={color} />
    </svg>
  );
}

Search.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

Search.defaultProps = {
  name: 'PencilIcon',
  color: '#008ABC',
  size: MENU_ICON_SIZE,
};
