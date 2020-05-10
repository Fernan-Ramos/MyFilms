import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Content = ({ children }) => <main className="AppContent">{children}</main>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
