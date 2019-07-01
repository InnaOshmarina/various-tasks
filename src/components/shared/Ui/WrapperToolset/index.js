import React, { memo } from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.scss';

// const WrapperToolset = memo(({ children }) => (
//   <div className='container'>
//     {children}
//   </div>
// ));

const WrapperToolset = memo(({ children }) => {
  const elements = children.map((el, index) => (
    <div key={index} className={`row ${s.element}`}>
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">{el}</div>
    </div>
  ));
  return <div className={`container ${s.root}`}>{elements}</div>;
});

WrapperToolset.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperToolset;
