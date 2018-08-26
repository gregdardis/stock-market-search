import {
  CLEAR_ERROR,
  CLEAR_SEARCH_TEXT,
  SET_ERROR,
  UPDATE_SEARCH_TEXT
} from '../actions';

export const reducer = (
  state = {
    currentSearchText: '',
    error: null
  },
  action
) => {
  switch (action.type) {
  case CLEAR_ERROR:
    return {
      ...state,
      error: null
    };
  case CLEAR_SEARCH_TEXT:
    return {
      ...state,
      currentSearchText: ''
    };
  case SET_ERROR:
    return {
      ...state,
      error: action.errorMessage
    };
  case UPDATE_SEARCH_TEXT:
    return {
      ...state,
      // Only allow uppercase characters in the search bar
      currentSearchText: action.searchText.toUpperCase()
    };
  default:
    return state;
  }
};