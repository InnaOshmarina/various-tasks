import React from 'react';
import PropTypes from 'prop-types';

const DataTable = props => {
  const { data, onSort, sortDirection, sortField } = props;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" onClick={onSort.bind(null, 'id')}>
            id {sortField === 'id' ? <small>{sortDirection}</small> : null}
          </th>
          <th scope="col" onClick={onSort.bind(null, 'firstName')}>
            firstName{' '}
            {sortField === 'firstName' ? <small>{sortDirection}</small> : null}
          </th>
          <th scope="col" onClick={onSort.bind(null, 'lastName')}>
            lastName{' '}
            {sortField === 'lastName' ? <small>{sortDirection}</small> : null}
          </th>
          <th scope="col" onClick={onSort.bind(null, 'email')}>
            email{' '}
            {sortField === 'email' ? <small>{sortDirection}</small> : null}
          </th>
          <th scope="col" onClick={onSort.bind(null, 'phone')}>
            phone{' '}
            {sortField === 'phone' ? <small>{sortDirection}</small> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(el => (
          <tr key={el.id + el.phone}>
            <td>{el.id}</td>
            <td>{el.firstName}</td>
            <td>{el.lastName}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default DataTable;
