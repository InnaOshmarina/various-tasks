import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import UsersSagas from './UsersData/sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default persistedState => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(rootReducer(), persistedState, enhancer);

  sagaMiddleware.run(UsersSagas);

  return store;
};
