import React, { PureComponent } from 'react';
import Menu from 'js/components/Menu';
import './style.scss';


class AppContainer extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className='AppContainer'>
        <Menu />
        <main className='AppContainer__content'>{children}</main>
      </div>
    );
  }
}

export default AppContainer;
