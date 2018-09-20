import { expect } from 'chai';

import {
  isSearchedStockSelectedAndCached
} from './isSearchedStockSelectedAndCached';
import * as selectors from '../../client/selectors';

describe('isSearchedStockSelectedAndCached', () => {
  const mockStocks = {
    MSFT: {
      symbol: 'MSFT'
    }
  };

  const mockState = {
    fetching: 'MSFT',
    selectedStock: 'MSFT',
    stocks: mockStocks
  };

  // beforeAll(() => {
  //   selectors.fetchingSelector = jest.fn().mockReturnValue('MSFT');
  //   selectors.stocksSelector = jest.fn().mockReturnValue(mockStocks);
  // });

  // afterAll(() => {
  //   jest.resetAllMocks();
  // });

  it('returns true if selected stock is being fetched', () => {
    expect(isSearchedStockSelectedAndCached(mockState))
      .to.equal(true);
  });
  it('returns false if fetching is null', () => {
    const mockFalseFetchingState = {
      ...mockState,
      fetching: null
    };
    expect(isSearchedStockSelectedAndCached(mockFalseFetchingState))
      .to.equal(false);
  });
  it('returns false if fetching is set to a non-cached stock', () => {
    const mockNonCachedButFetchingState = {
      ...mockState,
      fetching: 'GOOG'
    };
    expect(isSearchedStockSelectedAndCached(mockNonCachedButFetchingState))
      .to.equal(false);
  });
  it('returns false if selectedStock is not the stock being fetched', () => {
    const mockSelectedStockNotFetchedState = {
      ...mockState,
      selectedStock: 'A'
    };
    expect(isSearchedStockSelectedAndCached(mockSelectedStockNotFetchedState))
      .to.equal(false);
  });
});