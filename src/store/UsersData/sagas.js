import { all, call, put, takeLatest } from 'redux-saga/effects';
import { doRequest } from '../../helpers/ApiHelper';
import { GET_USERS_DATA } from './actions';
import {
  setLoadingDone,
  setLoadingStart,
  setUsersData,
  setUsersDataError,
} from './actionCreators';

function* getUsers(action) {
  const { payload } = action;
  try {
    yield put(setLoadingStart());

    const res = yield call(doRequest, payload);
    const { data } = res;
    // throw new Error("It is a test error")
    yield put(setUsersData(data, payload));
  } catch (error) {
    yield put(setUsersDataError(error.message));
  } finally {
    yield put(setLoadingDone());
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_DATA, getUsers);
}

export default function*() {
  yield all([watchGetUsers()]);
}
