import DataItem from './components/dataItem';

export const rowComponentsProps = [
  {
    componentsProps: [
      {
        label: 'Open',
        valuePrecision: 2
      },
      {
        label: 'High',
        valuePrecision: 2
      },
      {
        label: 'Low',
        valuePrecision: 2
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '1'
  },
  {
    componentsProps: [
      {
        label: 'Mkt Cap',
        valuePrecision: 3
      },
      {
        label: 'Volume',
        optionalLabel: 'Avg',
        valuePrecision: 0
      },
      {
        label: 'Div',
        optionalLabel: '%',
        valuePrecision: 2,
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
        label: 'P/E Ratio',
        optionalLabel: 'eps',
        valuePrecision: 2,
        optionalValuePrecision: 2
      },
      {
        label: 'ROE',
        valuePrecision: 1
      },
      {
        label: 'FCFY',
        valuePrecision: 1
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '3'
  }
];