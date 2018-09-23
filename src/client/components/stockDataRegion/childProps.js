import DataItem from '../dataItem';

import {
  LABEL_AVERAGE,
  LABEL_FCFY,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_MARKET_CAP,
  LABEL_OPEN,
  LABEL_PE_RATIO,
  LABEL_ROE,
  LABEL_VOLUME,
  OPTIONAL_LABEL_EPS
} from '../../../constants/userFacingStrings';

export function cellShouldShowBottomBorder(cellIndex, numCells) {
  return cellIndex + 1 !== numCells;
}

const singleColumnProps = {
  cellShouldShowBottomBorder,
  columnCellComponent: DataItem,
  columnKeyName: 'label'
};

export const columnComponentsProps = {
  componentsProps: [
    {
      key: 0,
      label: LABEL_OPEN
    },
    {
      key: 1,
      label: LABEL_HIGH
    },
    {
      key: 2,
      label: LABEL_LOW
    },
    {
      key: 3,
      label: LABEL_MARKET_CAP
    },
    {
      key: 4,
      label: LABEL_VOLUME,
      optionalLabel: LABEL_AVERAGE
    },
    {
      key: 5,
      label: LABEL_PE_RATIO,
      optionalLabel: OPTIONAL_LABEL_EPS
    },
    {
      key: 6,
      label: LABEL_ROE
    },
    {
      key: 7,
      label: LABEL_FCFY
    }
  ],
  ...singleColumnProps
};