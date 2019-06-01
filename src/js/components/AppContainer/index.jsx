import React, { PureComponent } from 'react';
import Menu from 'js/components/Menu';
import './style.scss';
import Header from 'js/components/Header';
import Content from 'js/components/Content';


class AppContainer extends PureComponent {
  render() {
    return (
      <div className='AppContainer'>
        <Menu />
        <Header />
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

export default AppContainer;
