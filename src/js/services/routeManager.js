import { createBrowserHistory } from 'history';

class RouteManager {
  constructor() {
    this.history = createBrowserHistory();
  }

  push(route) {
    this.history.push(route);
  }

  go(route) {
    this.history.push(route);
  }
}

export default new RouteManager();
