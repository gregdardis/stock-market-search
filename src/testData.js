import DataItem from './components/dataItem';

export const rowComponentsProps = [
  {
    componentsProps: [
      {
        label: 'Open'
      },
      {
        label: 'High'
      },
      {
        label: 'Low'
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '1'
  },
  {
    componentsProps: [
      {
        label: 'Mkt Cap'
      },
      {
        label: 'Volume',
        optionalLabel: 'Avg'
      },
      {
        label: 'Div',
        optionalLabel: '%'
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
        optionalLabel: 'eps'
      },
      {
        label: 'ROE'
      },
      {
        label: 'FCFY'
      }
    ],
    columnKeyName: 'label',
    columnCellComponent: DataItem,
    rowKey: '3'
  }
];