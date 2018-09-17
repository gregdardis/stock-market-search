import { expect } from 'chai';

import {
  chartTimePeriodIndexSelector,
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
  chartTimePeriodIndex: 1,
  selectedStock: 'MSFT',
  stocks: mockStocks
};

describe('selectedStockSymbolSelector', () => {
  it('should return selectedStock from state', () => {
    expect(selectedStockSymbolSelector(mockState))
      .to.deep.equal(mockState.selectedStock);
  });
});

describe('stocksSelector', () => {
  it('should return stocks from state', () => {
    expect(stocksSelector(mockState)).to.deep.equal(mockStocks);
  });
});

describe('selectedStockSelector', () => {
  it('should return actual stock data for selectedStock', () => {
    const selectedStock = selectedStockSelector
      .resultFunc(mockState.selectedStock, mockState.stocks);

    expect(selectedStock).to.deep.equal(mockStocks.MSFT);
  });
});

describe('companyNameSelector', () => {
  it('should return company name for the given stock', () => {
    const companyName = companyNameSelector
      .resultFunc(mockStocks.MSFT);

    expect(companyName).to.deep.equal(mockStocks.MSFT.companyName);
  });
});

describe('chartTimePeriodIndexSelector', () => {
  it('should return chartTimePeriodIndex from state', () => {
    expect(chartTimePeriodIndexSelector(mockState))
      .to.equal(mockState.chartTimePeriodIndex);
  });
});