import { PERFORM_SEARCH } from '../actions';

export const reducer = (state = '', action) => {
  switch (action.type) {
  case PERFORM_SEARCH:
    return action.searchTerm;
  default:
    return state;
  }
};