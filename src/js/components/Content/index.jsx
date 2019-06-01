import React, { PureComponent } from 'react';
import './style.scss';

export default class Content extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <main className='AppContent'>
        {children}
      </main>
    );
  }
}
