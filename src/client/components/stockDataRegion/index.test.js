import { expect } from 'chai';

import { mapStateToProps } from '.';

describe('mapStateToProps', () => {
  const mockState = {
    fetching: null,
    selectedStock: null
  };

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

    expect(mapStateToProps(mockStateSelectedStockAndFetching))
      .to.deep.equal({
        showNoDataMessage: false,
        showResults: true
      });
  });
});