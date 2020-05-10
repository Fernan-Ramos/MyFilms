import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'js/components/Menu';
import Header from 'js/components/Header';
import Content from 'js/components/Content';
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
