import PropTypes from 'prop-types';

export const PropRules = {
  Fill: PropTypes.string,
  Width: PropTypes.string || PropTypes.number,
  Height: PropTypes.string || PropTypes.number,
};

export const PropDefaults = {
  Fill: '#333333',
  Width: 32,
  Height: 32,
};
