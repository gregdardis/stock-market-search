import {
  UPDATE_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  HANDLE_SEARCH
} from '../actions';

export const reducer = (state = '', action) => {
  switch (action.type) {
  case UPDATE_SEARCH_TERM:
    return action.searchTerm;
  case CLEAR_SEARCH_TERM:
    return '';
  case HANDLE_SEARCH:
    return 'YOU SEARCHED!!!!!!!!!!!!!!!!!!';
  default:
    return state;
  }
};