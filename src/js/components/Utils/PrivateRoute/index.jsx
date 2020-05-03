import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { routeCodes } from 'js/constants/routes';
import { Route, Redirect } from 'react-router-dom';
import { getTokenData } from '../../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const tokenData = useSelector(getTokenData);
  return (
    <Route
      {...rest}
      render={props => (tokenData ? <Component {...props} /> : <Redirect to={routeCodes.LOGIN} />)
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

export default PrivateRoute;
