import { combineReducers } from 'redux';

import { reducer as searchTerm } from './searchTerm';

export const reducer = combineReducers({
  searchTerm
});