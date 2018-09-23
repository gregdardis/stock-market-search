import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  beforeEach(() => {
    selectors.fetchingSelector = jest.fn()
      .mockReturnValue(null);

    selectors.selectedStockSymbolSelector = jest.fn()
      .mockReturnValue(null);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('properly maps state when not fetching and no selectedStock', () => {
    const mockState = {
      fetching: null,
      selectedStock: null
    };
    expect(mapStateToProps(mockState))
      .to.deep.equal({
        showNoDataMessage: true,
        showResults: false
      });
  });
  it('properly maps state when fetching and no selectedStock', () => {
    const mockStateFetching = {
      fetching: 'MSFT',
      selectedStock: null
    };

    selectors.fetchingSelector
      .mockReturnValue(mockStateFetching.fetching);

    expect(mapStateToProps(mockStateFetching))
      .to.deep.equal({
        showNoDataMessage: false,
        showResults: false
      });
  });
  it('properly maps state when selectedStock but not fetching', () => {
    const mockStateSelectedStock = {
      fetching: null,
      selectedStock: 'MSFT'
    };

    selectors.selectedStockSymbolSelector
      .mockReturnValue(mockStateSelectedStock.selectedStock);

    expect(mapStateToProps(mockStateSelectedStock))
      .to.deep.equal({
        showNoDataMessage: false,
        showResults: true
      });
  });
  it('properly maps state when both selectedStock and fetching', () => {
    const mockStateSelectedStockAndFetching = {
      fetching: 'MSFT',
      selectedStock: 'MSFT'
    };

    selectors.selectedStockSymbolSelector
      .mockReturnValue(mockStateSelectedStockAndFetching.selectedStock);

    selectors.fetchingSelector
      .mockReturnValue(mockStateSelectedStockAndFetching.fetching);

    expect(mapStateToProps(mockStateSelectedStockAndFetching))
      .to.deep.equal({
        showNoDataMessage: false,
        showResults: true
      });
  });
});