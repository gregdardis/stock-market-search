import React from 'react';
import PropTypes from 'prop-types';

import './column.css';

const Column = ({
  componentsProps,
  columnKeyName,
  columnCellComponent
}) => {
  const ColumnCell = columnCellComponent;

  const showCellBottomBorder = cellIndex =>
    cellIndex + 1 !== componentsProps.length;

  return (
    <div className='column'>
      { componentsProps.map((cellProps, i) => (
        <ColumnCell
          key={ cellProps[columnKeyName] }
          { ...cellProps }
          showBottomBorder={ showCellBottomBorder(i) }
        />
      )) }
    </div>
  );
};
// TODO: if we don't want them to be required, handle that case with a ternary in the jsx
// before deleting isRequired
Column.propTypes = {
  componentsProps: PropTypes.array.isRequired,
  columnKeyName: PropTypes.string.isRequired,
  columnCellComponent: PropTypes.func.isRequired
};

export default Column;