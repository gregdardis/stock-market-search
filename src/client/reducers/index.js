import { combineReducers } from 'redux';

import { reducer as chartTimePeriodIndex } from './chartTimePeriodIndex';
import { reducer as isFetching } from './isFetching';
import { reducer as search } from './search';
import { reducer as selectedStock } from './selectedStock';
import { reducer as stocks } from './stocks';

export const reducer = combineReducers({
  chartTimePeriodIndex,
  isFetching,
  search,
  selectedStock,
  stocks
});