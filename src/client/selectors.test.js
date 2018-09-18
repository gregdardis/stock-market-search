import { expect } from 'chai';

import {
  chartTimePeriodIndexSelector,
  companyNameSelector,
  fetchingSelector,
  searchErrorSelector,
  searchSelector,
  selectedStockSelector,
  selectedStockSymbolSelector,
  stockOverviewDataSelector,
  stocksSelector
} from './selectors';

const mockSearch = {
  currentText: 'MSFTT',
  error: 'No stock with symbol "MSFTT" was found.'
};

const mockStockOverviewData = {
  'Previous Close': {
    value: 112.14,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Current Price': {
    value: 113.23,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  }
};

const mockStocks = {
  MSFT: {
    companyName: 'Microsoft Corporation',
    symbol: 'MSFT',
    exchange: 'NasdaqGS',
    stockOverviewData: mockStockOverviewData,
    fiveDayStockData: {},
    lastUpdated: 1537117775259,
    maxStockData: {},
    oneDayStockData: {}
  }
};

const mockState = {
  chartTimePeriodIndex: 1,
  fetching: true,
  search: mockSearch,
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

describe('stockOverviewDataSelector', () => {
  it('should return stockOverviewData from state', () => {
    const stockOverviewData = stockOverviewDataSelector
      .resultFunc(mockStocks.MSFT);

    expect(stockOverviewData)
      .to.deep.equal(mockStockOverviewData);
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

describe('fetchingSelector', () => {
  it('should return fetching from state', () => {
    expect(fetchingSelector(mockState))
      .to.equal(true);
  });
});

describe('searchSelector', () => {
  it('should return search from state', () => {
    expect(searchSelector(mockState)).to.deep.equal(mockSearch);
  });
});

describe('searchErrorSelector', () => {
  it('should return search error from state', () => {
    expect(searchErrorSelector(mockState))
      .to.equal(mockSearch.error);
  });
});