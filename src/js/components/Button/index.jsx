import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './style.scss';

export default class Button extends PureComponent {
  render() {
    const {
      onClick, children, props, className, disabled, type
    } = this.props;
    return (
      <button type={type} className={classNames('Button', className)} onClick={onClick} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
}
