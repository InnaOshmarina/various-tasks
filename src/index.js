import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './components/App/container';
import configureStore from './store/configureStore';

export const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
