import {
  CLEAR_ERROR,
  SET_ERROR
} from '../actions';

export const reducer = (state = null, action) => {
  switch (action.type) {
  case SET_ERROR:
    return action.errorMessage;
  case CLEAR_ERROR:
    return null;
  default:
    return state;
  }
};