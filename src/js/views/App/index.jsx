import React, { PureComponent } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Login from 'js/views/Login';
import Movies from 'js/views/Movies';

const loggedIn = false;

class App extends PureComponent {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/movies' component={Movies} />
                <Route exact path="/" render={() => (
                    loggedIn ? (
                        <Redirect to="/movies" />
                    ) : (
                            <Redirect to="/login" />
                        )
                )} />

            </Switch>
        );
    }
}

export default withRouter(App);
