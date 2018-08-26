import { reducer as stock } from './stock';

import {
  RECEIVE_STOCK
} from '../actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_STOCK:
    return Object.assign({}, state, {
      [action.symbol]: stock(state[action.symbol], action)
    });
  default:
    return state;
  }
};