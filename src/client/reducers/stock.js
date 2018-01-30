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
      exchange: action.exchange,
      isFetching: false,
      lastUpdated: action.receivedAt,
      maxStockData: action.maxStockData,
      stockData: action.stockData,
      symbol: action.symbol
    });
  default:
    return state;
  }
};