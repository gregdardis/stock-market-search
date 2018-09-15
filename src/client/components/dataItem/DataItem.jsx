import React from 'react';
import PropTypes from 'prop-types';

import './dataItem.css';

const DataItem = ({
  label,
  showBottomBorder,
  value
}) => {
  const dataItemClass = 'dataItem' +
    (showBottomBorder ? ' dataItemBorder' : '');
  return (
    <div className={ dataItemClass } >
      <span>
        { label }
      </span>
      <span className='value'>
        { value }
      </span>
    </div>
  );
};
DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  showBottomBorder: PropTypes.bool,
  value: PropTypes.string.isRequired
};
export default DataItem;