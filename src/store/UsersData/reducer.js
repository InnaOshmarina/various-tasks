import { PAGE_SIZE, SORTING } from '../../constants/global';
import {
  IS_LOADING_DONE,
  IS_LOADING_START,
  SET_USERS_DATA,
  SET_USERS_DATA_ERROR,
} from './actions';

export const initialState = {
  isLoading: false,
  users: {
    data: [],
    filters: {
      currentPage: 1,
      limit: PAGE_SIZE,
      search: '',
      sortDirection: SORTING.DIRECTION.ASC,
      sortField: SORTING.FIELD.LAST_NAME,
    },
  },
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case IS_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case IS_LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case SET_USERS_DATA:
      return {
        ...state,
        isLoading: false,
        users: {
          ...state.users,
          data: payload.data,
          filters: {
            ...state.users.filter,
            currentPage: payload.currentPage,
            limit: payload.limit,
            search: payload.search,
            sortDirection: payload.sortDirection,
            sortField: payload.sortField,
          },
        },
      };
    case SET_USERS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        users: {
          ...state.users,
          error: payload.error,
        },
      };
    default:
      return state;
  }
};
