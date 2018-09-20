import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  const mockState = {
    fetching: null,
    selectedStock: null
  };

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
    expect(mapStateToProps(mockState))
      .to.deep.equal({
        showNoDataMessage: true,
        showResults: false
      });
  });
  it('properly maps state when fetching and no selectedStock', () => {
    const mockStateFetching = {
      ...mockState,
      fetching: 'MSFT'
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
      ...mockState,
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
      ...mockState,
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