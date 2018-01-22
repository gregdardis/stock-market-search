import { connect } from 'react-redux';

import Exchange from './Exchange';

const getStockExchange = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.exchange;
};

const getFormattedStockExchange = state => {
  const exchange = getStockExchange(state);
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};

const mapStateToProps = state => ({
  exchange: getFormattedStockExchange(state)
});

const ExchangeContainer = connect(
  mapStateToProps
)(Exchange);

export default ExchangeContainer;