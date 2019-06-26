import React from 'react';
import lodash from 'lodash';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';
import { TextFormat } from '../../../helpers/TableHelper';

const DataTable = props => {
  const {
    changePageHandler,
    currentPage,
    data,
    headers,
    onSort,
    sortDirection,
    sortField,
  } = props;

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
      <Pagination
        changePageHandler={changePageHandler}
        currentPage={currentPage}
        data={data}
      />
    </div>
  );
};

DataTable.propTypes = {
  changePageHandler: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default DataTable;
