import React from 'react';
import { oneOfType, array, element } from 'prop-types';

// eslint-disable-next-line react/button-has-type
const Button = ({ children }) => <button className="btn">{children}</button>;
Button.propTypes = {
  children: oneOfType([
    array,
    element
  ])
};
