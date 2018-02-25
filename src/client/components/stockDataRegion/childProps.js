import DataItem from '../dataItem';

import {
  LABEL_AVERAGE,
  LABEL_DIVIDEND,
  LABEL_FCFY,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_MARKET_CAP,
  LABEL_OPEN,
  LABEL_PE_RATIO,
  LABEL_ROE,
  LABEL_VOLUME,
  OPTIONAL_LABEL_DIVIDEND,
  OPTIONAL_LABEL_EPS
} from '../../../constants';

export const rowComponentsProps = [
  {
    componentsProps: [
      {
        label: LABEL_OPEN
      },
      {
        label: LABEL_HIGH
      },
      {
        label: LABEL_LOW
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '1'
  },
  {
    componentsProps: [
      {
        label: LABEL_MARKET_CAP
      },
      {
        label: LABEL_VOLUME,
        optionalLabel: LABEL_AVERAGE
      },
      {
        label: LABEL_DIVIDEND,
        optionalLabel: OPTIONAL_LABEL_DIVIDEND
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '2'
  },
  {
    componentsProps: [
      {
        label: LABEL_PE_RATIO,
        optionalLabel: OPTIONAL_LABEL_EPS
      },
      {
        label: LABEL_ROE
      },
      {
        label: LABEL_FCFY
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '3'
  }
];