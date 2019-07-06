import { all, call, put, takeLatest } from 'redux-saga/effects';
import { doRequest } from '../../helpers/ApiHelper';
import { GET_USERS_DATA } from './actions';
import { setUsersData, setUsersDataError } from './actionCreators';

function* getUsers(action) {
  const { payload } = action;
  const { currentPage, limit, search, sortDirection, sortField } = payload;
  let ourData = [];
  try {
    const res = yield call(
      doRequest,
      sortField,
      sortDirection,
      currentPage,
      search,
      limit
    );
    const { data } = res;
    ourData = data;
  } catch (error) {
    yield put(setUsersDataError(error.message));
  } finally {
    yield put(
      setUsersData(
        ourData,
        sortField,
        sortDirection,
        currentPage,
        search,
        limit
      )
    );
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_DATA, getUsers);
}

export default function*() {
  yield all([watchGetUsers()]);
}
