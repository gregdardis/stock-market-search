import {
  RECEIVE_STOCK,
  SET_STOCK_FROM_MEM_CACHE
} from '../actions';

export const reducer = (state = '', action) => {
  switch (action.type) {
  case RECEIVE_STOCK:
  case SET_STOCK_FROM_MEM_CACHE:
    return action.symbol;
  default:
    return state;
  }
};