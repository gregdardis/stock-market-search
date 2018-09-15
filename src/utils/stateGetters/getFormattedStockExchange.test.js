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
  it('returns TSX if given Toronto', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('Toronto');
    expect(getFormattedStockExchange({})).toEqual('TSX');
  });
  it('returns NASDAQ if given NasdaqGS', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('NasdaqGS');
    expect(getFormattedStockExchange({})).toEqual('NASDAQ');
  });
  it('returns the exchange given if anything else', () => {
    mockGetSelectedStockValueForKey.mockReturnValue('NYSE');
    expect(getFormattedStockExchange({})).toEqual('NYSE');
  });

});