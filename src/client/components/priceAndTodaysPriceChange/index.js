import { connect } from 'react-redux';
import numeral from 'numeral';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import {
  NUMBER_FORMAT_PERCENT,
  NUMBER_FORMAT_PRICE
} from '../../../constants/utilityConstants';
import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE
} from '../../../constants/userFacingStrings';

const getCurrentPrice = stockOverviewData => {
  return stockOverviewData[LABEL_CURRENT_PRICE].value;
};

const calculatePriceChange = stockOverviewData => {
  const previousClosePrice = stockOverviewData[LABEL_PREVIOUS_CLOSE].value;
  return getCurrentPrice(stockOverviewData) - previousClosePrice;
};
const formatAsPrice = value =>
  numeral(value).format(NUMBER_FORMAT_PRICE);

const getFormattedPriceChangePercentage = (priceChange, currentPrice) =>
  numeral(priceChange / currentPrice).format(NUMBER_FORMAT_PERCENT);

const getStockOverviewData = state => {
  const symbol = state.selectedStock;
  const selectedStock = state.stocks[symbol];
  return selectedStock.stockOverviewData;
};

const mapStateToProps = state => {
  const stockOverviewData = getStockOverviewData(state);
  const priceChange = calculatePriceChange(stockOverviewData);
  const currentPrice = getCurrentPrice(stockOverviewData);
  return {
    currentPrice: formatAsPrice(currentPrice),
    isPositiveChange: priceChange >= 0,
    priceChange: formatAsPrice(priceChange),
    priceChangePercentage: getFormattedPriceChangePercentage(
      priceChange,
      currentPrice
    )
  };
};

const PriceAndTodaysPriceChangeContainer = connect(
  mapStateToProps
)(PriceAndTodaysPriceChange);

export default PriceAndTodaysPriceChangeContainer;