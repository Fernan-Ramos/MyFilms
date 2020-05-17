import { createBrowserHistory } from 'history';

class RouteManager {
  constructor() {
    this.history = createBrowserHistory();
  }

  push(route, state) {
    this.history.push(route, state);
  }
}

export default new RouteManager();
