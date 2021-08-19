import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import possibleWords from './modules/possibleWords';

const configureStore = () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

  const middleware = [thunk];

  const store = createStore(
    possibleWords,
    composeEnhancer(applyMiddleware(...middleware)),
  );

  return store;
};

export const createAction = (type, payload) => ({
  type,
  payload,
});

export default configureStore;
