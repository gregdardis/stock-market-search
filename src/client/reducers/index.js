import { combineReducers } from 'redux';

import { reducer as chartTimePeriod } from './chartTimePeriod';
import { reducer as searchTerm } from './searchTerm';
import { reducer as selectedStock } from './selectedStock';
import { reducer as stocks } from './stocks';

export const reducer = combineReducers({
  chartTimePeriod,
  searchTerm,
  selectedStock,
  stocks
});