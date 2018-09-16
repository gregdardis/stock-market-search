import { expect } from 'chai';

import {
  companyNameSelector,
  selectedStockSelector,
  selectedStockSymbolSelector,
  stocksSelector
} from './selectors';

const mockStocks = {
  MSFT: {
    companyName: 'Microsoft Corporation',
    symbol: 'MSFT',
    exchange: 'NasdaqGS',
    stockOverviewData: {},
    fiveDayStockData: {},
    lastUpdated: 1537117775259,
    maxStockData: {},
    oneDayStockData: {}
  }
};

const mockState = {
  selectedStock: 'MSFT',
  stocks: mockStocks
};

describe('selectedStockSymbolSelector', () => {
  it('should return selectedStock from state', () => {
    expect(selectedStockSymbolSelector(mockState)).to.deep.equal('MSFT');
  });
});

describe('stocksSelector', () => {
  it('should return stocks from state', () => {
    expect(stocksSelector(mockState)).to.deep.equal(mockStocks);
  });
});

describe('selectedStockSelector', () => {
  it('should return MSFT stock if selectedStock is MSFT', () => {
    const selectedStock = selectedStockSelector
      .resultFunc(mockState.selectedStock, mockState.stocks);

    expect(selectedStock).to.deep.equal(mockStocks.MSFT);
  });
});

describe('companyNameSelector', () => {
  it('should return MSFT company name if selectedStock is MSFT', () => {
    const companyName = companyNameSelector
      .resultFunc(mockStocks.MSFT);

    expect(companyName).to.deep.equal(mockStocks.MSFT.companyName);
  });
});