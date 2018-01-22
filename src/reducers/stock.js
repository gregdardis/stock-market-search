import { REQUEST_STOCK, RECEIVE_STOCK } from '../actions';

export const reducer = (
  state = {
    companyName: '',
    symbol: '',
    exchange: '',
    isFetching: false,
    stockData: {}
  },
  action
) => {
  switch (action.type) {
  case REQUEST_STOCK:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_STOCK:
    return Object.assign({}, state, {
      companyName: action.companyName,
      symbol: action.symbol,
      exchange: action.exchange,
      isFetching: false,
      stockData: action.stockData,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
};