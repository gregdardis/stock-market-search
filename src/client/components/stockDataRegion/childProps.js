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
  OPTIONAL_LABEL_EPS,
  VALUE_PRECISION_DIVIDEND,
  VALUE_PRECISION_EPS,
  VALUE_PRECISION_FCFY,
  VALUE_PRECISION_HIGH,
  VALUE_PRECISION_LOW,
  VALUE_PRECISION_MARKET_CAP,
  VALUE_PRECISION_OPEN,
  VALUE_PRECISION_PE,
  VALUE_PRECISION_ROE,
  VALUE_PRECISION_VOLUME
} from '../../../constants';

export const rowComponentsProps = [
  {
    componentsProps: [
      {
        label: LABEL_OPEN,
        valuePrecision: VALUE_PRECISION_OPEN
      },
      {
        label: LABEL_HIGH,
        valuePrecision: VALUE_PRECISION_HIGH
      },
      {
        label: LABEL_LOW,
        valuePrecision: VALUE_PRECISION_LOW
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
        valuePrecision: VALUE_PRECISION_MARKET_CAP
      },
      {
        label: LABEL_VOLUME,
        optionalLabel: LABEL_AVERAGE,
        valuePrecision: VALUE_PRECISION_VOLUME
      },
      {
        label: LABEL_DIVIDEND,
        optionalLabel: OPTIONAL_LABEL_DIVIDEND,
        valuePrecision: VALUE_PRECISION_DIVIDEND,
        optionalValuePrecision: VALUE_PRECISION_DIVIDEND
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
        optionalLabel: OPTIONAL_LABEL_EPS,
        valuePrecision: VALUE_PRECISION_PE,
        optionalValuePrecision: VALUE_PRECISION_EPS
      },
      {
        label: LABEL_ROE,
        valuePrecision: VALUE_PRECISION_ROE
      },
      {
        label: LABEL_FCFY,
        valuePrecision: VALUE_PRECISION_FCFY
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '3'
  }
];