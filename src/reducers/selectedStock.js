import { PERFORM_SEARCH } from '../actions';

// TODO: change PERFORM_SEARCH to whatever method of setting selectedStock
// in state after retrieval from server
export const reducer = (state = '', action) => {
  switch (action.type) {
  case PERFORM_SEARCH:
    return action.searchTerm;
  default:
    return state;
  }
};