import React from 'react';
import PropTypes from 'prop-types';

import './dataItem.css';

const DataItem = ({
  label,
  value
}) => {
  return (
    <div className='dataItem'>
      <span>
        { label }
      </span>
      <span>
        { value }
      </span>
    </div>
  );
};
DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
export default DataItem;