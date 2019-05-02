import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from 'js/views/Login';
import Movies from 'js/views/Movies';
import { routeCodes } from 'js/constants/routes';
import PrivateRoute from 'js/components/Utils/PrivateRoute';
import AsyncManager from 'js/components/AsyncManager';

class App extends PureComponent {
  render() {
    return (
      <div>
        <AsyncManager />
        <Switch>
          <Route exact path={routeCodes.LOGIN} component={Login} />
          <PrivateRoute path={routeCodes.MOVIES} component={Movies} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
