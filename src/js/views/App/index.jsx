import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from 'js/views/Login';
import Dashboard from 'js/views/Dashboard';
import { routeCodes } from 'js/constants/routes';
import PrivateRoute from 'js/components/Utils/PrivateRoute';
import AsyncManager from 'js/components/AsyncManager';

class App extends Component {
  render() {
    return (
      <div>
        <AsyncManager />
        <Switch>
          <Route exact path={routeCodes.LOGIN} component={Login} />
          <PrivateRoute path={routeCodes.DASHBOARD} component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
