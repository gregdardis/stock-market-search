import { connect } from 'react-redux';
import numeral from 'numeral';

import PriceAndTodaysPriceChange from './PriceAndTodaysPriceChange';
import {
  NUMBER_FORMAT_PERCENT
} from '../../../constants/formatting';
import {
  currentPriceValueSelector,
  previousCloseValueSelector
} from '../../selectors';
import { formatAsPrice } from '../../../utils/formatting/numberFormatting';

// TODO: test this file
// TODO: extract these methods into utils and stub in this file tests
const calculatePriceChange = state => {
  return currentPriceValueSelector(state) - previousCloseValueSelector(state);
};

const getFormattedPriceChangePercentage = (priceChange, currentPrice) =>
  numeral(priceChange / currentPrice).format(NUMBER_FORMAT_PERCENT);

const mapStateToProps = state => {
  const priceChange = calculatePriceChange(state);
  const currentPrice = currentPriceValueSelector(state);
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

export default connect(mapStateToProps)(PriceAndTodaysPriceChange);