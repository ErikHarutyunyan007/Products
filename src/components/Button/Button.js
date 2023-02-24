import React from 'react';

import './Button.css';

export const buttonStyles = {
  DEFAULT: 'Default',
  RED: 'Red',
};

const Button = ({ style, children, ...rest }) => (
  <button className={`Button Button-${style}`} {...rest}>
    {children}
  </button>
);

Button.defaultProps = {
  style: buttonStyles.DEFAULT,
  type: 'button',
};

export default Button;