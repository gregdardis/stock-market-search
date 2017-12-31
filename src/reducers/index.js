import { combineReducers } from 'redux';

import { reducer as searchTerm } from './searchTerm';
import { reducer as dataItems } from './dataItems';

export const reducer = combineReducers({
  searchTerm,
  dataItems
});