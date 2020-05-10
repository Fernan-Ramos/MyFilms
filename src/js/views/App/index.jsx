import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'js/views/Login';
import Dashboard from 'js/views/Dashboard';
import { routeCodes } from 'js/constants/routes';
import PrivateRoute from 'js/components/Utils/PrivateRoute';
import AsyncManager from 'js/components/AsyncManager';

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
