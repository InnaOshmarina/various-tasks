import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getUsersDataState = state => state.user || initialState;

export const filtersSelector = createSelector(
  getUsersDataState,
  state => state.users.filters
);

export const isLoadingSelector = createSelector(
  getUsersDataState,
  state => state.isLoading
);

export const usersDataSelector = createSelector(
  getUsersDataState,
  state => state.users.data
);

export const sortFieldSelector = createSelector(
  filtersSelector,
  state => state.sortField
);

export const sortDirectionSelector = createSelector(
  filtersSelector,
  state => state.sortDirection
);

export const currentPageSelector = createSelector(
  filtersSelector,
  state => state.currentPage
);

export const limitSelector = createSelector(
  filtersSelector,
  state => state.limit
);

export const searchSelector = createSelector(
  filtersSelector,
  state => state.search
);
