import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import Serialize from 'remotedev-serialize/immutable'; // Remove if you are not using server rendering

import rootReducer from '../redux/rootReducer';
import rootSaga from '../redux/rootSaga';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
export default () => {
  let store = null;
  let middleware = null;
  const sagaMiddleware = createSagaMiddleware();
  const initialState = {};

  //   // Remove if you are not using server rendering
  //   try {
  //     // If state exists we need to parse it to JS object
  //     initialState = Serialize(Immutable).parse(window.__initialState__); // eslint-disable-line no-undef
  //   } catch (e) {
  //     // ★★ Marvin: No dehydrated state
  //   }

  if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(sagaMiddleware);
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    middleware = applyMiddleware(sagaMiddleware);

    // Enable DevTools if browser extension is installed
    if (!process.env.SERVER && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      );
    }
  }
  store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(rootSaga);
  return store;
};
