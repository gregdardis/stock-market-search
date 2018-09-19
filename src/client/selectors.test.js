import { expect } from 'chai';

import {
  chartTimePeriodIndexSelector,
  companyNameSelector,
  currentPriceSelector,
  currentPriceValueSelector,
  exchangeSelector,
  fetchingSelector,
  previousCloseSelector,
  previousCloseValueSelector,
  searchCurrentTextSelector,
  searchErrorSelector,
  searchSelector,
  selectedStockSelector,
  selectedStockSymbolSelector,
  selectedStockValueForKeySelector,
  stockOverviewDataSelector,
  stocksSelector
} from './selectors';
import {
  LABEL_CURRENT_PRICE,
  LABEL_PREVIOUS_CLOSE
} from '../constants/userFacingStrings';

const mockSearch = {
  currentText: 'MSFTT',
  error: 'No stock with symbol "MSFTT" was found.'
};

const mockStockOverviewData = {
  [LABEL_PREVIOUS_CLOSE]: {
    value: 112.14,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  [LABEL_CURRENT_PRICE]: {
    value: 113.23,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  }
};

const mockOneDayStockData = [{
  dateAndTime: '9:30 AM',
  price: 112.99500274658203
}, {
  dateAndTime: '9:35 AM',
  price: 113.06999969482422
}];

const mockStocks = {
  MSFT: {
    companyName: 'Microsoft Corporation',
    symbol: 'MSFT',
    exchange: 'NasdaqGS',
    stockOverviewData: mockStockOverviewData,
    fiveDayStockData: {},
    lastUpdated: 1537117775259,
    maxStockData: {},
    oneDayStockData: mockOneDayStockData
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

describe('currentPriceSelector', () => {
  it('should return current price of selected stock from state', () => {
    const currentPrice = currentPriceSelector
      .resultFunc(mockStockOverviewData);

    expect(currentPrice)
      .to.deep.equal(mockStockOverviewData[LABEL_CURRENT_PRICE]);
  });
});

describe('currentPriceValueSelector', () => {
  it('should return value of current price from the state', () => {
    const currentPriceValue = currentPriceValueSelector
      .resultFunc(mockStockOverviewData[LABEL_CURRENT_PRICE]);

    expect(currentPriceValue)
      .to.deep.equal(mockStockOverviewData[LABEL_CURRENT_PRICE].value);
  });
});

describe('previousCloseSelector', () => {
  it('should return previous close of selected stock from state', () => {
    const previousClose = previousCloseSelector
      .resultFunc(mockStockOverviewData);

    expect(previousClose)
      .to.deep.equal(mockStockOverviewData[LABEL_PREVIOUS_CLOSE]);
  });
});

describe('previousCloseValueSelector', () => {
  it('should return value of previousClose from the state', () => {
    const previousCloseValue = previousCloseValueSelector
      .resultFunc(mockStockOverviewData[LABEL_PREVIOUS_CLOSE]);

    expect(previousCloseValue)
      .to.deep.equal(mockStockOverviewData[LABEL_PREVIOUS_CLOSE].value);
  });
});

describe('companyNameSelector', () => {
  it('should return company name for the given stock', () => {
    const companyName = companyNameSelector
      .resultFunc(mockStocks.MSFT);

    expect(companyName).to.deep.equal(mockStocks.MSFT.companyName);
  });
});

describe('selectedStockValueForKeySelector', () => {
  expect(selectedStockValueForKeySelector(mockState, 'oneDayStockData'))
    .to.deep.equal(mockOneDayStockData);
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

describe('searchCurrentTextSelector', () => {
  it('should return currentText of search from state', () => {
    expect(searchCurrentTextSelector(mockState))
      .to.equal(mockSearch.currentText);
  });
});

describe('exchangeSelector', () => {
  it('should get exchange for selectedStock', () => {
    expect(exchangeSelector(mockState))
      .to.equal(mockStocks.MSFT.exchange);
  });
});