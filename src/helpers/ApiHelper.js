import axios from 'axios';

import { API_URL } from '../constants/api';
import { PAGE_SIZE } from '../constants/global';

export const doRequest = queryParams => {
  const {
    currentPage = 1,
    limit = PAGE_SIZE,
    search = '',
    sortDirection,
    sortField,
  } = queryParams;
  return axios.get(API_URL, {
    params: {
      _limit: limit,
      _sort: sortField,
      _order: sortDirection,
      _page: currentPage,
      q: search,
    },
  });
};
