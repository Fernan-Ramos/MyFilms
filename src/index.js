import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import routeManager from 'js/services/routeManager';
import { Provider } from 'react-redux';
import { login } from 'js/actions/auth';
import App from 'js/views/App';
import configureStore from 'js/store';
import * as serviceWorker from './serviceWorker';


import 'scss/base/corrections.scss';
import 'scss/base/reset.scss';

import 'scss/theme/layout.scss';
import 'scss/theme/fonts.scss';
import AuthService from './js/services/api/AuthService';


async function initApp() {
  const store = configureStore();
  window.onresize = window.onload = () => {
    if (window.innerWidth <= 768) {
      document.documentElement.classList.add('mobile');
      document.documentElement.classList.remove('desktop');
    } else {
      document.documentElement.classList.remove('mobile');
      document.documentElement.classList.add('desktop');
    }
  };
  const AppWrapper = (
    <Provider store={store}>
      <Router history={routeManager.history}>
        <App />
      </Router>
    </Provider>
  );

  const tokenData = AuthService.getCookie();
  if (tokenData) {
    await login(tokenData, store.dispatch);
  }
  ReactDOM.render(AppWrapper, document.getElementById('root'));


  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
initApp();
