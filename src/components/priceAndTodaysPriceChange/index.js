import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import { addCommas } from '../../utils/formatting/dataItem';

import {
  LABEL_CURRENT_PRICE,
  LABEL_OPEN,
  VALUE_PRECISION_CURRENT_PRICE,
  VALUE_PRECISION_PRICE_CHANGE,
  VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE
} from '../../constants';

const getStockData = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockData;
};

const getCurrentPrice = stockData => {
  const currentPrice = stockData[LABEL_CURRENT_PRICE].value;
  return currentPrice.toFixed(VALUE_PRECISION_CURRENT_PRICE);
};

const calculatePriceChange = stockData => {
  const openPrice = stockData[LABEL_OPEN].value;
  return (getCurrentPrice(stockData) - openPrice)
    .toFixed(VALUE_PRECISION_PRICE_CHANGE);
};

const calculatePriceChangePercentage = stockData => {
  return `${(calculatePriceChange(stockData) / getCurrentPrice(stockData) * 100)
    .toFixed(VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE)}%`;
};

const mapStateToProps = state => {
  const stockData = getStockData(state);
  return {
    currentPrice: addCommas(getCurrentPrice(stockData)),
    priceChange: addCommas(calculatePriceChange(stockData)),
    priceChangePercentage: calculatePriceChangePercentage(stockData)
  };
};

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;