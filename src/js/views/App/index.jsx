import React, { PureComponent } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "js/views/Login";
import Movies from "js/views/Movies";
import { routeCodes } from "js/constants/routes";
import PrivateRoute from "js/components/PrivateRoute";

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path={routeCodes.LOGIN} component={Login} />
        <PrivateRoute path={routeCodes.MOVIES} component={Movies} />
      </Switch>
    );
  }
}

export default withRouter(App);
