import { reducer as stock } from './stock';

import { RECEIVE_STOCK, REQUEST_STOCK } from '../actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_STOCK:
  case REQUEST_STOCK:
    return Object.assign({}, state, {
      [action.stockIdentifier]: stock(state[action.stockIdentifier], action)
    });
  default:
    return state;
  }
};