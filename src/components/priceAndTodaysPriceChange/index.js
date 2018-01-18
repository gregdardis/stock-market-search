import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';

import {
  LABEL_CURRENT_PRICE,
  LABEL_OPEN
} from '../../constants';

const getCurrentPrice = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  const stockData = selectedStock.stockData;
  return (stockData[LABEL_CURRENT_PRICE].value).toString();
};

const calculatePriceChange = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  const stockData = selectedStock.stockData;

  const openPrice = stockData[LABEL_OPEN].value;
  return (getCurrentPrice(state) - openPrice).toString();
};

const calculatePriceChangePercentage = state => {
  return `${(calculatePriceChange(state) / getCurrentPrice(state) * 100).toString()}%`;
};

const mapStateToProps = state => ({
  currentPrice: getCurrentPrice(state),
  priceChange: calculatePriceChange(state),
  priceChangePercentage: calculatePriceChangePercentage(state)
});

const mapDispatchToProps = null;

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;