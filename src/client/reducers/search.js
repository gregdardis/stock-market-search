import {
  CLEAR_SEARCH_TERM,
  REQUEST_STOCK,
  UPDATE_SEARCH_TERM
} from '../actions';

export const reducer = (
  state = {
    currentSearchText: '',
    lastSearch: ''
  },
  action
) => {
  switch (action.type) {
  case UPDATE_SEARCH_TERM:
    return {
      ...state,
      currentSearchText: action.searchText
    };
  case CLEAR_SEARCH_TERM:
    return {
      ...state,
      currentSearchText: ''
    };
  case REQUEST_STOCK:
    return {
      ...state,
      lastSearch: state.currentSearchText
    };
  default:
    return state;
  }
};