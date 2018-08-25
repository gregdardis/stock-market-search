import { combineReducers } from 'redux';

import { reducer as chartTimePeriodIndex } from './chartTimePeriodIndex';
import { reducer as searchTerm } from './searchTerm';
import { reducer as selectedStock } from './selectedStock';
import { reducer as stocks } from './stocks';
import { reducer as searchError } from './searchError';

export const reducer = combineReducers({
  chartTimePeriodIndex,
  searchError,
  searchTerm,
  selectedStock,
  stocks
});