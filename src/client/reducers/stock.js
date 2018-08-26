import { RECEIVE_STOCK } from '../actions';

export const reducer = (
  state = {
    companyName: '',
    symbol: '',
    exchange: '',
    stockOverviewData: {}
  },
  action
) => {
  switch (action.type) {
  case RECEIVE_STOCK:
    return Object.assign({}, state, {
      companyName: action.companyName,
      exchange: action.exchange,
      fiveDayStockData: action.fiveDayStockData,
      lastUpdated: action.receivedAt,
      maxStockData: action.maxStockData,
      oneDayStockData: action.oneDayStockData,
      stockOverviewData: action.stockOverviewData,
      symbol: action.symbol
    });
  default:
    return state;
  }
};