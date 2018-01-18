import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import { addCommas } from '../../utils/formatting/dataItem';

import {
  LABEL_CURRENT_PRICE,
  LABEL_OPEN,
  VALUE_PRECISION_CURRENT_PRICE
} from '../../constants';

const getCurrentPrice = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  const stockData = selectedStock.stockData;

  const currentPrice = stockData[LABEL_CURRENT_PRICE].value;
  return currentPrice.toFixed(VALUE_PRECISION_CURRENT_PRICE);
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
  currentPrice: addCommas(getCurrentPrice(state)),
  priceChange: calculatePriceChange(state),
  priceChangePercentage: calculatePriceChangePercentage(state)
});

const mapDispatchToProps = null;

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;