import {
  CLEAR_ERROR,
  CLEAR_SEARCH_TEXT,
  RECEIVE_SEARCH_ERROR,
  UPDATE_SEARCH_TEXT
} from '../actions';

export const reducer = (
  state = {
    currentText: '',
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
      currentText: ''
    };
  case RECEIVE_SEARCH_ERROR:
    return {
      ...state,
      error: action.errorMessage
    };
  case UPDATE_SEARCH_TEXT:
    return {
      ...state,
      // Only allow uppercase characters in the search bar
      currentText: action.searchText.toUpperCase()
    };
  default:
    return state;
  }
};