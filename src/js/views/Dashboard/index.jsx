import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routeCodes } from 'js/constants/routes';
import AppContainer from 'js/components/AppContainer';
import Lists from '../Lists';
import Trending from '../Trending';
import Film from '../Film';
import CreateList from '../CreateList';
import ListDetail from '../ListDetail';
import './style.scss';

class Dashboard extends PureComponent {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path={routeCodes.TRENDING} component={Trending} />
          <Route exact path={routeCodes.LISTS} component={Lists} />
          <Route path={`${routeCodes.LISTS}/:id`} component={ListDetail} />
          <Route path={`${routeCodes.FILM}/:id`} component={Film} />
          <Route path={routeCodes.CREATE_LIST} component={CreateList} />
          <Route path={`${routeCodes.EDIT_LIST}/:id`} component={CreateList} />
        </Switch>
      </AppContainer>
    );
  }
}

export default withRouter(Dashboard);
