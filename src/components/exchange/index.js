import { connect } from 'react-redux';

import Exchange from './Exchange';

const getStockExchange = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.exchange;
};

const mapStateToProps = state => {
  return {
    exchange: getStockExchange(state)
  };
};

const ExchangeContainer = connect(
  mapStateToProps
)(Exchange);

export default ExchangeContainer;