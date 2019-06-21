import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.scss';

const Loader = ({ isLoading }) => {
  let content = null;
  if (isLoading) {
    content = (
      <div className={s.root}>
        <div className={s.ldsDefault}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return content;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
