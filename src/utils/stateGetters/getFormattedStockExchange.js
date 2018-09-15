import {
  getSelectedStockValueForKey
} from '.';

// TODO: test
export const getFormattedStockExchange = state => {
  const exchange = getSelectedStockValueForKey(state, 'exchange');
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};