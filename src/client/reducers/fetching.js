import {
  SET_DONE_FETCHING,
  SET_FETCHING
} from '../actions';

export const reducer = (state = null, action) => {
  switch (action.type) {
  case SET_FETCHING:
    return action.stockSymbol;
  case SET_DONE_FETCHING:
    return null;
  default:
    return state;
  }
};