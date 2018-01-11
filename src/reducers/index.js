import { combineReducers } from 'redux';

import { reducer as searchTerm } from './searchTerm';
import { reducer as dataItems } from './dataItems';
import { reducer as selectedStock } from './selectedStock';
import { reducer as stocks } from './stocks';

export const reducer = combineReducers({
  searchTerm,
  dataItems,
  selectedStock,
  stocks
});