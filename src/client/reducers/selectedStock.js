import { RECEIVE_STOCK } from '../actions';

export const reducer = (state = '', action) => {
  switch (action.type) {
  case RECEIVE_STOCK:
    return action.symbol;
  default:
    return state;
  }
};