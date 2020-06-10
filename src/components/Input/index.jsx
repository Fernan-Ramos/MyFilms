/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.scss';

const Input = ({ type, placeholder, required, name, props, onChange, value, label }) => (
  <div className="input-group">
    {label && <label>{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      {...props}
    />
  </div>
);
export default Input;
