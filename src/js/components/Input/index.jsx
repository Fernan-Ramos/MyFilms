import React, { PureComponent } from 'react';
import './style.scss';

export default class Input extends PureComponent {
  render() {
    const {
      type, placeholder, required, name, props, onChange, value
    } = this.props;
    return (
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
  }
}
