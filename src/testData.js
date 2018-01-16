import DataItem from './components/dataItem';

import {
  LABEL_OPEN,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_MARKET_CAP,
  LABEL_VOLUME,
  LABEL_AVERAGE,
  LABEL_DIVIDEND,
  LABEL_PE_RATIO,
  LABEL_EPS,
  LABEL_ROE,
  LABEL_FCFY,
  OPEN_VALUE_PRECISION,
  HIGH_VALUE_PRECISION,
  LOW_VALUE_PRECISION,
  MARKET_CAP_VALUE_PRECISION,
  VOLUME_VALUE_PRECISION,
  DIVIDEND_VALUE_PRECISION,
  PE_VALUE_PRECISION,
  ROE_VALUE_PRECISION,
  FCFY_VALUE_PRECISION
} from './constants';

export const rowComponentsProps = [
  {
    componentsProps: [
      {
        label: LABEL_OPEN,
        valuePrecision: OPEN_VALUE_PRECISION
      },
      {
        label: LABEL_HIGH,
        valuePrecision: HIGH_VALUE_PRECISION
      },
      {
        label: LABEL_LOW,
        valuePrecision: LOW_VALUE_PRECISION
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '1'
  },
  {
    componentsProps: [
      {
        label: LABEL_MARKET_CAP,
        valuePrecision: MARKET_CAP_VALUE_PRECISION
      },
      {
        label: LABEL_VOLUME,
        optionalLabel: LABEL_AVERAGE,
        valuePrecision: VOLUME_VALUE_PRECISION
      },
      {
        label: LABEL_DIVIDEND,
        optionalLabel: '%',
        valuePrecision: DIVIDEND_VALUE_PRECISION,
        optionalValuePrecision: 2
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
        optionalLabel: LABEL_EPS,
        valuePrecision: PE_VALUE_PRECISION,
        optionalValuePrecision: 2
      },
      {
        label: LABEL_ROE,
        valuePrecision: ROE_VALUE_PRECISION
      },
      {
        label: LABEL_FCFY,
        valuePrecision: FCFY_VALUE_PRECISION
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '3'
  }
];