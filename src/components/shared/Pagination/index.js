import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { getPageCount, getRangeArray } from '../../../helpers/PaginationHelper';
import { ITEM_COUNT } from '../../../constants/temporary';
import { PAGE_SIZE } from '../../../constants/global';

import s from './styles.module.scss';

const Pagination = props => {
  const { changePageHandler, currentPage, data } = props;
  console.log('data length from pagination:', data.length);

  const allPages = getPageCount(ITEM_COUNT, PAGE_SIZE);
  console.log('currentPage:', currentPage);
  console.log('allPages:', allPages);

  const listPages = getRangeArray(currentPage, allPages);
  console.log('listPages: ', listPages);

  const prevButton =
    currentPage === 1 ? null : (
      <li
        className="page-item "
        onClick={event => changePageHandler(event, currentPage - 1)}
      >
        <a className="page-link" href="" tabIndex="-1">
          Prev
        </a>
      </li>
    );

  const nextButton =
    currentPage === allPages ? null : (
      <li
        className="page-item "
        onClick={event => changePageHandler(event, currentPage + 1)}
      >
        <a className="page-link" href="" tabIndex="-1">
          Next
        </a>
      </li>
    );
  let content = null;
  if (data.length > 0) {
    content = (
      <ul className={`pagination ${s.root}`}>
        {prevButton}
        {listPages.map((item, index) => (
          <li
            key={index}
            className={classnames('page-item', {
              active: currentPage === item,
            })}
            onClick={event => changePageHandler(event, item)}
          >
            <a className="page-link" href="">
              {item}
            </a>
          </li>
        ))}
        {nextButton}
      </ul>
    );
  }
  return content;
};

Pagination.propTypes = {
  changePageHandler: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Pagination;
