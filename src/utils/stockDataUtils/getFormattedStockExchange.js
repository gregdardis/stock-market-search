import { exchangeSelector } from '../../client/selectors';

export const getFormattedStockExchange = state => {
  const exchange = exchangeSelector(state);
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};