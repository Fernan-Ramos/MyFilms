import React from 'react';
import './style.scss';

const Input = ({ type, placeholder, required, name, props, onChange, value }) => (
  <input
    className="Input"
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    {...props}
  />
);
export default Input;
