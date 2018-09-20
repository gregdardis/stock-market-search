import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as isSearchedStockSelectedAndCached
  from '../../../utils/stockDataUtils/isSearchedStockSelectedAndCached';

describe('mapStateToProps', () => {
  const mockState = {
    fetching: 'MSFT',
    selectedStock: 'MSFT',
    stocks: {
      MSFT: {}
    }
  };

  it('should map state to props properly', () => {
    isSearchedStockSelectedAndCached.isSearchedStockSelectedAndCached =
      jest.fn().mockReturnValue(true);

    expect(mapStateToProps(mockState)).to.deep.equal({
      showingCachedStock: true
    });

    jest.resetAllMocks();
  });
});