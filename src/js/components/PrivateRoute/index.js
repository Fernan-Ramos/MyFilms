import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeCodes } from 'js/constants/routes';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, tokenData, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      // Todo: Auth logic
      tokenData
      ? <Component {...props} />
      : <Redirect  to={routeCodes.LOGIN} />
  )}
  />
);

PrivateRoute.propTypes = {
  tokenData: PropTypes.string,
  component: PropTypes.func,
};

const mapStateToProps = state => ({
  tokenData: state.auth.get('tokenData')
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
