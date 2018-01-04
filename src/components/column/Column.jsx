import React from 'react';
import PropTypes from 'prop-types';

import DataItem from '../dataItem';
import './column.css';

const Column = ({
  componentsProps
}) => (
  <div className='column'>
    { componentsProps.map(p => (
      <DataItem
        key={ p.label }
        { ...p } />
    ))}
  </div>
);
Column.propTypes = {
  componentsProps: PropTypes.array
};

export default Column;