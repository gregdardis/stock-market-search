module.exports = {
  getDefinitionsArray: () => {
    return [
      {
        title: 'Dividend (Yield %)',
        definition: 'An amount of the company\'s profits which is paid to the ' +
        'holders of that company\'s stock. Dividend is paid as a certain amount per share. ' +
        'Dividend yield is a percentage calculated as (dividend per share / price per share) * 100%.'
      },
      {
        title: 'Free Cash Flow Yield (abbrev. as FCFY)',
        definition: 'A comparison between free cash flow per share and share price. ' +
        'Higher percentages mean the company is generating more free cash flow per share, which is appealing. ' +
        'Calculated as (free cash flow per share / market price per share) * 100%.'
      },
      {
        title: 'High',
        definition: 'Highest price at which the security was traded during the trading day.'
      },
      {
        title: 'Low',
        definition: 'Lowest price at which the security was traded during the trading day.'
      },
      {
        title: 'Market Cap',
        definition: 'Market capitalization (market cap) is the total ' +
        'market value of a company\'s outstanding shares. ' +
        'To calculate market cap, multiply the company\'s number of outstanding shares by it\'s share price.'
      },
      {
        title: 'Open',
        definition: 'Price of the security at the beginning of the trading day.'
      },
      {
        title: 'Price-Earnings Ratio (EPS)',
        definition: 'Used for valuing a company, P/E ratio the ratio of ' +
        'a company\'s share price to it\'s earnings per share. ' +
        'A low P/E ratio can suggest a stock is undervalued, ' +
        'but factoring in future growth rate and other metrics can say otherwise. ' +
        'Earnings per share (abbrev. EPS) is net income per outstanding share of common stock.'
      },
      {
        title: 'Return On Equity (abbrev. as ROE)',
        definition: 'How well the company generates returns on the investment from it\'s shareholders. ' +
        'It is how much after tax profit the company earned in comparison to total shareholder equity. ' +
        'Calculated as (net income / shareholder equity) * 100%.'
      },
      {
        title: 'Volume (Avg)',
        definition: 'The total number of a security that changed hands during the trading day. ' +
        'Average volume is the average number of a security that changes hands during a trading day.'
      }
    ];
  }
};