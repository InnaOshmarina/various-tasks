import axios from 'axios';

import { API_URL } from '../constants/api';
import { PAGE_SIZE } from '../constants/global';

export const doRequest = (sort, order, page = 1, limit = PAGE_SIZE) => {
  return axios.get(API_URL, {
    params: {
      _limit: limit,
      _sort: sort,
      _order: order,
      _page: page,
    },
  });
};
