import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import routeManager from 'services/routeManager';
import { Provider } from 'react-redux';
import { login } from 'redux/auth/actions';
import App from 'views/App';
import configureStore from './store';
import AuthService from './services/api/AuthService';
import { setIsMobile } from './redux/app/actions';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';

import 'scss/base/corrections.scss';
import 'scss/base/reset.scss';

import 'scss/theme/layout.scss';
import 'scss/theme/fonts.scss';


async function initApp() {
  const store = configureStore();
  window.onresize = window.onload = () => {
    if (window.innerWidth <= 768) {
      document.documentElement.classList.add('mobile');
      document.documentElement.classList.remove('desktop');
      store.dispatch(setIsMobile(true));
    } else {
      document.documentElement.classList.remove('mobile');
      document.documentElement.classList.add('desktop');
      store.dispatch(setIsMobile(false));
    }
  };
  const AppWrapper = (
    <Provider store={store}>
      <FirebaseContext.Provider value={Firebase}>
        <Router history={routeManager.history}>
          <App />
        </Router>
      </FirebaseContext.Provider>
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
