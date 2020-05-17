import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import { routeCodes } from 'constants/routes';
import PrivateRoute from 'components/Utils/PrivateRoute';
import AsyncManager from 'components/AsyncManager';

const App = () => (
  <div>
    <AsyncManager />
    <Switch>
      <Route exact path={routeCodes.LOGIN} component={Login} />
      <PrivateRoute path={routeCodes.DASHBOARD} component={Dashboard} />
    </Switch>
  </div>
);

export default App;
