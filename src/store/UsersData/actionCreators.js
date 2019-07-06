import {
  GET_USERS_DATA,
  SET_USERS_DATA,
  SET_USERS_DATA_ERROR,
} from './actions';

export const getUsersData = (
  sortField,
  sortDirection,
  currentPage,
  search,
  limit
) => ({
  type: GET_USERS_DATA,
  payload: { currentPage, limit, search, sortDirection, sortField },
});

export const setUsersData = (
  data,
  sortField,
  sortDirection,
  currentPage,
  search,
  limit
) => ({
  type: SET_USERS_DATA,
  payload: { data, sortField, sortDirection, currentPage, search, limit },
});

export const setUsersDataError = error => ({
  type: SET_USERS_DATA_ERROR,
  payload: { error },
});
