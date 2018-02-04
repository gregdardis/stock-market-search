import { connect } from 'react-redux';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import { roundAndAddCommas } from '../../../utils/formatting/numberFormatting';

import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE,
  VALUE_PRECISION_CURRENT_PRICE,
  VALUE_PRECISION_PRICE_CHANGE,
  VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE
} from '../../../constants';

const getCurrentPrice = stockOverviewData =>
  stockOverviewData[LABEL_CURRENT_PRICE].value;

const calculatePriceChange = stockOverviewData => {
  const previousClosePrice = stockOverviewData[LABEL_PREVIOUS_CLOSE].value;
  return getCurrentPrice(stockOverviewData) - previousClosePrice;
};

const calculatePriceChangePercentage = stockOverviewData =>
  calculatePriceChange(stockOverviewData) / getCurrentPrice(stockOverviewData) * 100;

const getFormattedCurrentPrice = stockOverviewData =>
  roundAndAddCommas(
    getCurrentPrice(stockOverviewData),
    VALUE_PRECISION_CURRENT_PRICE
  );

const getFormattedPriceChange = stockOverviewData =>
  roundAndAddCommas(
    calculatePriceChange(stockOverviewData),
    VALUE_PRECISION_PRICE_CHANGE
  );

const getFormattedPriceChangePercentage = stockOverviewData =>
  `${roundAndAddCommas(
    calculatePriceChangePercentage(stockOverviewData),
    VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE
  )}%`;

const getStockOverviewData = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockOverviewData;
};

const mapStateToProps = state => {
  const stockOverviewData = getStockOverviewData(state);
  return {
    currentPrice: getFormattedCurrentPrice(stockOverviewData),
    priceChange: getFormattedPriceChange(stockOverviewData),
    priceChangePercentage: getFormattedPriceChangePercentage(stockOverviewData)
  };
};

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;