import {
  DEFINITION_OPEN,
  DEFINITION_HIGH,
  DEFINITION_LOW,
  DEFINITION_MARKET_CAP,
  DEFINITION_VOLUME,
  DEFINITION_DIVIDEND,
  DEFINITION_PE_RATIO,
  DEFINITION_ROE,
  DEFINITION_FCFY
} from '../../../constants';

module.exports = {
  getDefinitionsArray: () => {
    return [
      {
        title: DEFINITION_DIVIDEND,
        definition: 'An amount of the company\'s profits which is paid to the ' +
        'holders of that company\'s stock. Dividend is paid as a certain amount per share. ' +
        'Dividend yield is a percentage calculated as (dividend per share / price per share) * 100%.'
      },
      {
        title: DEFINITION_FCFY,
        definition: 'A comparison between free cash flow per share and share price. ' +
        'Higher percentages mean the company is generating more free cash flow per share, which is appealing. ' +
        'Calculated as (free cash flow per share / market price per share) * 100%.'
      },
      {
        title: DEFINITION_HIGH,
        definition: 'Highest price at which a stock was traded during the trading day.'
      },
      {
        title: DEFINITION_LOW,
        definition: 'Lowest price at which a stock was traded during the trading day.'
      },
      {
        title: DEFINITION_MARKET_CAP,
        definition: 'Market capitalization (market cap) is the total ' +
        'market value of a company\'s outstanding shares. ' +
        'To calculate market cap, multiply the company\'s number of outstanding shares by it\'s share price.'
      },
      {
        title: DEFINITION_OPEN,
        definition: 'Price of the security at the beginning of the trading day.'
      },
      {
        title: DEFINITION_PE_RATIO,
        definition: 'Used for valuing a company, P/E ratio the ratio of ' +
        'a company\'s share price to it\'s earnings per share. ' +
        'A low P/E ratio can suggest a stock is undervalued, ' +
        'but factoring in future growth rate and other metrics can say otherwise. ' +
        'Earnings per share (abbrev. EPS) is net income per outstanding share of common stock.'
      },
      {
        title: DEFINITION_ROE,
        definition: 'How well the company generates returns on the investment from it\'s shareholders. ' +
        'It is how much after tax profit the company earned in comparison to total shareholder equity. ' +
        'Calculated as (net income / shareholder equity) * 100%.'
      },
      {
        title: DEFINITION_VOLUME,
        definition: 'The total number of a security that changed hands during the trading day. ' +
        'Average volume is the average number of a security that changes hands during a trading day.'
      }
    ];
  }
};