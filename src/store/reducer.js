import { combineReducers } from 'redux';

import userReducer from './UsersData/reducer';

export default () =>
  combineReducers({
    user: userReducer,
  });
