import {
  SET_IS_FETCHING
} from '../actions';

export const reducer = (state = false, action) => {
  switch (action.type) {
  case SET_IS_FETCHING:
    return action.isFetching;
  default:
    return state;
  }
};