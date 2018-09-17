import { selectedStockValueForKeySelector } from '../../client/selectors';

export const getFormattedStockExchange = state => {
  const exchange = selectedStockValueForKeySelector(state, 'exchange');
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};