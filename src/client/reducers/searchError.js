import {
  CLEAR_SEARCH_ERROR,
  SET_SEARCH_ERROR
} from '../actions';

export const reducer = (state = null, action) => {
  switch (action.type) {
  case SET_SEARCH_ERROR:
    return action.errorMessage;
  case CLEAR_SEARCH_ERROR:
    return null;
  default:
    return state;
  }
};