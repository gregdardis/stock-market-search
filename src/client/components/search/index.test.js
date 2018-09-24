import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../../client/selectors';

const mockStocks = {
  MSFT: {
    companyName: 'Microsoft Corporation',
    symbol: 'MSFT',
    exchange: 'NasdaqGS',
    stockOverviewData: {},
    fiveDayStockData: {},
    lastUpdated: 1537373933719,
    maxStockData: {},
    oneDayStockData: {}
  }
};

const mockState = {
  search: {
    currentText: 'MSFT',
    error: null
  },
  stocks: mockStocks
};

describe('mapStateToProps', () => {
  it('maps state to props properly', () => {
    const mockText = 'MSFT';

    selectors.searchCurrentTextSelector = jest.fn()
      .mockReturnValue(mockText);

    selectors.searchErrorSelector = jest.fn()
      .mockReturnValue(null);

    selectors.stocksSelector = jest.fn()
      .mockReturnValue(mockStocks);

    expect(mapStateToProps(mockState)).to.deep.equal({
      text: mockText,
      hasError: false,
      stocks: mockStocks
    });

    jest.resetAllMocks();
  });
});