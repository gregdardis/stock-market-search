import * as stateGetters from '.';
import {
  getFormattedStockExchange
} from './getFormattedStockExchange';

describe('getFormattedStockExchange', () => {
  let mockGetSelectedStockValueForKey;

  beforeAll(() => {
    mockGetSelectedStockValueForKey = jest.spyOn(
      stateGetters,
      'getSelectedStockValueForKey'
    );
  });

  afterAll(() => {
    mockGetSelectedStockValueForKey.mockRestore();
  });

  it('calls getSelectedStockValueForKey once', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('Toronto');
    getFormattedStockExchange({});
    expect(mockGetSelectedStockValueForKey).toHaveBeenCalledTimes(1);
  });
  it('returns TSX if state.exchange is Toronto', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('Toronto');
    expect(getFormattedStockExchange({ exchange: 'Toronto' }))
      .toEqual('TSX');
  });
  it('returns NASDAQ if state.exchange is NasdaqGS', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('NasdaqGS');
    expect(getFormattedStockExchange({ exchange: 'NasdaqGS' }))
      .toEqual('NASDAQ');
  });
  it('returns the exchange if state.exchange is anything else', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('NYSE');
    expect(getFormattedStockExchange({ exchange: 'Anything else' }))
      .toEqual('NYSE');
  });
});