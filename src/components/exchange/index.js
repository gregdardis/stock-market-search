import { connect } from 'react-redux';

import Exchange from './Exchange';

const retrieveStockExchange = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.exchange;
};

const getFormattedStockExchange = state => {
  const exchange = retrieveStockExchange(state);
  switch (exchange) {
  case 'Toronto':
    return 'TSX';
  case 'NasdaqGS':
    return 'NASDAQ';
  default:
    return exchange;
  }
};

const mapStateToProps = state => {
  return {
    exchange: getFormattedStockExchange(state)
  };
};

const ExchangeContainer = connect(
  mapStateToProps
)(Exchange);

export default ExchangeContainer;