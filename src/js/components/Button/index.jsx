import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './style.scss';

export default class Button extends PureComponent {
  render() {
    const {
      onClick, children, props, type, className
    } = this.props;
    return (
      <button className={classNames('Button', className)} type={type} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
}
