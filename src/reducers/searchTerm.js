import {
  UPDATE_SEARCH_TERM,
  CLEAR_SEARCH_TERM
} from '../actions';

export const reducer = (state = '', action) => {
  switch (action.type) {
  case UPDATE_SEARCH_TERM:
    return action.searchTerm;
  case CLEAR_SEARCH_TERM:
    return '';
  default:
    return state;
  }
};