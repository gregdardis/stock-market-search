import {
  UPDATE_DATA_ITEMS
} from '../actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case UPDATE_DATA_ITEMS:
    return action.dataItems;
  default:
    return state;
  }
};