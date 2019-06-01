import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routeCodes } from 'js/constants/routes';
import AppContainer from 'js/components/AppContainer';
import Lists from 'js/views/Lists';
import './style.scss';


class Movies extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path={routeCodes.LISTS} component={Lists} />
        </Switch>
      </AppContainer>
    );
  }
}

export default withRouter(Movies);
