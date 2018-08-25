import {
  CLEAR_SEARCH_TERM,
  UPDATE_SEARCH_TERM
} from '../actions';

export const reducer = (
  state = {
    currentSearchText: ''
  },
  action
) => {
  switch (action.type) {
  case UPDATE_SEARCH_TERM:
    return {
      ...state,
      // Only allow uppercase characters in the search bar
      currentSearchText: action.searchText.toUpperCase()
    };
  case CLEAR_SEARCH_TERM:
    return {
      ...state,
      currentSearchText: ''
    };
  default:
    return state;
  }
};