import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.scss';

const Search = props => {
  const [value, setValue] = useState('');

  const onChangeValue = e => setValue(e.target.value);

  const onClickSearch = e => {
    e.preventDefault();
    const { onSearch } = props;
    onSearch(value);
  };

  return (
    <form className="form-inline" onSubmit={onClickSearch}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <i className="fas fa-search" />
          </span>
        </div>
        <input
          className={`${s.searchValue} form-control`}
          type="text"
          placeholder="Search..."
          name="search"
          value={value}
          onChange={onChangeValue}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <button type="submit" className="btn btn-success" id="search">
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
