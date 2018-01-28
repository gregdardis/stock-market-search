import {
  DEFINITION_OPEN,
  DEFINITION_HIGH,
  DEFINITION_LOW,
  DEFINITION_MARKET_CAP
} from '../../../constants';

module.exports = Object.freeze({
  [DEFINITION_OPEN]: 'Price of the security at the beginning of the trading day.',
  [DEFINITION_HIGH]: 'Highest price at which a stock was traded during the trading day.',
  [DEFINITION_LOW]: 'Lowest price at which a stock was traded during the trading day.',
  [DEFINITION_MARKET_CAP]: 'Market capitalization (market cap) is the total ' +
  'market value of a company\'s outstanding shares. ' +
  'To calculate market cap, multiply the company\'s number of outstanding shares it\'s share price.'
});