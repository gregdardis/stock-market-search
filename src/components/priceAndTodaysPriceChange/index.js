import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import { roundAndAddCommas } from '../../utils/formatting/numberFormatting';

import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE,
  VALUE_PRECISION_CURRENT_PRICE,
  VALUE_PRECISION_PRICE_CHANGE,
  VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE
} from '../../constants';

const getCurrentPrice = stockData =>
  stockData[LABEL_CURRENT_PRICE].value;

const calculatePriceChange = stockData => {
  const previousClosePrice = stockData[LABEL_PREVIOUS_CLOSE].value;
  return getCurrentPrice(stockData) - previousClosePrice;
};

const calculatePriceChangePercentage = stockData =>
  calculatePriceChange(stockData) / getCurrentPrice(stockData) * 100;

const getFormattedCurrentPrice = stockData =>
  roundAndAddCommas(
    getCurrentPrice(stockData),
    VALUE_PRECISION_CURRENT_PRICE
  );

const getFormattedPriceChange = stockData =>
  roundAndAddCommas(
    calculatePriceChange(stockData),
    VALUE_PRECISION_PRICE_CHANGE
  );

const getFormattedPriceChangePercentage = stockData =>
  `${roundAndAddCommas(
    calculatePriceChangePercentage(stockData),
    VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE
  )}%`;

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