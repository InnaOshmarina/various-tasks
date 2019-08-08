/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Child = ({ updateData }) => {
  const [name] = useState('Бумеранг вернулся назад.');

  return (
    <div className="App">
      <button
        onClick={() => {
          updateData(name);
        }}
      >
        Запустить бумеранг
      </button>
    </div>
  );
};

Child.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default Child;
