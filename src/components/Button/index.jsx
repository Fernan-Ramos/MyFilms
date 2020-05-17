/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ onClick, children, props, className, disabled, type }) => (
  <button
    type={type}
    className={classNames('Button', className)}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
export default Button;
