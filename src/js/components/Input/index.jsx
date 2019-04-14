import React, { PureComponent } from "react";
import "./style.scss";

export default class Input extends PureComponent {
  render() {
    const { type, placeholder, required, name, props } = this.props;
    return (
      <input
        className="Input"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    );
  }
}
