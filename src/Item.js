import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ children, label }) => (
  <div className="item">
    <h6 className="item-label">{label}:</h6>
    {children}
  </div>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Item;
