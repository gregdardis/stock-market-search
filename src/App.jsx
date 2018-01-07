import React from 'react';

import Search from './components/search';
import Column from './components/column';
import Row from './components/row';
import DataItem from './components/dataItem';

const App = () => (
  <div>
    <Search />
    <Row
      componentsProps={[
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
              label: 'Mkt Cap',
              optionalLabel: 'M/B'
            },
            {
              label: 'Volume',
              optionalLabel: 'K/M'
            },
            {
              label: 'Div',
              optionalLabel: '%'
            }
          ],
          columnKeyName: 'label',
          columnCellComponent: DataItem,
          rowKey: '2'
        }
      ]}
      rowKeyName='rowKey'
      rowCellComponent= { Column }
    />
  </div>
);

export default App;