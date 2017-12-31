import React from 'react';
import PropTypes from 'prop-types';

import './dataItem.css';

const DataItem = ({
  label,
  optionalLabel,
  value,
  optionalValue
}) => {
  return (
    <div className='dataItem'>
      <a>{ label }</a>
      { optionalLabel
        ? <a>({ optionalLabel })</a>
        : ' ' }
      <span>{ value }</span>
      { optionalValue
        ? <span>({ optionalValue })</span>
        : ' '}
    </div>
  );
};
DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  optionalValue: PropTypes.string
};
export default DataItem;