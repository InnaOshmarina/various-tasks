import React from 'react';
import classnames from 'classnames';
import lodash from 'lodash';
import PropTypes from 'prop-types';

import { getPageCount, setArray } from '../../../helpers/PaginationHelper';
import { ITEM_COUNT } from '../../../constants/temporary';
import { PAGE_SIZE } from '../../../constants/global';
import { TextFormat } from '../../../helpers/TableHelper';

const DataTable = props => {
  const {
    data,
    headers,
    changePageHandler,
    onSort,
    sortDirection,
    sortField,
    currentPage,
  } = props;

  const allPages = getPageCount(ITEM_COUNT, PAGE_SIZE);
  const pages = setArray(1, allPages);

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

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            {headers.map(headerItem => (
              <th key={headerItem.id} onClick={() => onSort(headerItem.name)}>
                {headerItem.options.headerName}{' '}
                {sortField === headerItem.name && (
                  <small>{sortDirection}</small>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(dataItem => (
            <tr key={dataItem.id}>
              {headers.map(headerItem => (
                <td key={headerItem.id}>
                  {TextFormat(
                    lodash.get(dataItem, headerItem.name),
                    headerItem.options.type
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {prevButton}
        {pages.map((item, index) => (
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
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  changePageHandler: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default DataTable;
