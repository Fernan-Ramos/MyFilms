import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Login from "js/views/Login";
import Movies from "js/views/Movies";

class App extends PureComponent {
  render() {
    const { tokenData } = this.props;
    console.warn(tokenData);
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route
          exact
          path="/"
          render={() =>
            tokenData ? (
              <Route path="/movies" component={Movies} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    );
  }
}

const mapStatetoProps = state => ({
  tokenData: state.auth.get("tokenData")
});

export default connect(
  mapStatetoProps,
  null
)(withRouter(App));
