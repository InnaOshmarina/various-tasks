import { PAGE_SIZE, SORTING } from '../../constants/global';
import { SET_USERS_DATA, SET_USERS_DATA_ERROR } from './actions';

export const initialState = {
  isLoading: true,
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
        users: {
          ...state.users,
          error: payload.error,
        },
      };
    default:
      return state;
  }
};
