import React from 'react';
import PropTypes from 'prop-types';

import './dataItem.css';

export const DataItem = ({
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
      { value
        ? <span className='value'>
          { value }
        </span>
        : null }
    </div>
  );
};
DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  showBottomBorder: PropTypes.bool,
  value: PropTypes.string
};
export default DataItem;