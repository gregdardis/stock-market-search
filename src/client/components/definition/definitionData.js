export function getDefinitionsArray() {
  return [
    {
      title: 'Dividend (Yield %)',
      definition: 'An amount of the company\'s profits which is paid to ' +
      'the holders of that company\'s stock. Dividends are paid as a ' +
      'certain amount of money per share.',
      equations: ['dividend\\ yield\\ =\\ ' +
      '\\frac{dividend\\ per\\ share}{price\\ per\\ share}' +
      '\\ *\\ 100\\%']
    },
    {
      title: 'Free Cash Flow Yield (abbrev. as FCFY)',
      definition: 'A comparison between free cash flow per share and ' +
      'share price. Higher percentages mean the company is generating ' +
      'more free cash flow per share, which is appealing.',
      equations: ['free\\ cash\\ flow\\ yield\\ =\\ ' +
      '\\frac{free\\ cash\\ flow\\ per\\ share}{price\\ per\\ share}' +
      '\\ *\\ 100\\%']
    },
    {
      title: 'High',
      definition: 'Highest price at which the security was traded during ' +
      'the trading day.'
    },
    {
      title: 'Low',
      definition: 'Lowest price at which the security was traded during ' +
      'the trading day.'
    },
    {
      title: 'Market Cap',
      definition: 'Market capitalization (market cap) is the total ' +
      'market value of a company\'s outstanding shares.',
      equations: ['market\\ cap\\ =\\ ' +
      'outstanding\\ shares\\ *\\ price\\ per\\ share']
    },
    {
      title: 'Open',
      definition: 'Price of the security at the beginning of the trading day.'
    },
    {
      title: 'Price-Earnings Ratio (EPS)',
      definition: 'Used for valuing a company. ' +
      'A low P/E ratio can suggest a stock is undervalued, ' +
      'but factoring in future growth rate and other metrics can say ' +
      'otherwise. A "trailing" P/E means that the ' +
      'P/E is measured over the last 12 months. ' +
      'Earnings per share (abbrev. EPS) is the inverse ' +
      'of P/E.',
      equations: ['P/E\\ ratio\\ =\\ ' +
      '\\frac{price\\ per\\ share}{earnings\\ per\\ share}',
      'earnings\\ per\\ share\\ =\\ ' +
      '\\frac{total\\ net\\ income}{outstanding\\ shares}']
    },
    {
      title: 'Return On Equity (abbrev. as ROE)',
      definition: 'How well the company generates returns on the ' +
      'investment from its shareholders. It is how much after tax ' +
      'profit the company earned in comparison to total shareholder ' +
      'equity.',
      equations: ['return\\ on\\ equity\\ =\\ ' +
      '\\frac{net\\ income}{shareholder\\ equity}' +
      '\\ *\\ 100\\%']
    },
    {
      title: 'Volume (Avg)',
      definition: 'The total number of a security that changed hands ' +
      'during the trading day. Average volume is the average number ' +
      'of a security that changes hands during a trading day.'
    }
  ];
}