import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routeCodes } from 'js/constants/routes';
import AppContainer from 'js/components/AppContainer';
import Lists from '../Lists';
import Trending from '../Trending';
import './style.scss';


class Movies extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path={routeCodes.TRENDING} component={Trending} />
          <Route exact path={routeCodes.LISTS} component={Lists} />
        </Switch>
      </AppContainer>
    );
  }
}

export default withRouter(Movies);
