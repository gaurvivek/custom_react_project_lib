import React from 'react';
import loaderImg from '../assets/spinner.gif';

const loaderStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export default () => (
  <div style={loaderStyle}>
    <img src={loaderImg} alt="loading" />
  </div>
);
