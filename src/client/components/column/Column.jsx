import React from 'react';
import PropTypes from 'prop-types';

import './column.css';

const Column = ({
  // The cellShouldShowBottomBorder function allows us to optionally customize
  // the appearance of individual cells in the column, by giving them a bottom
  // border.
  cellShouldShowBottomBorder = () => false,
  columnCellComponent,
  columnKeyName,
  componentsProps
}) => {
  const ColumnCell = columnCellComponent;
  return (
    <div className='column'>
      { componentsProps.map((cellProps, i) => (
        <ColumnCell
          key={ cellProps[columnKeyName] }
          { ...cellProps }
          showBottomBorder={
            cellShouldShowBottomBorder(i, componentsProps.length)
          }
        />
      )) }
    </div>
  );
};
// TODO: if we don't want them to be required, handle that case
// with a ternary or default param values in the jsx before deleting isRequired
Column.propTypes = {
  cellShouldShowBottomBorder: PropTypes.func,
  columnCellComponent: PropTypes.func.isRequired,
  columnKeyName: PropTypes.string.isRequired,
  componentsProps: PropTypes.array.isRequired
};

export default Column;