import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';
import Header from 'components/Header';
import Content from 'components/Content';
import './style.scss';

const AppContainer = ({ children }) => (
  <div className="AppContainer">
    <Menu />
    <Header />
    <Content>{children}</Content>
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
