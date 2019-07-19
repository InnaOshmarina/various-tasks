import {
  GET_USERS_DATA,
  IS_LOADING_DONE,
  IS_LOADING_START,
  SET_USERS_DATA,
  SET_USERS_DATA_ERROR,
} from './actions';

export const setLoadingStart = () => ({
  type: IS_LOADING_START,
});

export const setLoadingDone = () => ({
  type: IS_LOADING_DONE,
});

export const getUsersData = ({
  sortField,
  sortDirection,
  currentPage,
  search,
  limit,
}) => ({
  type: GET_USERS_DATA,
  payload: { sortField, sortDirection, currentPage, search, limit },
});

export const setUsersData = (
  data,
  { sortField, sortDirection, currentPage, search, limit }
) => ({
  type: SET_USERS_DATA,
  payload: { data, sortField, sortDirection, currentPage, search, limit },
});

export const setUsersDataError = error => ({
  type: SET_USERS_DATA_ERROR,
  payload: { error },
});
