import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as getFormattedStockExchange from
  '../../../utils/stateGetters/getFormattedStockExchange';

describe('mapStateToProps', () => {
  it('maps state to props properly', () => {
    const mockGetFormattedStockExchange = jest.spyOn(
      getFormattedStockExchange,
      'getFormattedStockExchange'
    ).mockReturnValue('TSX');

    expect(mapStateToProps({ exchange: 'Toronto' }))
      .to.deep.equal({ exchange: 'TSX' });

    mockGetFormattedStockExchange.mockRestore();
  });
});