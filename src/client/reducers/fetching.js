import {
  RECEIVE_SEARCH_ERROR,
  RECEIVE_STOCK,
  SET_FETCHING
} from '../actions';

export const reducer = (state = null, action) => {
  switch (action.type) {
  case SET_FETCHING:
    return action.stockSymbol;
  case RECEIVE_SEARCH_ERROR:
  case RECEIVE_STOCK:
    return null;
  default:
    return state;
  }
};