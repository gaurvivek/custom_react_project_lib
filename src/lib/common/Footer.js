import React from 'react';
import classes from '../assets/css/Footer.module.scss';

// eslint-disable-next-line react/prop-types
const Footer = ({ children }) => (
  <>
    <div className={classes.FoooterContainer}>
      {children}
    </div>
  </>
);

export default Footer;
