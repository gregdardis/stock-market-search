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

const getCurrentPrice = stockData =>
  stockData[LABEL_CURRENT_PRICE].value;

const calculatePriceChange = stockData => {
  const openPrice = stockData[LABEL_OPEN].value;
  return getCurrentPrice(stockData) - openPrice;
};

const calculatePriceChangePercentage = stockData =>
  calculatePriceChange(stockData) / getCurrentPrice(stockData) * 100;

const getFormattedCurrentPrice = stockData =>
  addCommas(
    getCurrentPrice(
      stockData
    ).toFixed(VALUE_PRECISION_CURRENT_PRICE)
  );

const getFormattedPriceChange = stockData =>
  addCommas(
    calculatePriceChange(
      stockData
    ).toFixed(VALUE_PRECISION_PRICE_CHANGE)
  );

const getFormattedPriceChangePercentage = stockData =>
  `${calculatePriceChangePercentage(stockData)
    .toFixed(VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE)}%`;

const getStockData = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockData;
};

const mapStateToProps = state => {
  const stockData = getStockData(state);
  return {
    currentPrice: getFormattedCurrentPrice(stockData),
    priceChange: getFormattedPriceChange(stockData),
    priceChangePercentage: getFormattedPriceChangePercentage(stockData)
  };
};

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;