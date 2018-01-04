import React from 'react';
import PropTypes from 'prop-types';

import './dataItem.css';

const DataItem = ({
  label,
  optionalLabel,
  value,
  optionalValue,
  valueSuffix,
  optionalValueSuffix
}) => {
  return (
    <div className='dataItem'>
      <span>
        <a>{ label }</a>
        { optionalLabel
          ? <a>({ optionalLabel })</a>
          : ' ' }
      </span>
      <span>
        <span className='value'>{ value + valueSuffix }</span>
        { optionalValue
          ? <span className='optional-value'>
            ({ optionalValue + optionalValueSuffix })
          </span>
          : ' '}
      </span>
    </div>
  );
};
DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  value: PropTypes.number.isRequired,
  optionalValue: PropTypes.number,
  valueSuffix: PropTypes.string,
  optionalValueSuffix: PropTypes.string
};
export default DataItem;