import { PERFORM_SEARCH } from '../actions';

const selectedStock = (state = '', action) => {
  switch (action.type) {
  case PERFORM_SEARCH:
    return action.searchTerm;
  default:
    return state;
  }
};

export default selectedStock;