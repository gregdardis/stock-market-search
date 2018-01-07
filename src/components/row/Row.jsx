import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({
  componentsProps,
  rowKeyName,
  rowCellComponent
}) => {
  const RowCell = rowCellComponent;
  return (
    <div className='row'>
      { componentsProps.map(p => (
        <RowCell
          key={ p[rowKeyName] }
          { ...p }
        />
      ))}
    </div>
  );
};

Row.propTypes = {
  componentsProps: PropTypes.array.isRequired,
  rowKeyName: PropTypes.string.isRequired,
  rowCellComponent: PropTypes.func.isRequired
};

export default Row;