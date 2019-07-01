import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PAGE_SIZE } from '../../../constants/global';

import s from './styles.module.scss';

const Limit = props => {
  const [value, setValue] = useState(PAGE_SIZE);

  const onChangeValue = e => setValue(e.target.value);

  const onClickLimit = e => {
    e.preventDefault();
    const { onApplyLimit } = props;
    onApplyLimit(value);
  };

  return (
    <form className="form-inline" onSubmit={onClickLimit}>
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Specify limit value
          </span>
        </div>
        <input
          type="text"
          placeholder="Specify limit"
          name="limit"
          value={value}
          onChange={onChangeValue}
          className={`${s.limitValue} form-control`}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <button type="submit" className="btn btn-info btn-sm" id="limit">
        Apply
      </button>
    </form>
  );
};

Limit.propTypes = {
  onApplyLimit: PropTypes.func.isRequired,
};

export default Limit;
