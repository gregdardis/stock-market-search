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
      .toEqual({ exchange: 'TSX' });

    mockGetFormattedStockExchange.mockRestore();
  });
});